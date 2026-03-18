// Helper to create dual-arm preset from per-arm values
function dual(leftValues, rightValues) {
  const result = {};
  for (const [k, v] of Object.entries(leftValues)) {
    result[`left_${k}`] = v;
  }
  for (const [k, v] of Object.entries(rightValues || leftValues)) {
    result[`right_${k}`] = v;
  }
  return result;
}

const HOME = {
  shoulder_pan: 0, shoulder_lift: 0, elbow_flex: 0,
  elbow_roll: 0, wrist_flex: 0, wrist_roll: 0, gripper: 0,
};

const READY = {
  shoulder_pan: 0, shoulder_lift: -0.5, elbow_flex: -1.0,
  elbow_roll: 0, wrist_flex: -0.5, wrist_roll: 0, gripper: 0,
};

const PICK = {
  shoulder_pan: 0, shoulder_lift: -1.2, elbow_flex: -1.5,
  elbow_roll: 0, wrist_flex: -0.8, wrist_roll: 0, gripper: 1.0,
};

export const PRESETS = [
  {
    name: 'Home',
    values: dual(HOME),
  },
  {
    name: 'Ready',
    values: dual(READY),
  },
  {
    name: 'Mirror',
    values: dual(
      { shoulder_pan: 0.8, shoulder_lift: -0.6, elbow_flex: -1.0, elbow_roll: 0, wrist_flex: -0.4, wrist_roll: 0, gripper: 0 },
      { shoulder_pan: -0.8, shoulder_lift: -0.6, elbow_flex: -1.0, elbow_roll: 0, wrist_flex: -0.4, wrist_roll: 0, gripper: 0 },
    ),
  },
  {
    name: 'Pick',
    values: dual(PICK),
  },
  {
    name: 'Wave',
    values: dual(
      { shoulder_pan: 0, shoulder_lift: -1.4, elbow_flex: -1.5, elbow_roll: 1.5, wrist_flex: 0.5, wrist_roll: 1.0, gripper: 0 },
      { shoulder_pan: 0, shoulder_lift: -0.5, elbow_flex: -1.0, elbow_roll: 0, wrist_flex: -0.5, wrist_roll: 0, gripper: 0 },
    ),
  },
];
