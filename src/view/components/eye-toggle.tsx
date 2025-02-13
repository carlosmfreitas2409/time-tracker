import { useEffect, useRef, useState } from 'react';

import { Button, type ButtonProps } from '@heroui/button';

import {
  EyeToggle as EyeToggleIcon,
  type AnimatedIconElement,
} from '@/assets/animated-icons';

interface EyeToggleProps extends ButtonProps {
  pressed: boolean;
  onPressedChange: (isVisible: boolean) => void;
}

export function EyeToggle({
  pressed: pressedProp,
  onPressedChange,
  ...props
}: EyeToggleProps) {
  const iconRef = useRef<AnimatedIconElement>(null);

  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    setPressed(pressedProp);
  }, [pressedProp]);

  return (
    <Button
      size="sm"
      variant="light"
      isIconOnly
      onPress={(e) => {
        const newPressed = !pressed;

        setPressed(newPressed);
        onPressedChange(newPressed);

        props.onPress?.(e);

        if (newPressed) {
          iconRef.current?.changeAnimation('on');
        } else {
          iconRef.current?.changeAnimation('off');
        }
      }}
      {...props}
    >
      <EyeToggleIcon ref={iconRef} className="size-4" />
    </Button>
  );
}
