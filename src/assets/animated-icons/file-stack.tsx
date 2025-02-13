import { motion } from 'motion/react';

import { createAnimatedIcon } from './create-animated-icon';

export const FileStack = createAnimatedIcon('FileStack', (controls) => {
  return (
    <>
      <motion.path
        d="M21 7h-3a2 2 0 0 1-2-2V2"
        variants={{
          normal: { translateX: 0, translateY: 0 },
          animate: { translateX: -4, translateY: 4 },
        }}
        animate={controls}
      />
      <motion.path
        d="M21 6v6.5c0 .8-.7 1.5-1.5 1.5h-7c-.8 0-1.5-.7-1.5-1.5v-9c0-.8.7-1.5 1.5-1.5H17Z"
        variants={{
          normal: { translateX: 0, translateY: 0 },
          animate: { translateX: -4, translateY: 4 },
        }}
        animate={controls}
      />
      <path d="M7 8v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H15" />
      <motion.path
        d="M3 12v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H11"
        variants={{
          normal: { translateX: 0, translateY: 0 },
          animate: { translateX: 4, translateY: -4 },
        }}
        animate={controls}
      />
    </>
  );
});
