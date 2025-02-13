import { motion, type Variants } from 'motion/react';

import { createAnimatedIcon } from './create-animated-icon';

const lineOneVariants: Variants = {
  normal: {
    pathLength: 1,
    opacity: 1,
  },
  animate: {
    pathLength: [1, 0, 1],
    opacity: [1, 0, 1],
    transition: {
      delay: 0.0,
      duration: 0.6,
      times: [0, 0.4, 1],
    },
  },
};

const lineTwoVariants: Variants = {
  normal: {
    pathLength: 1,
    opacity: 1,
  },
  animate: {
    pathLength: [1, 0, 1],
    opacity: [1, 0, 1],
    transition: {
      delay: 0.1,
      duration: 0.7,
      times: [0, 0.4, 1],
    },
  },
};

const lineThreeVariants: Variants = {
  normal: {
    pathLength: 1,
    opacity: 1,
  },
  animate: {
    pathLength: [1, 0, 1],
    opacity: [1, 0, 1],
    transition: {
      delay: 0.2,
      duration: 0.8,
      times: [0, 0.4, 1],
    },
  },
};

export const ChartColumnDecreasing = createAnimatedIcon(
  'ChartColumnDecreasing',
  (controls) => {
    return (
      <>
        <motion.path
          variants={lineOneVariants}
          initial="normal"
          animate={controls}
          d="M8 17V5"
        />
        <motion.path
          variants={lineTwoVariants}
          initial="normal"
          animate={controls}
          d="M13 17V9"
        />
        <motion.path
          variants={lineThreeVariants}
          initial="normal"
          animate={controls}
          d="M18 17v-3"
        />
        <path d="M3 3v16a2 2 0 0 0 2 2h16" />
      </>
    );
  },
);
