import { motion, type Transition, type Variants } from 'motion/react';

import { createAnimatedIcon } from './create-animated-icon';

const handTransition: Transition = {
  duration: 0.6,
  ease: [0.4, 0, 0.2, 1],
};

const handVariants: Variants = {
  normal: {
    rotate: 0,
    originX: '50%',
    originY: '50%',
  },
  animate: {
    rotate: 360,
  },
};

const minuteHandTransition: Transition = {
  duration: 0.5,
  ease: 'easeInOut',
};

const minuteHandVariants: Variants = {
  normal: {
    rotate: 0,
    originX: '50%',
    originY: '50%',
  },
  animate: {
    rotate: 45,
  },
};

export const Clock = createAnimatedIcon('Clock', (controls) => {
  return (
    <>
      <circle cx="12" cy="12" r="10" />
      <motion.line
        x1="12"
        y1="12"
        x2="12"
        y2="6"
        variants={handVariants}
        animate={controls}
        initial="normal"
        transition={handTransition}
      />
      <motion.line
        x1="12"
        y1="12"
        x2="16"
        y2="12"
        variants={minuteHandVariants}
        animate={controls}
        initial="normal"
        transition={minuteHandTransition}
      />
    </>
  );
});
