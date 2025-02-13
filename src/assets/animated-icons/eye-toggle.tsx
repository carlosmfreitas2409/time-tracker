import { motion, type Variants } from 'motion/react';

import { createAnimatedIcon } from './create-animated-icon';

const pathVariants: Variants = {
  normal: { pathLength: 1, opacity: 1, pathOffset: 0 },
  animate: {
    pathLength: [0, 2],
    opacity: [0, 1],
    pathOffset: [0, 2],
    transition: { duration: 0.6 },
  },
  off: {
    pathLength: 1,
    pathOffset: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
  on: {
    pathLength: 0,
    opacity: 0,
    transition: { duration: 0.5 },
  },
};

export const EyeToggle = createAnimatedIcon('EyeToggle', (controls) => {
  return (
    <>
      <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
      <circle cx="12" cy="12" r="3" />
      <motion.path d="m2 2 20 20" variants={pathVariants} animate={controls} />
    </>
  );
});
