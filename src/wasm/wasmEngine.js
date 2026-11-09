// WebAssembly Loader & Zero-Copy Shared Memory Bridge for cinema_engine.wasm

let wasmInstance = null;
let stdBackrestView = null;
let recBackrestView = null;
let cameraOutView = null;

export async function initCinemaWasm() {
  if (wasmInstance) {
    return {
      exports: wasmInstance.exports,
      stdBackrestView,
      recBackrestView,
      cameraOutView
    };
  }

  const response = await fetch(`${import.meta.env.BASE_URL}cinema_engine.wasm`);
  const bytes = await response.arrayBuffer();
  const { instance } = await WebAssembly.instantiate(bytes, {});
  wasmInstance = instance;

  const exp = instance.exports;
  const buffer = exp.memory.buffer;

  stdBackrestView = new Float32Array(buffer, exp.get_std_backrest_ptr(), 98 * 16);
  recBackrestView = new Float32Array(buffer, exp.get_rec_backrest_ptr(), 28 * 16);
  cameraOutView = new Float32Array(buffer, exp.get_camera_out_ptr(), 14);

  return {
    exports: exp,
    stdBackrestView,
    recBackrestView,
    cameraOutView
  };
}
