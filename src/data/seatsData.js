export const ROWS = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
export const SEATS_PER_ROW = 14;

export const BLOCKS = [
  [1, 2, 3],
  [4, 5, 6, 7, 8, 9, 10, 11],
  [12, 13, 14]
];

export const TAKEN_SEATS = new Set([
  "A1", "A3", "A4",
  "B9",
  "C6", "C7", "C8", "C10",
  "D1", "D2", "D5", "D6", "D8", "D9", "D14",
  "E1", "E2", "E3", "E4", "E5", "E8",
  "F4", "F5", "F9", "F10",
  "G1", "G2", "G3", "G4", "G6", "G9", "G11",
  "H4", "H5", "H6", "H7", "H8", "H10", "H14",
  "I2", "I5", "I7", "I11", "I13"
]);

export const ROW_SPACING_Z = 1.24;
export const ROW_START_Z = -4.9;
export const SCREEN_Z = -10.2;
export const SCREEN_Y = 3.45;
export const SCREEN_WIDTH = 10.4;
export const SCREEN_HEIGHT = 3.85;

// Parabolic Stadium Elevation Profile (meters above stage floor)
export const ROW_ELEVATIONS_Y = [
  0.00, // Row A: Stage floor level
  0.16, // Row B: +0.16m riser
  0.36, // Row C: +0.20m riser
  0.60, // Row D: +0.24m riser (e.g. D3)
  0.88, // Row E: +0.28m riser
  1.20, // Row F: +0.32m riser (e.g. F8 — Sweet Spot)
  1.54, // Row G: +0.34m riser
  1.92, // Row H: +0.38m VIP Recliner stadium riser
  2.32  // Row I: +0.40m Highest Rear VIP Recliner tier (e.g. I12)
];

const EXACT_SEAT_OVERRIDES = {
  B4: {
    zone: "UP CLOSE",
    distance: "6.3 m",
    fov: "86°",
    offset: "2.2 m",
    offsetDir: "left of centre"
  },
  F8: {
    zone: "SWEET SPOT",
    distance: "9.8 m",
    fov: "60°",
    offset: "0.3 m",
    offsetDir: "right of centre"
  },
  I12: {
    zone: "FULL PICTURE",
    distance: "13.3 m",
    fov: "45°",
    offset: "3.3 m",
    offsetDir: "right of centre"
  }
};

export function getSeatWorldCoords(rowIdx, seatNum) {
  const centerCol = 7.5;
  let x = (seatNum - centerCol) * 0.72;
  if (seatNum <= 3) x -= 0.58;
  if (seatNum >= 12) x += 0.58;

  const vipExtraZ = rowIdx >= 7 ? 0.22 : 0;
  const z = ROW_START_Z + rowIdx * ROW_SPACING_Z + vipExtraZ;
  const y = ROW_ELEVATIONS_Y[rowIdx];
  return { x, y, z };
}

export function getSeatMetadata(rowIdx, seatNum) {
  const rowLetter = ROWS[rowIdx];
  const key = `${rowLetter}${seatNum}`;
  const isRecliner = rowIdx >= 7;
  const price = isRecliner ? "€16.00" : "€12.50";
  const tier = isRecliner ? "Recliner" : "Standard";

  if (EXACT_SEAT_OVERRIDES[key]) {
    return {
      key,
      rowIdx,
      rowLetter,
      seatNum,
      isRecliner,
      price,
      tier,
      ...EXACT_SEAT_OVERRIDES[key]
    };
  }

  const distMeters = (5.4 + rowIdx * 0.95).toFixed(1);
  const centerSeat = 7.5;
  const deltaSeat = seatNum - centerSeat;
  let lateralMeters = Math.abs(deltaSeat) * 0.58;
  if (seatNum <= 3) lateralMeters += 0.45;
  if (seatNum >= 12) lateralMeters += 0.45;

  const fovDeg = Math.round(
    2 * Math.atan(8.8 / (2 * parseFloat(distMeters))) * (180 / Math.PI) * 1.18
  );

  let zone = "BALANCED VIEW";
  if (rowIdx <= 2) zone = "UP CLOSE";
  else if (rowIdx >= 7) zone = "FULL PICTURE";
  else if (seatNum >= 5 && seatNum <= 10 && rowIdx >= 3 && rowIdx <= 5) zone = "SWEET SPOT";

  const offsetDir =
    Math.abs(deltaSeat) < 0.25
      ? "centre aligned"
      : deltaSeat < 0
      ? "left of centre"
      : "right of centre";

  return {
    key,
    rowIdx,
    rowLetter,
    seatNum,
    isRecliner,
    price,
    tier,
    zone,
    distance: `${distMeters} m`,
    fov: `${fovDeg}°`,
    offset: `${lateralMeters.toFixed(1)} m`,
    offsetDir
  };
}
