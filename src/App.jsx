import React, { useState, useRef, useCallback } from "react";
import { ROWS, BLOCKS, TAKEN_SEATS, getSeatMetadata } from "./data/seatsData.js";
import Auditorium3D from "./components/Auditorium3D.jsx";

export default function App() {
  const [selectedSeat, setSelectedSeat] = useState(null);
  const [activeShowtime, setActiveShowtime] = useState("19:45");
  const [touchRingKey, setTouchRingKey] = useState(null);
  const [toastMsg, setToastMsg] = useState(null);

  const phoneFrameRef = useRef(null);
  const map2DLayerRef = useRef(null);
  const povHudLayerRef = useRef(null);
  const seatBtnRefs = useRef(new Map());

  const modeRef = useRef("MAP_2D");
  const selectedSeatRef = useRef(null);
  const autoTimerRef = useRef(null);
  const toastTimerRef = useRef(null);

  const btnMetricsRef = useRef({
    btnCenterX: 195,
    btnCenterY: 420,
    btnWidth: 17,
    btnNdcX: 0,
    btnNdcY: 0,
    transitionStartTime: 0
  });

  const triggerTransitionTo2D = useCallback(() => {
    if (modeRef.current !== "POV_3D" && modeRef.current !== "TRANSITION_TO_3D") return;
    btnMetricsRef.current.transitionStartTime = 0; // Stamped on first render frame
    modeRef.current = "TRANSITION_TO_2D";

    const hudEl = povHudLayerRef.current;
    if (hudEl) {
      hudEl.classList.remove("sheet-visible", "active");
    }
    const webglEl = document.getElementById("webgl-container");
    if (webglEl) {
      webglEl.classList.remove("interactive");
    }

    // Re-push history state so future back gestures remain predictable
    if (window.history.state?.view === "pov_3d") {
      window.history.back();
    }
  }, []);

  const triggerTransitionTo3D = useCallback((meta) => {
    const seat = meta || selectedSeatRef.current;
    if (!seat) return;

    const frame = phoneFrameRef.current;
    const mapEl = map2DLayerRef.current;
    if (frame && mapEl) {
      mapEl.style.transform = "none";
      const frameRect = frame.getBoundingClientRect();
      const btn = seatBtnRefs.current.get(seat.key);
      if (btn) {
        const btnRect = btn.getBoundingClientRect();
        const cx = btnRect.left + btnRect.width * 0.5 - frameRect.left;
        const cy = btnRect.top + btnRect.height * 0.5 - frameRect.top;
        btnMetricsRef.current = {
          btnCenterX: cx,
          btnCenterY: cy,
          btnWidth: btnRect.width,
          btnNdcX: (cx / frameRect.width) * 2 - 1,
          btnNdcY: -((cy / frameRect.height) * 2 - 1),
          transitionStartTime: 0 // Stamped on first render frame
        };
      }
    }

    const webglEl = document.getElementById("webgl-container");
    if (webglEl) webglEl.classList.add("visible");
    modeRef.current = "TRANSITION_TO_3D";

    // Push history entry for hardware / swipe back gesture support on Android & iOS
    window.history.pushState({ view: "pov_3d", seat: seat.key }, "");
  }, []);

  const handleSeatTap2D = useCallback(
    (rowIdx, seatNum) => {
      if (modeRef.current !== "MAP_2D") return;
      clearTimeout(autoTimerRef.current);

      const meta = getSeatMetadata(rowIdx, seatNum);
      selectedSeatRef.current = meta;
      setSelectedSeat(meta);
      setTouchRingKey(meta.key);

      // Trigger transition immediately on next tick so there is 0ms artificial lag
      autoTimerRef.current = setTimeout(() => {
        triggerTransitionTo3D(meta);
      }, 50);
    },
    [triggerTransitionTo3D]
  );

  // Hardware Back Button & Browser/OS Gesture Navigation Listener
  React.useEffect(() => {
    const handlePopState = (e) => {
      if (modeRef.current === "POV_3D" || modeRef.current === "TRANSITION_TO_3D") {
        btnMetricsRef.current.transitionStartTime = 0;
        modeRef.current = "TRANSITION_TO_2D";
        const hudEl = povHudLayerRef.current;
        if (hudEl) {
          hudEl.classList.remove("sheet-visible", "active");
        }
        const webglEl = document.getElementById("webgl-container");
        if (webglEl) {
          webglEl.classList.remove("interactive");
        }
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const handleMinimapSeatTap = useCallback((e, rowIdx, seatNum) => {
    e.stopPropagation();
    const meta = getSeatMetadata(rowIdx, seatNum);
    selectedSeatRef.current = meta;
    setSelectedSeat(meta);
  }, []);

  const handleBookSeat = useCallback(() => {
    if (!selectedSeat) return;
    setToastMsg(`Booked Row ${selectedSeat.rowLetter}, Seat ${selectedSeat.seatNum} (${selectedSeat.price})`);
    clearTimeout(toastTimerRef.current);
    toastTimerRef.current = setTimeout(() => setToastMsg(null), 2600);
  }, [selectedSeat]);

  return (
    <div className="stage-wrapper">
      <div className="phone-frame" id="phone-frame" ref={phoneFrameRef}>
        {/* Status bar shown only on Desktop mockup frame, hidden on mobile via CSS */}
        <div className="status-bar">
          <span>9:41</span>
          <div className="status-icons">
            <svg width="17" height="11" viewBox="0 0 17 11" fill="none">
              <rect x="0.5" y="7" width="2.8" height="3.5" rx="0.8" fill="white" />
              <rect x="4.8" y="5" width="2.8" height="5.5" rx="0.8" fill="white" />
              <rect x="9.1" y="2.5" width="2.8" height="8" rx="0.8" fill="white" />
              <rect x="13.4" y="0.5" width="2.8" height="10" rx="0.8" fill="white" />
            </svg>
            <svg width="16" height="11" viewBox="0 0 16 11" fill="none">
              <path
                d="M8 10.5C8.82843 10.5 9.5 9.82843 9.5 9C9.5 8.17157 8.82843 7.5 8 7.5C7.17157 7.5 6.5 8.17157 6.5 9C6.5 9.82843 7.17157 10.5 8 10.5Z"
                fill="white"
              />
              <path
                d="M4.8 6.7C6.6 5.1 9.4 5.1 11.2 6.7"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M2.2 4.1C5.5 1.2 10.5 1.2 13.8 4.1"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <svg width="25" height="12" viewBox="0 0 25 12" fill="none">
              <rect
                x="0.75"
                y="1"
                width="21"
                height="10"
                rx="3"
                stroke="white"
                strokeOpacity="0.4"
                strokeWidth="1.2"
              />
              <rect x="2.5" y="2.75" width="17.5" height="6.5" rx="1.5" fill="white" />
              <path
                d="M23 4.2V7.8C23.8 7.4 24.2 6.7 24.2 6C24.2 5.3 23.8 4.6 23 4.2Z"
                fill="white"
                fillOpacity="0.45"
              />
            </svg>
          </div>
        </div>

        {/* 3D WebGL + WASM Auditorium Layer */}
        <Auditorium3D
          modeRef={modeRef}
          selectedSeatRef={selectedSeatRef}
          btnMetricsRef={btnMetricsRef}
          map2DLayerRef={map2DLayerRef}
          povHudLayerRef={povHudLayerRef}
        />

        {/* 2D Seat Map Layer */}
        <div className="map-2d-layer" ref={map2DLayerRef}>
          <div className="nav-header">
            <button className="icon-circle-btn" aria-label="Back">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 18L9 12L15 6"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className="header-title-group">
              <div className="header-title">Dune: Part Two</div>
              <div className="header-subtitle">Hall 3 · Fri 14 Nov</div>
            </div>
            <button className="icon-circle-btn" aria-label="Hall Info">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.8" />
                <path d="M12 11.2V15.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <circle cx="12" cy="8.2" r="1" fill="currentColor" />
              </svg>
            </button>
          </div>

          <div className="showtime-wrap">
            <div className="showtime-segmented">
              {[
                { time: "17:30", tag: "2D" },
                { time: "19:45", tag: "IMAX" },
                { time: "22:15", tag: "2D" }
              ].map((st) => (
                <button
                  key={st.time}
                  className={`showtime-pill ${activeShowtime === st.time ? "active" : ""}`}
                  onClick={() => setActiveShowtime(st.time)}
                >
                  <span>{st.time}</span>
                  <span className="format-tag">{st.tag}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="screen-arc-container">
            <svg className="screen-arc-svg" viewBox="0 0 360 76" fill="none">
              <defs>
                <radialGradient id="screenGlowGrad" cx="50%" cy="0%" r="72%" fx="50%" fy="0%">
                  <stop offset="0%" stopColor="rgba(255, 250, 240, 0.24)" />
                  <stop offset="45%" stopColor="rgba(255, 250, 240, 0.06)" />
                  <stop offset="100%" stopColor="rgba(255, 250, 240, 0)" />
                </radialGradient>
                <linearGradient id="screenLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(255, 255, 255, 0.02)" />
                  <stop offset="18%" stopColor="rgba(255, 250, 240, 0.65)" />
                  <stop offset="50%" stopColor="rgba(255, 255, 255, 0.95)" />
                  <stop offset="82%" stopColor="rgba(255, 250, 240, 0.65)" />
                  <stop offset="100%" stopColor="rgba(255, 255, 255, 0.02)" />
                </linearGradient>
              </defs>
              <path d="M 8 28 Q 180 -10 352 28 L 360 76 L 0 76 Z" fill="url(#screenGlowGrad)" />
              <path
                d="M 8 28 Q 180 -10 352 28"
                stroke="url(#screenLineGrad)"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            </svg>
            <div className="screen-label">SCREEN</div>
          </div>

          <div className="seat-map-viewport">
            <div className="seat-rows-container">
              {ROWS.map((rowLetter, rowIdx) => {
                const isRecliner = rowIdx >= 7;
                return (
                  <div className="seat-row" key={rowLetter}>
                    <div className="row-letter">{rowLetter}</div>
                    <div className="row-blocks">
                      {BLOCKS.map((blockSeats, bIdx) => (
                        <div className="seat-block" key={bIdx}>
                          {blockSeats.map((seatNum) => {
                            const key = `${rowLetter}${seatNum}`;
                            const isTaken = TAKEN_SEATS.has(key);
                            const isSelected = selectedSeat?.key === key;
                            const hasRing = touchRingKey === key;
                            return (
                              <button
                                key={key}
                                ref={(el) => {
                                  if (el) seatBtnRefs.current.set(key, el);
                                }}
                                data-key={key}
                                className={[
                                  "seat-dot",
                                  isRecliner ? "recliner" : "",
                                  isTaken ? "taken" : "",
                                  isSelected ? "selected" : "",
                                  hasRing ? "touch-ring" : ""
                                ]
                                  .filter(Boolean)
                                  .join(" ")}
                                disabled={isTaken}
                                aria-label={`Row ${rowLetter} Seat ${seatNum}`}
                                onClick={() => handleSeatTap2D(rowIdx, seatNum)}
                              >
                                {seatNum}
                              </button>
                            );
                          })}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="seat-legend">
              <div className="legend-item">
                <span className="legend-swatch available" />
                <span>Available</span>
              </div>
              <div className="legend-item">
                <span className="legend-swatch taken" />
                <span>Taken</span>
              </div>
              <div className="legend-item">
                <span className="legend-swatch recliner" />
                <span>Recliner</span>
              </div>
              <div className="legend-item">
                <span className="legend-swatch selected" />
                <span>Selected</span>
              </div>
            </div>
          </div>

          <div className="bottom-bar-2d">
            <div className="selection-summary">
              <div className="summary-label">
                {selectedSeat
                  ? `Row ${selectedSeat.rowLetter} · Seat ${selectedSeat.seatNum}`
                  : "Choose your seat"}
              </div>
              <div className="summary-price">{selectedSeat ? selectedSeat.price : "—"}</div>
            </div>
            <button
              className={`continue-btn ${selectedSeat ? "enabled" : ""}`}
              onClick={() => {
                if (!selectedSeat) return;
                clearTimeout(autoTimerRef.current);
                triggerTransitionTo3D(selectedSeat);
              }}
            >
              Continue
            </button>
          </div>
        </div>

        {/* 3D First-Person POV HUD & Bottom Sheet */}
        <div className="pov-hud-layer" ref={povHudLayerRef}>
          <div className="pov-top-bar">
            <button
              className="pov-back-btn"
              aria-label="Back to seat map"
              onClick={triggerTransitionTo2D}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 18L9 12L15 6"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className="pov-pill-badge">
              <span className="pov-pill-dot" />
              <span>View from {selectedSeat ? selectedSeat.key : "B4"}</span>
            </div>
          </div>

          <div className="pov-bottom-sheet">
            <div className="sheet-handle" />
            <div className="sheet-header-row">
              <div>
                <div className="sheet-zone-tag">{selectedSeat?.zone || "UP CLOSE"}</div>
                <div className="sheet-seat-title">
                  {selectedSeat
                    ? `Row ${selectedSeat.rowLetter}, Seat ${selectedSeat.seatNum}`
                    : "Row B, Seat 4"}
                </div>
                <div className="sheet-seat-meta">
                  {selectedSeat
                    ? `${selectedSeat.tier} · ${selectedSeat.price}`
                    : "Standard · €12.50"}
                </div>
              </div>

              <div
                className="sheet-minimap"
                title="Tap a seat dot or return to 2D map"
                onClick={triggerTransitionTo2D}
              >
                <svg className="minimap-screen-arc" viewBox="0 0 68 6" fill="none">
                  <path
                    d="M 2 5 Q 34 0 66 5"
                    stroke="rgba(255,255,255,0.75)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="minimap-grid">
                  {ROWS.map((rowLetter, rowIdx) => {
                    const isRecliner = rowIdx >= 7;
                    return (
                      <div className="minimap-row" key={rowLetter}>
                        {BLOCKS.map((blockSeats, bIdx) => (
                          <div className="minimap-block" key={bIdx}>
                            {blockSeats.map((seatNum) => {
                              const key = `${rowLetter}${seatNum}`;
                              const isTaken = TAKEN_SEATS.has(key);
                              const isActive = selectedSeat?.key === key;
                              return (
                                <div
                                  key={key}
                                  data-key={key}
                                  className={[
                                    "minimap-dot",
                                    isRecliner ? "recliner" : "",
                                    isActive ? "active" : ""
                                  ]
                                    .filter(Boolean)
                                    .join(" ")}
                                  onClick={(e) => {
                                    if (!isTaken) handleMinimapSeatTap(e, rowIdx, seatNum);
                                  }}
                                />
                              );
                            })}
                          </div>
                        ))}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="sheet-metrics-grid">
              <div className="metric-card">
                <div className="metric-value">{selectedSeat?.distance || "6.3 m"}</div>
                <div className="metric-label">to screen</div>
              </div>
              <div className="metric-card">
                <div className="metric-value">{selectedSeat?.fov || "86°"}</div>
                <div className="metric-label">field of view</div>
              </div>
              <div className="metric-card">
                <div className="metric-value">{selectedSeat?.offset || "2.2 m"}</div>
                <div className="metric-label">{selectedSeat?.offsetDir || "left of centre"}</div>
              </div>
            </div>

            <div className="sheet-actions">
              <button className="btn-change-seat" onClick={triggerTransitionTo2D}>
                Change seat
              </button>
              <button className="btn-book-seat" onClick={handleBookSeat}>
                Book · {selectedSeat?.price || "€12.50"}
              </button>
            </div>
          </div>
        </div>

        {/* Booking Confirmation Toast */}
        <div className={`booking-toast ${toastMsg ? "show" : ""}`}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" fill="#7ce395" />
            <path
              d="M8 12.5L10.8 15.2L16.2 9.5"
              stroke="#08150c"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>{toastMsg}</span>
        </div>

        <div className="home-indicator" />
      </div>
    </div>
  );
}
