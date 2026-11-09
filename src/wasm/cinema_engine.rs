// WebAssembly 3D Cinema Math & Instanced Matrix Kernel (Rust -> wasm32-unknown-unknown)
// Zero-allocation linear memory buffers shared directly with Three.js InstancedMesh & Camera

const NUM_STD_SEATS: usize = 7 * 14; // Rows A..G (98 seats)
const NUM_REC_SEATS: usize = 2 * 14; // Rows H..I (28 seats)

const ROW_SPACING_Z: f32 = 1.24;
const ROW_START_Z: f32 = -4.9;
const SCREEN_Z: f32 = -10.2;
const SCREEN_Y: f32 = 3.45;

const ROW_ELEVATIONS_Y: [f32; 9] = [
    0.00, // Row A
    0.16, // Row B
    0.36, // Row C
    0.60, // Row D
    0.88, // Row E
    1.20, // Row F
    1.54, // Row G
    1.92, // Row H (VIP Recliner)
    2.32, // Row I (VIP Recliner)
];

static mut STD_BACKREST_MATRICES: [f32; NUM_STD_SEATS * 16] = [0.0; NUM_STD_SEATS * 16];
static mut REC_BACKREST_MATRICES: [f32; NUM_REC_SEATS * 16] = [0.0; NUM_REC_SEATS * 16];
// [posX, posY, posZ, lookX, lookY, lookZ, upX, upY, upZ, fovDeg, syncScale, syncTiltDeg, syncOpacity, backScaleY]
static mut CAMERA_OUT: [f32; 14] = [0.0; 14];

#[inline(always)]
fn clamp(v: f32, min_v: f32, max_v: f32) -> f32 {
    if v < min_v {
        min_v
    } else if v > max_v {
        max_v
    } else {
        v
    }
}

#[inline(always)]
fn lerp(a: f32, b: f32, t: f32) -> f32 {
    a + (b - a) * t
}

#[inline(always)]
fn ease_in_out_cubic(t: f32) -> f32 {
    if t < 0.5 {
        4.0 * t * t * t
    } else {
        let u = -2.0 * t + 2.0;
        1.0 - (u * u * u) * 0.5
    }
}

#[inline(always)]
pub fn seat_world_pos(row_idx: usize, seat_num: usize) -> (f32, f32, f32) {
    let center_col = 7.5_f32;
    let mut x = (seat_num as f32 - center_col) * 0.72;
    if seat_num <= 3 {
        x -= 0.58;
    }
    if seat_num >= 12 {
        x += 0.58;
    }
    let vip_extra_z = if row_idx >= 7 { 0.22 } else { 0.0 };
    let z = ROW_START_Z + (row_idx as f32) * ROW_SPACING_Z + vip_extra_z;
    let y = ROW_ELEVATIONS_Y[row_idx];
    (x, y, z)
}

#[no_mangle]
pub extern "C" fn get_std_backrest_ptr() -> *const f32 {
    unsafe { STD_BACKREST_MATRICES.as_ptr() }
}

#[no_mangle]
pub extern "C" fn get_rec_backrest_ptr() -> *const f32 {
    unsafe { REC_BACKREST_MATRICES.as_ptr() }
}

#[no_mangle]
pub extern "C" fn get_camera_out_ptr() -> *const f32 {
    unsafe { CAMERA_OUT.as_ptr() }
}

// Writes column-major 4x4 transformation matrix with X-rotation (rot_x), Y-scale (scale_y), and translation (tx, ty, tz)
#[inline(always)]
fn write_seat_matrix(buf: &mut [f32], offset: usize, tx: f32, ty: f32, tz: f32, rot_x: f32, scale_y: f32, visible: bool) {
    if !visible {
        for i in 0..16 {
            buf[offset + i] = 0.0;
        }
        return;
    }
    let c = rot_x.cos();
    let s = rot_x.sin();

    // Column 0
    buf[offset + 0] = 1.0;
    buf[offset + 1] = 0.0;
    buf[offset + 2] = 0.0;
    buf[offset + 3] = 0.0;

    // Column 1 (scaled by scale_y)
    buf[offset + 4] = 0.0;
    buf[offset + 5] = c * scale_y;
    buf[offset + 6] = s * scale_y;
    buf[offset + 7] = 0.0;

    // Column 2
    buf[offset + 8] = 0.0;
    buf[offset + 9] = -s;
    buf[offset + 10] = c;
    buf[offset + 11] = 0.0;

    // Column 3 (translation)
    buf[offset + 12] = tx;
    buf[offset + 13] = ty;
    buf[offset + 14] = tz;
    buf[offset + 15] = 1.0;
}

#[no_mangle]
pub extern "C" fn update_backrest_matrices(raw_t: f32, selected_row: i32, selected_seat: i32) {
    let morph_u = ease_in_out_cubic(clamp((raw_t - 0.42) / 0.36, 0.0, 1.0));
    let back_scale_y = lerp(0.18, 1.0, morph_u);

    unsafe {
        let mut std_idx = 0usize;
        let mut rec_idx = 0usize;

        for row_idx in 0..9usize {
            let is_recliner = row_idx >= 7;
            let back_h = if is_recliner { 0.72_f32 } else { 0.68_f32 };
            let rot_x = if is_recliner { 0.12_f32 } else { 0.08_f32 };
            let hide_row = raw_t > 0.86 && (row_idx as i32) >= selected_row;

            for seat_num in 1..=14usize {
                let (wx, wy, wz) = seat_world_pos(row_idx, seat_num);
                // Selected seat uses a dedicated highlighted mesh, so hide its instance in the red InstancedMesh
                let is_selected = (row_idx as i32) == selected_row && (seat_num as i32) == selected_seat;
                let visible = !hide_row && !is_selected;

                let ty = wy + 0.24 + back_h * 0.5 * back_scale_y;
                let tz = wz + 0.22;

                if is_recliner {
                    write_seat_matrix(
                        &mut REC_BACKREST_MATRICES,
                        rec_idx * 16,
                        wx,
                        ty,
                        tz,
                        rot_x,
                        back_scale_y,
                        visible,
                    );
                    rec_idx += 1;
                } else {
                    write_seat_matrix(
                        &mut STD_BACKREST_MATRICES,
                        std_idx * 16,
                        wx,
                        ty,
                        tz,
                        rot_x,
                        back_scale_y,
                        visible,
                    );
                    std_idx += 1;
                }
            }
        }
    }
}

#[inline(always)]
fn compute_ray_pinned_pose(
    target_x: f32,
    target_y: f32,
    target_z: f32,
    ndc_x: f32,
    ndc_y: f32,
    h: f32,
    theta_rad: f32,
    fov_deg: f32,
    aspect: f32,
) -> (f32, f32, f32, f32, f32, f32, f32, f32, f32) {
    let tan_half_fov = (fov_deg * 0.5 * core::f32::consts::PI / 180.0).tan();
    let tx = ndc_x * tan_half_fov * aspect;
    let ty = ndc_y * tan_half_fov;

    let cos_t = theta_rad.cos();
    let sin_t = theta_rad.sin();

    let denom = (cos_t + ty * sin_t).max(0.15);
    let dz = (-ty * h) / denom;
    let z_depth = h + dz * sin_t;
    let dx = tx * z_depth;

    let look_x = target_x - dx;
    let look_z = target_z - dz;

    let pos_x = look_x;
    let pos_y = target_y + h * cos_t;
    let pos_z = look_z + h * sin_t;

    let up_len = (sin_t * sin_t + cos_t * cos_t).sqrt().max(1e-6);
    (
        pos_x,
        pos_y,
        pos_z,
        look_x,
        target_y,
        look_z - 0.0001,
        0.0,
        sin_t / up_len,
        -cos_t / up_len,
    )
}

#[inline(always)]
fn apply_spherical_head_look(
    eye_x: f32,
    eye_y: f32,
    eye_z: f32,
    base_tx: f32,
    base_ty: f32,
    base_tz: f32,
    yaw_rad: f32,
    pitch_rad: f32,
    weight: f32,
) -> (f32, f32, f32) {
    if weight <= 0.0001 || (yaw_rad.abs() < 0.0001 && pitch_rad.abs() < 0.0001) {
        return (base_tx, base_ty, base_tz);
    }
    let mut dx = base_tx - eye_x;
    let mut dy = base_ty - eye_y;
    let mut dz = base_tz - eye_z;
    let dist = (dx * dx + dy * dy + dz * dz).sqrt();
    if dist < 0.001 {
        return (base_tx, base_ty, base_tz);
    }
    dx /= dist;
    dy /= dist;
    dz /= dist;

    // 1. Rotate around world Y axis (0, 1, 0) by yaw_rad * weight
    let y_angle = yaw_rad * weight;
    let cy = y_angle.cos();
    let sy = y_angle.sin();
    let dx1 = dx * cy + dz * sy;
    let dy1 = dy;
    let dz1 = -dx * sy + dz * cy;

    // 2. Right axis = normalize(cross(dir, worldUp(0,1,0))) = normalize((-dz1, 0, dx1))
    let r_len = (dz1 * dz1 + dx1 * dx1).sqrt().max(1e-6);
    let rx = -dz1 / r_len;
    let rz = dx1 / r_len;

    // Rodrigues rotation of (dx1, dy1, dz1) around (rx, 0, rz) by pitch_rad * weight
    let p_angle = pitch_rad * weight;
    let cp = p_angle.cos();
    let sp = p_angle.sin();
    let dot = rx * dx1 + rz * dz1;

    // cross(r, d) = (-rz * dy1, rz * dx1 - rx * dz1, rx * dy1)
    let cx = -rz * dy1;
    let cy_cross = rz * dx1 - rx * dz1;
    let cz = rx * dy1;

    let dx2 = dx1 * cp + cx * sp + rx * dot * (1.0 - cp);
    let dy2 = dy1 * cp + cy_cross * sp;
    let dz2 = dz1 * cp + cz * sp + rz * dot * (1.0 - cp);

    (eye_x + dx2 * dist, eye_y + dy2 * dist, eye_z + dz2 * dist)
}

#[no_mangle]
pub extern "C" fn compute_camera_frame(
    row_idx: usize,
    seat_num: usize,
    raw_t: f32,
    btn_ndc_x: f32,
    btn_ndc_y: f32,
    btn_width: f32,
    frame_w: f32,
    frame_h: f32,
    yaw_rad: f32,
    pitch_rad: f32,
) {
    let aspect = (frame_w / frame_h.max(1.0)).max(0.2);
    let (seat_x, seat_y, seat_z) = seat_world_pos(row_idx, seat_num);
    let badge_y = seat_y + 0.36;
    let badge_z = seat_z - 0.05;

    let fov_overview = 40.0_f32;
    let fov_tilt_zoom = 44.0_f32;
    let is_back_row = row_idx >= 7;
    let is_front_row = row_idx <= 2;
    let fov_pov = if is_front_row {
        62.0
    } else if is_back_row {
        48.0
    } else {
        54.0
    };

    let btn_ndc_w = (btn_width.max(14.0) / frame_w.max(320.0)) * 2.0;
    let tan_half_fov0 = (fov_overview * 0.5 * core::f32::consts::PI / 180.0).tan();
    let h0 = 0.56 / (btn_ndc_w * tan_half_fov0 * aspect);
    let h1 = 5.0_f32;
    let tilt_angle1 = 28.0_f32 * core::f32::consts::PI / 180.0;

    let eye_height_offset = if is_back_row {
        0.88
    } else if is_front_row {
        0.83
    } else {
        0.85
    };
    let eye_z_offset = if row_idx == 0 {
        0.18
    } else if is_front_row {
        0.24
    } else if is_back_row {
        0.48
    } else {
        0.44
    };
    let eye_x_offset = if seat_num <= 3 {
        -0.14
    } else if seat_num >= 12 {
        0.16
    } else if is_front_row {
        -0.12
    } else {
        0.0
    };

    let eye_x = seat_x + eye_x_offset;
    let eye_y = seat_y + eye_height_offset;
    let eye_z = seat_z + eye_z_offset;

    let row_height_factor = (row_idx as f32) / 8.0;
    let look_target_y = if row_idx == 0 {
        SCREEN_Y - 0.85
    } else {
        lerp(SCREEN_Y - 1.32, SCREEN_Y - 1.75, row_height_factor)
    };
    let pov_look_x = seat_x * if is_back_row { 0.10 } else if is_front_row { 0.22 } else { 0.15 };
    let pov_look_y = look_target_y;
    let pov_look_z = SCREEN_Z;

    let split = 0.52_f32;
    let (pos_x, pos_y, pos_z, look_x, look_y, look_z, up_x, up_y, up_z, fov_deg);

    if raw_t <= split {
        let u = ease_in_out_cubic(clamp(raw_t / split, 0.0, 1.0));
        let h = h0 * (h1 / h0).powf(u);
        let theta = lerp(0.0, tilt_angle1, u);
        fov_deg = lerp(fov_overview, fov_tilt_zoom, u);
        let pose = compute_ray_pinned_pose(
            seat_x, badge_y, badge_z, btn_ndc_x, btn_ndc_y, h, theta, fov_deg, aspect,
        );
        pos_x = pose.0;
        pos_y = pose.1;
        pos_z = pose.2;
        look_x = pose.3;
        look_y = pose.4;
        look_z = pose.5;
        up_x = pose.6;
        up_y = pose.7;
        up_z = pose.8;
    } else {
        let p1 = compute_ray_pinned_pose(
            seat_x,
            badge_y,
            badge_z,
            btn_ndc_x,
            btn_ndc_y,
            h1,
            tilt_angle1,
            fov_tilt_zoom,
            aspect,
        );
        let raw_u = clamp((raw_t - split) / (1.0 - split), 0.0, 1.0);
        let pos_u = ease_in_out_cubic(raw_u);
        let look_u = raw_u.powf(1.9);

        pos_x = lerp(p1.0, eye_x, pos_u);
        pos_y = lerp(p1.1, eye_y, pos_u);
        pos_z = lerp(p1.2, eye_z, pos_u);

        let base_lx = lerp(p1.3, pov_look_x, look_u);
        let base_ly = lerp(p1.4, pov_look_y, look_u);
        let base_lz = lerp(p1.5, pov_look_z, look_u);

        let rotated_look = apply_spherical_head_look(
            pos_x, pos_y, pos_z, base_lx, base_ly, base_lz, yaw_rad, pitch_rad, pos_u,
        );
        look_x = rotated_look.0;
        look_y = rotated_look.1;
        look_z = rotated_look.2;

        let ux = lerp(p1.6, 0.0, pos_u);
        let uy = lerp(p1.7, 1.0, pos_u);
        let uz = lerp(p1.8, 0.0, pos_u);
        let u_len = (ux * ux + uy * uy + uz * uz).sqrt().max(1e-6);
        up_x = ux / u_len;
        up_y = uy / u_len;
        up_z = uz / u_len;

        fov_deg = lerp(fov_tilt_zoom, fov_pov, pos_u);
    }

    // Compute 2D-to-3D sync scale, tilt & opacity
    let fade_end = 0.40_f32;
    let (sync_scale, sync_tilt_deg, sync_opacity) = if raw_t <= 0.0 {
        (1.0, 0.0, 1.0)
    } else if raw_t >= fade_end {
        (1.0, 26.0, 0.0)
    } else {
        let u_fade = clamp(raw_t / fade_end, 0.0, 1.0);
        let u_split = ease_in_out_cubic(clamp(raw_t / split, 0.0, 1.0));
        let h_cur = h0 * (h1 / h0).powf(u_split);
        let scale = (h0 / h_cur).max(1.0);
        let tilt_deg = ease_in_out_cubic(u_fade) * 26.0;
        let opacity = 1.0 - u_fade.powf(1.35);
        (scale, tilt_deg, opacity)
    };

    let morph_u = ease_in_out_cubic(clamp((raw_t - 0.42) / 0.36, 0.0, 1.0));
    let back_scale_y = lerp(0.18, 1.0, morph_u);

    unsafe {
        CAMERA_OUT[0] = pos_x;
        CAMERA_OUT[1] = pos_y;
        CAMERA_OUT[2] = pos_z;
        CAMERA_OUT[3] = look_x;
        CAMERA_OUT[4] = look_y;
        CAMERA_OUT[5] = look_z;
        CAMERA_OUT[6] = up_x;
        CAMERA_OUT[7] = up_y;
        CAMERA_OUT[8] = up_z;
        CAMERA_OUT[9] = fov_deg;
        CAMERA_OUT[10] = sync_scale;
        CAMERA_OUT[11] = sync_tilt_deg;
        CAMERA_OUT[12] = sync_opacity;
        CAMERA_OUT[13] = back_scale_y;
    }
}
