import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import {
  ROWS,
  SEATS_PER_ROW,
  ROW_SPACING_Z,
  ROW_START_Z,
  SCREEN_Z,
  SCREEN_Y,
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  ROW_ELEVATIONS_Y,
  getSeatWorldCoords
} from "../data/seatsData.js";
import { initCinemaWasm } from "../wasm/wasmEngine.js";

function createRoundedRectShape(width, height, radius) {
  const shape = new THREE.Shape();
  const x = -width / 2;
  const y = 0;
  shape.moveTo(x, y);
  shape.lineTo(x, y + height - radius);
  shape.quadraticCurveTo(x, y + height, x + radius, y + height);
  shape.lineTo(x + width - radius, y + height);
  shape.quadraticCurveTo(x + width, y + height, x + width, y + height - radius);
  shape.lineTo(x + width, y);
  shape.closePath();
  return shape;
}

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export default function Auditorium3D({
  modeRef,
  selectedSeatRef,
  btnMetricsRef,
  map2DLayerRef,
  povHudLayerRef,
  onTransitionComplete
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x050404);

    const camera = new THREE.PerspectiveCamera(52, 390 / 844, 0.08, 120);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: "high-performance"
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.innerHTML = "";
    container.appendChild(renderer.domElement);

    // Cinema Screen Texture (Desert Dunes)
    const screenCanvas = document.createElement("canvas");
    screenCanvas.width = 720;
    screenCanvas.height = 406;
    const sCtx = screenCanvas.getContext("2d");
    const screenTexture = new THREE.CanvasTexture(screenCanvas);
    screenTexture.colorSpace = THREE.SRGBColorSpace;
    screenTexture.minFilter = THREE.LinearFilter;
    screenTexture.magFilter = THREE.LinearFilter;

    const desertImg = new Image();
    let desertImgLoaded = false;
    desertImg.onload = () => {
      desertImgLoaded = true;
    };
    desertImg.src = `${import.meta.env.BASE_URL}desert-screen.jpg`;

    function renderDesertMovieFrame(timeSec) {
      const w = screenCanvas.width;
      const h = screenCanvas.height;
      if (desertImgLoaded) {
        const panX = Math.sin(timeSec * 0.25) * 4;
        sCtx.drawImage(desertImg, -6 + panX, -3, w + 12, h + 6);
      } else {
        const skyGrad = sCtx.createLinearGradient(0, 0, 0, h);
        skyGrad.addColorStop(0, "#d7c9bc");
        skyGrad.addColorStop(1, "#8d745e");
        sCtx.fillStyle = skyGrad;
        sCtx.fillRect(0, 0, w, h);
      }
      screenTexture.needsUpdate = true;
    }
    renderDesertMovieFrame(0);

    const screenMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(SCREEN_WIDTH, SCREEN_HEIGHT, 1, 1),
      new THREE.MeshBasicMaterial({ map: screenTexture })
    );
    screenMesh.position.set(0, SCREEN_Y, SCREEN_Z);
    scene.add(screenMesh);

    const frameMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(SCREEN_WIDTH + 6, SCREEN_HEIGHT + 4),
      new THREE.MeshBasicMaterial({ color: 0x020203 })
    );
    frameMesh.position.set(0, SCREEN_Y, SCREEN_Z - 0.12);
    scene.add(frameMesh);

    // Auditorium Lighting
    scene.add(new THREE.AmbientLight(0x3a1416, 1.15));

    const screenBounceLight = new THREE.DirectionalLight(0xffdfc4, 2.2);
    screenBounceLight.position.set(0, SCREEN_Y + 2.2, SCREEN_Z + 1.2);
    screenBounceLight.target.position.set(0, 0.5, 1.0);
    scene.add(screenBounceLight);
    scene.add(screenBounceLight.target);

    const topRimLight = new THREE.DirectionalLight(0xe62e28, 1.05);
    topRimLight.position.set(0, 7.5, -2.5);
    topRimLight.target.position.set(0, 0, 1.5);
    scene.add(topRimLight);
    scene.add(topRimLight.target);

    const rearFillLight = new THREE.DirectionalLight(0x8c141b, 1.15);
    rearFillLight.position.set(0, 3.5, 12.0);
    rearFillLight.target.position.set(0, 0.5, -4.0);
    scene.add(rearFillLight);
    scene.add(rearFillLight.target);

    // Stadium Risers, Aisle Steps & LED Strips
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0x110c0b,
      roughness: 0.9,
      metalness: 0.05
    });
    const stepRiserMat = new THREE.MeshStandardMaterial({
      color: 0x181110,
      roughness: 0.85,
      metalness: 0.08
    });
    const ledStripMat = new THREE.MeshBasicMaterial({
      color: 0xb8a896,
      transparent: true,
      opacity: 0.65
    });

    ROWS.forEach((_, rowIdx) => {
      const vipExtraZ = rowIdx >= 7 ? 0.22 : 0;
      const z = ROW_START_Z + rowIdx * ROW_SPACING_Z + vipExtraZ;
      const y = ROW_ELEVATIONS_Y[rowIdx];
      const prevY = rowIdx > 0 ? ROW_ELEVATIONS_Y[rowIdx - 1] : -0.15;
      const riserHeight = Math.max(0.24, y - prevY + 0.08);

      const riserMesh = new THREE.Mesh(
        new THREE.BoxGeometry(14.6, riserHeight, ROW_SPACING_Z + 0.26),
        floorMat
      );
      riserMesh.position.set(0, y - riserHeight * 0.5, z);
      scene.add(riserMesh);

      const midStepY = (y + prevY) * 0.5;
      const midStepGeo = new THREE.BoxGeometry(
        0.92,
        Math.max(0.12, (y - prevY) * 0.5),
        ROW_SPACING_Z * 0.48
      );
      [-3.04, 3.04].forEach((aisleX) => {
        if (rowIdx > 0) {
          const midStep = new THREE.Mesh(midStepGeo, stepRiserMat);
          midStep.position.set(aisleX, midStepY - 0.06, z - ROW_SPACING_Z * 0.42);
          scene.add(midStep);
        }
        const strip = new THREE.Mesh(new THREE.PlaneGeometry(0.84, 0.026), ledStripMat);
        strip.rotation.x = -Math.PI / 2;
        strip.position.set(aisleX, y + 0.008, z - ROW_SPACING_Z * 0.36);
        scene.add(strip);
      });
    });

    const stageFloor = new THREE.Mesh(new THREE.PlaneGeometry(24, 10), floorMat);
    stageFloor.rotation.x = -Math.PI / 2;
    stageFloor.position.set(0, -0.02, -7.8);
    scene.add(stageFloor);

    const backFloor = new THREE.Mesh(new THREE.PlaneGeometry(24, 8), floorMat);
    backFloor.rotation.x = -Math.PI / 2;
    backFloor.position.set(0, ROW_ELEVATIONS_Y[8], ROW_START_Z + 9 * ROW_SPACING_Z + 2.6);
    scene.add(backFloor);

    // Seat Materials & Shared Geometries (GPU InstancedMesh + WASM Matrix Buffer)
    const velvetRedMat = new THREE.MeshStandardMaterial({
      color: 0x7d0e14,
      roughness: 0.78,
      metalness: 0.02
    });
    const velvetReclinerMat = new THREE.MeshStandardMaterial({
      color: 0x6e0c12,
      roughness: 0.74,
      metalness: 0.03
    });
    const selectedGreenMat = new THREE.MeshStandardMaterial({
      color: 0x7ce395,
      emissive: 0x2b8544,
      emissiveIntensity: 0.58,
      roughness: 0.35,
      metalness: 0.05
    });
    const armrestMat = new THREE.MeshStandardMaterial({
      color: 0x1b1514,
      roughness: 0.42,
      metalness: 0.18
    });

    const standardBackGeo = new THREE.ExtrudeGeometry(
      createRoundedRectShape(0.54, 0.68, 0.1),
      {
        depth: 0.09,
        curveSegments: 28,
        bevelEnabled: true,
        bevelSegments: 14,
        steps: 1,
        bevelSize: 0.032,
        bevelThickness: 0.032
      }
    );
    standardBackGeo.center();
    standardBackGeo.computeVertexNormals();

    const reclinerBackGeo = new THREE.ExtrudeGeometry(
      createRoundedRectShape(0.58, 0.72, 0.11),
      {
        depth: 0.1,
        curveSegments: 28,
        bevelEnabled: true,
        bevelSegments: 14,
        steps: 1,
        bevelSize: 0.036,
        bevelThickness: 0.036
      }
    );
    reclinerBackGeo.center();
    reclinerBackGeo.computeVertexNormals();

    // Instanced Backrest Meshes (driven directly by WASM linear memory!)
    const stdBackInstanced = new THREE.InstancedMesh(standardBackGeo, velvetRedMat, 98);
    const recBackInstanced = new THREE.InstancedMesh(reclinerBackGeo, velvetReclinerMat, 28);
    stdBackInstanced.frustumCulled = false;
    recBackInstanced.frustumCulled = false;
    scene.add(stdBackInstanced);
    scene.add(recBackInstanced);

    // Static Instanced Cushions, Bolsters & Armrests
    const stdCushionGeo = new THREE.BoxGeometry(0.56, 0.14, 0.54);
    const recCushionGeo = new THREE.BoxGeometry(0.6, 0.14, 0.54);
    const stdCushionInst = new THREE.InstancedMesh(stdCushionGeo, velvetRedMat, 98);
    const recCushionInst = new THREE.InstancedMesh(recCushionGeo, velvetReclinerMat, 28);
    scene.add(stdCushionInst);
    scene.add(recCushionInst);

    const stdBolsterGeo = new THREE.CylinderGeometry(0.065, 0.065, 0.54, 16);
    stdBolsterGeo.rotateZ(Math.PI / 2);
    const recBolsterGeo = new THREE.CylinderGeometry(0.065, 0.065, 0.58, 16);
    recBolsterGeo.rotateZ(Math.PI / 2);
    const stdBolsterInst = new THREE.InstancedMesh(stdBolsterGeo, velvetRedMat, 98);
    const recBolsterInst = new THREE.InstancedMesh(recBolsterGeo, velvetReclinerMat, 28);
    scene.add(stdBolsterInst);
    scene.add(recBolsterInst);

    const armGeo = new THREE.CylinderGeometry(0.034, 0.034, 0.52, 14);
    armGeo.rotateX(Math.PI / 2);
    const armInst = new THREE.InstancedMesh(armGeo, armrestMat, 126 * 2);
    scene.add(armInst);

    const dummy = new THREE.Object3D();
    const zeroMatrix = new THREE.Matrix4().makeScale(0, 0, 0);

    function updateStaticSeatInstances(selectedRowIdx = -1, selectedSeatNum = -1) {
      let sIdx = 0;
      let rIdx = 0;
      let aIdx = 0;

      for (let rowIdx = 0; rowIdx < 9; rowIdx++) {
        const isRecliner = rowIdx >= 7;
        const width = isRecliner ? 0.6 : 0.56;
        for (let seatNum = 1; seatNum <= SEATS_PER_ROW; seatNum++) {
          const { x, y, z } = getSeatWorldCoords(rowIdx, seatNum);
          const isSelected = rowIdx === selectedRowIdx && seatNum === selectedSeatNum;

          // Cushion (hide red instance for selected seat to prevent Z-fighting with green selectedGroup!)
          if (isSelected) {
            if (isRecliner) {
              recCushionInst.setMatrixAt(rIdx, zeroMatrix);
              recBolsterInst.setMatrixAt(rIdx, zeroMatrix);
              rIdx++;
            } else {
              stdCushionInst.setMatrixAt(sIdx, zeroMatrix);
              stdBolsterInst.setMatrixAt(sIdx, zeroMatrix);
              sIdx++;
            }
          } else {
            dummy.position.set(x, y + 0.28, z - 0.02);
            dummy.rotation.set(0, 0, 0);
            dummy.scale.set(1, 1, 1);
            dummy.updateMatrix();
            if (isRecliner) {
              recCushionInst.setMatrixAt(rIdx, dummy.matrix);
            } else {
              stdCushionInst.setMatrixAt(sIdx, dummy.matrix);
            }

            // Bolster
            dummy.position.set(x, y + 0.34, z + 0.21);
            dummy.updateMatrix();
            if (isRecliner) {
              recBolsterInst.setMatrixAt(rIdx, dummy.matrix);
              rIdx++;
            } else {
              stdBolsterInst.setMatrixAt(sIdx, dummy.matrix);
              sIdx++;
            }
          }

          // Left & Right Armrests
          dummy.position.set(x - width * 0.5 - 0.032, y + 0.42, z);
          dummy.rotation.set(isRecliner ? -0.15 : -0.05, 0, 0);
          dummy.scale.set(1, 1, 1);
          dummy.updateMatrix();
          armInst.setMatrixAt(aIdx++, dummy.matrix);

          dummy.position.set(x + width * 0.5 + 0.032, y + 0.42, z);
          dummy.updateMatrix();
          armInst.setMatrixAt(aIdx++, dummy.matrix);
        }
      }
      stdCushionInst.instanceMatrix.needsUpdate = true;
      recCushionInst.instanceMatrix.needsUpdate = true;
      stdBolsterInst.instanceMatrix.needsUpdate = true;
      recBolsterInst.instanceMatrix.needsUpdate = true;
      armInst.instanceMatrix.needsUpdate = true;
    }

    updateStaticSeatInstances(-1, -1);

    // Dedicated Highlighted Selected Seat Group (Mint Green + Seat Number Badge)
    const selectedGroup = new THREE.Group();
    selectedGroup.visible = false;
    const selCushion = new THREE.Mesh(stdCushionGeo, selectedGreenMat);
    selCushion.position.set(0, 0.28, -0.02);
    selectedGroup.add(selCushion);

    const selBolster = new THREE.Mesh(stdBolsterGeo, selectedGreenMat);
    selBolster.position.set(0, 0.34, 0.21);
    selectedGroup.add(selBolster);

    const selBackrest = new THREE.Mesh(standardBackGeo, selectedGreenMat);
    selBackrest.position.set(0, 0.58, 0.22);
    selBackrest.rotation.x = 0.08;
    selectedGroup.add(selBackrest);

    const seatNumberCanvas = document.createElement("canvas");
    seatNumberCanvas.width = 128;
    seatNumberCanvas.height = 128;
    const snCtx = seatNumberCanvas.getContext("2d");
    const seatNumberTexture = new THREE.CanvasTexture(seatNumberCanvas);
    seatNumberTexture.colorSpace = THREE.SRGBColorSpace;

    function updateSeatNumberBadge(seatNum) {
      snCtx.clearRect(0, 0, 128, 128);
      snCtx.fillStyle = "#7ce395";
      snCtx.beginPath();
      snCtx.roundRect(14, 14, 100, 100, 26);
      snCtx.fill();
      snCtx.fillStyle = "#081b0d";
      snCtx.font = "700 54px -apple-system, BlinkMacSystemFont, sans-serif";
      snCtx.textAlign = "center";
      snCtx.textBaseline = "middle";
      snCtx.fillText(String(seatNum), 64, 67);
      seatNumberTexture.needsUpdate = true;
    }

    const seatNumberBadgeMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(0.42, 0.42),
      new THREE.MeshBasicMaterial({
        map: seatNumberTexture,
        transparent: true,
        depthWrite: false,
        polygonOffset: true,
        polygonOffsetFactor: -4,
        polygonOffsetUnits: -4
      })
    );
    seatNumberBadgeMesh.rotation.x = -Math.PI / 2;
    seatNumberBadgeMesh.position.set(0, 0.365, -0.05);
    seatNumberBadgeMesh.renderOrder = 2;
    selectedGroup.add(seatNumberBadgeMesh);
    scene.add(selectedGroup);

    // Load WASM Engine
    let wasmBridge = null;
    initCinemaWasm()
      .then((bridge) => {
        wasmBridge = bridge;
        // Initialize backrest matrices in WASM
        bridge.exports.update_backrest_matrices(0, -1, -1);
        stdBackInstanced.instanceMatrix.array.set(bridge.stdBackrestView);
        recBackInstanced.instanceMatrix.array.set(bridge.recBackrestView);
        stdBackInstanced.instanceMatrix.needsUpdate = true;
        recBackInstanced.instanceMatrix.needsUpdate = true;
      })
      .catch((err) => {
        console.error("Failed to load WASM engine:", err);
      });

    // Touch / Pointer Drag-to-Look State (Natural non-inverted direction!)
    let isDragging3D = false;
    let activePointerId = null;
    let lastPointerX = 0;
    let lastPointerY = 0;
    let lastMoveTime = 0;

    const lookState = {
      yaw: 0,
      pitch: 0,
      targetYaw: 0,
      targetPitch: 0,
      yawVel: 0,
      pitchVel: 0,
      lastSeatKey: null
    };

    const MAX_YAW_RAD = 0.72;
    const MAX_PITCH_RAD = 0.42;

    function onLookStart(clientX, clientY, pointerId = null) {
      if (modeRef.current !== "POV_3D" && modeRef.current !== "TRANSITION_TO_3D") return;
      isDragging3D = true;
      activePointerId = pointerId;
      lastPointerX = clientX;
      lastPointerY = clientY;
      lastMoveTime = performance.now();
      lookState.yawVel = 0;
      lookState.pitchVel = 0;
    }

    function onLookMove(clientX, clientY) {
      if (!isDragging3D) return;
      const now = performance.now();
      const dt = Math.max(4, now - lastMoveTime);
      const dx = clientX - lastPointerX;
      const dy = clientY - lastPointerY;
      lastPointerX = clientX;
      lastPointerY = clientY;
      lastMoveTime = now;

      const refW = Math.max(320, container.clientWidth || 390);
      const sensitivity = 1.65 / refW;

      // Fixed natural touch direction (pulling scene in finger direction)
      const deltaYaw = dx * sensitivity;
      const deltaPitch = -dy * sensitivity * 0.85;

      const yawEdgeFactor = 1 - 0.55 * Math.pow(Math.abs(lookState.targetYaw) / MAX_YAW_RAD, 2);
      const pitchEdgeFactor = 1 - 0.55 * Math.pow(Math.abs(lookState.targetPitch) / MAX_PITCH_RAD, 2);

      lookState.targetYaw = THREE.MathUtils.clamp(
        lookState.targetYaw + deltaYaw * Math.max(0.25, yawEdgeFactor),
        -MAX_YAW_RAD,
        MAX_YAW_RAD
      );
      lookState.targetPitch = THREE.MathUtils.clamp(
        lookState.targetPitch + deltaPitch * Math.max(0.25, pitchEdgeFactor),
        -MAX_PITCH_RAD,
        MAX_PITCH_RAD
      );

      const instVelYaw = (deltaYaw / dt) * 16.67;
      const instVelPitch = (deltaPitch / dt) * 16.67;
      lookState.yawVel = lookState.yawVel * 0.4 + instVelYaw * 0.6;
      lookState.pitchVel = lookState.pitchVel * 0.4 + instVelPitch * 0.6;
    }

    function onLookEnd() {
      isDragging3D = false;
      activePointerId = null;
    }

    const handlePointerDown = (e) => {
      if (e.pointerType === "mouse" && e.button !== 0) return;
      onLookStart(e.clientX, e.clientY, e.pointerId);
      try {
        container.setPointerCapture(e.pointerId);
      } catch {}
    };

    const handlePointerMove = (e) => {
      if (!isDragging3D || (activePointerId !== null && e.pointerId !== activePointerId)) return;
      if (e.cancelable) e.preventDefault();
      onLookMove(e.clientX, e.clientY);
    };

    const handlePointerUp = (e) => {
      if (activePointerId !== null && e.pointerId !== activePointerId) return;
      onLookEnd();
    };

    const handleTouchMove = (e) => {
      if (isDragging3D && e.cancelable) e.preventDefault();
    };

    container.addEventListener("pointerdown", handlePointerDown);
    container.addEventListener("pointermove", handlePointerMove, { passive: false });
    container.addEventListener("pointerup", handlePointerUp);
    container.addEventListener("pointercancel", onLookEnd);
    container.addEventListener("touchmove", handleTouchMove, { passive: false });

    function handleResize() {
      const w = container.clientWidth || 390;
      const h = container.clientHeight || 844;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    }
    window.addEventListener("resize", handleResize);
    handleResize();

    let animFrameId = null;
    let lastFrameTime = performance.now();

    function applyWasmCameraPose(seat, rawT) {
      if (!wasmBridge) return;
      const { exports, stdBackrestView, recBackrestView, cameraOutView } = wasmBridge;
      const bm = btnMetricsRef.current;
      const w = container.clientWidth || 390;
      const h = container.clientHeight || 844;

      // 1. Update all 126 backrest 4x4 matrices in WASM linear memory
      exports.update_backrest_matrices(rawT, seat.rowIdx, seat.seatNum);
      stdBackInstanced.instanceMatrix.array.set(stdBackrestView);
      recBackInstanced.instanceMatrix.array.set(recBackrestView);
      stdBackInstanced.instanceMatrix.needsUpdate = true;
      recBackInstanced.instanceMatrix.needsUpdate = true;

      // 2. Compute exact Ray-Pinned Camera Pose + Spherical Head Look in WASM
      exports.compute_camera_frame(
        seat.rowIdx,
        seat.seatNum,
        rawT,
        bm.btnNdcX,
        bm.btnNdcY,
        bm.btnWidth,
        w,
        h,
        lookState.yaw,
        lookState.pitch
      );

      camera.position.set(cameraOutView[0], cameraOutView[1], cameraOutView[2]);
      camera.up.set(cameraOutView[6], cameraOutView[7], cameraOutView[8]);
      camera.lookAt(cameraOutView[3], cameraOutView[4], cameraOutView[5]);
      camera.fov = cameraOutView[9];
      camera.updateProjectionMatrix();

      // Update selected seat group
      const { x, y, z } = getSeatWorldCoords(seat.rowIdx, seat.seatNum);
      selectedGroup.position.set(x, y, z);
      selectedGroup.visible = true;
      const backScaleY = cameraOutView[13];
      const backH = seat.isRecliner ? 0.72 : 0.68;
      selBackrest.visible = rawT <= 0.86;
      selBackrest.scale.y = backScaleY;
      selBackrest.position.y = 0.24 + backH * 0.5 * backScaleY;
      seatNumberBadgeMesh.visible = rawT < 0.82;

      // 3. Sync 2D Map Layer directly from WASM outputs (syncScale, syncTiltDeg, syncOpacity)
      const mapEl = map2DLayerRef.current;
      if (mapEl) {
        if (rawT <= 0) {
          mapEl.style.opacity = "1";
          mapEl.style.transformOrigin = "50% 50%";
          mapEl.style.transform = "perspective(900px) rotateX(0deg) scale(1)";
          mapEl.classList.remove("hidden");
        } else if (rawT >= 0.4) {
          mapEl.style.opacity = "0";
          mapEl.classList.add("hidden");
        } else {
          mapEl.classList.remove("hidden");
          const scale = cameraOutView[10];
          const tiltDeg = cameraOutView[11];
          const opacity = cameraOutView[12];
          mapEl.style.transformOrigin = `${bm.btnCenterX.toFixed(1)}px ${bm.btnCenterY.toFixed(1)}px`;
          mapEl.style.transform = `perspective(900px) rotateX(${tiltDeg.toFixed(2)}deg) scale(${scale.toFixed(3)})`;
          mapEl.style.opacity = opacity.toFixed(3);
        }
      }
    }

    function animate(now) {
      animFrameId = requestAnimationFrame(animate);

      const dt = Math.min(50, Math.max(1, now - lastFrameTime));
      lastFrameTime = now;
      const frameScale = dt / 16.67;

      // Inertial head-look physics
      if (!isDragging3D && (Math.abs(lookState.yawVel) > 0.00005 || Math.abs(lookState.pitchVel) > 0.00005)) {
        lookState.targetYaw = THREE.MathUtils.clamp(
          lookState.targetYaw + lookState.yawVel * frameScale,
          -MAX_YAW_RAD,
          MAX_YAW_RAD
        );
        lookState.targetPitch = THREE.MathUtils.clamp(
          lookState.targetPitch + lookState.pitchVel * frameScale,
          -MAX_PITCH_RAD,
          MAX_PITCH_RAD
        );
        const friction = Math.pow(0.91, frameScale);
        lookState.yawVel *= friction;
        lookState.pitchVel *= friction;
      }

      const lerpAlpha = 1 - Math.pow(0.72, frameScale);
      lookState.yaw += (lookState.targetYaw - lookState.yaw) * lerpAlpha;
      lookState.pitch += (lookState.targetPitch - lookState.pitch) * lerpAlpha;

      renderDesertMovieFrame(now * 0.001);

      const seat = selectedSeatRef.current;
      const currentMode = modeRef.current;

      if (seat) {
        if (lookState.lastSeatKey !== seat.key) {
          lookState.lastSeatKey = seat.key;
          lookState.yaw = 0;
          lookState.pitch = 0;
          lookState.targetYaw = 0;
          lookState.targetPitch = 0;
          lookState.yawVel = 0;
          lookState.pitchVel = 0;
          updateSeatNumberBadge(seat.seatNum);
          updateStaticSeatInstances(seat.rowIdx, seat.seatNum);
          selCushion.geometry = seat.isRecliner ? recCushionGeo : stdCushionGeo;
          selBolster.geometry = seat.isRecliner ? recBolsterGeo : stdBolsterGeo;
          selBackrest.geometry = seat.isRecliner ? reclinerBackGeo : standardBackGeo;
        }

        if (currentMode === "TRANSITION_TO_3D") {
          const elapsed = now - bmTransitionStart();
          const t = THREE.MathUtils.clamp(elapsed / 1550, 0, 1);
          applyWasmCameraPose(seat, t);

          const hudEl = povHudLayerRef.current;
          if (hudEl) {
            if (t > 0.56) hudEl.classList.add("active");
            if (t > 0.78) hudEl.classList.add("sheet-visible");
          }

          if (t >= 1) {
            modeRef.current = "POV_3D";
            container.classList.add("interactive");
            onTransitionComplete?.("POV_3D");
          }
        } else if (currentMode === "POV_3D") {
          applyWasmCameraPose(seat, 1);
        } else if (currentMode === "TRANSITION_TO_2D") {
          const elapsed = now - bmTransitionStart();
          const u = THREE.MathUtils.clamp(elapsed / 1200, 0, 1);
          const t = 1 - u;
          applyWasmCameraPose(seat, t);

          if (u >= 1) {
            const mapEl = map2DLayerRef.current;
            if (mapEl) {
              mapEl.style.opacity = "1";
              mapEl.style.transform = "none";
              mapEl.classList.remove("hidden");
            }
            container.classList.remove("visible", "interactive");
            modeRef.current = "MAP_2D";
            onTransitionComplete?.("MAP_2D");
          }
        }
      } else {
        selectedGroup.visible = false;
      }

      renderer.render(scene, camera);
    }

    function bmTransitionStart() {
      return btnMetricsRef.current.transitionStartTime || performance.now();
    }

    animFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("pointerdown", handlePointerDown);
      container.removeEventListener("pointermove", handlePointerMove);
      container.removeEventListener("pointerup", handlePointerUp);
      container.removeEventListener("pointercancel", onLookEnd);
      container.removeEventListener("touchmove", handleTouchMove);
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div id="webgl-container" ref={containerRef} />;
}
