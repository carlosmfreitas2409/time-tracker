import {
  createElement,
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
  type ForwardRefExoticComponent,
  type RefAttributes,
} from 'react';

import { useAnimation, type AnimationControls } from 'motion/react';

import { cn } from '@heroui/theme';

import type { LucideProps } from 'lucide-react';

export type AnimatedIcon = ForwardRefExoticComponent<
  Omit<LucideProps, 'ref'> & RefAttributes<AnimatedIconElement>
>;

export type AnimatedIconElement = {
  startAnimation: () => void;
  stopAnimation: () => void;
  changeAnimation: (definition: string) => void;
};

const defaultAttributes = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export function createAnimatedIcon(
  iconName: string,
  iconNode: (controls: AnimationControls) => React.ReactNode,
) {
  const Component = forwardRef<AnimatedIconElement, LucideProps>(
    (
      {
        color = 'currentColor',
        size = 24,
        strokeWidth = 2,
        absoluteStrokeWidth,
        className = '',
        onMouseEnter,
        onMouseLeave,
        children,
        ...props
      },
      ref,
    ) => {
      const isControlledRef = useRef(false);

      const controls = useAnimation();

      useImperativeHandle(ref, () => {
        isControlledRef.current = true;

        return {
          startAnimation: () => controls.start('animate'),
          stopAnimation: () => controls.start('normal'),
          changeAnimation: (definition) => controls.start(definition),
        };
      });

      const handleMouseEnter = useCallback(
        (e: React.MouseEvent<SVGSVGElement>) => {
          if (!isControlledRef.current) {
            controls.start('animate');
          } else {
            onMouseEnter?.(e);
          }
        },
        [controls, onMouseEnter],
      );

      const handleMouseLeave = useCallback(
        (e: React.MouseEvent<SVGSVGElement>) => {
          if (!isControlledRef.current) {
            controls.start('normal');
          } else {
            onMouseLeave?.(e);
          }
        },
        [controls, onMouseLeave],
      );

      return createElement(
        'svg',
        {
          ...defaultAttributes,
          width: size,
          height: size,
          stroke: color,
          strokeWidth: absoluteStrokeWidth
            ? (Number(strokeWidth) * 24) / Number(size)
            : strokeWidth,
          className: cn(
            'lucide inline-block',
            `lucide-${iconName.toLowerCase()}`,
            className,
          ),
          onMouseEnter: handleMouseEnter,
          onMouseLeave: handleMouseLeave,
          ...props,
        },
        iconNode(controls),
        Array.isArray(children) ? children : [children],
      );
    },
  );

  Component.displayName = `${iconName}`;

  return Component;
}
