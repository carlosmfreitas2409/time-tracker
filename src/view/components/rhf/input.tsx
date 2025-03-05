import { Controller, useFormContext } from 'react-hook-form';

import { Input, type InputProps } from '@heroui/input';

interface RHFInputProps extends InputProps {
  name: string;
}

export function RHFInput({ name, ...props }: RHFInputProps) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <Input
          validationBehavior="aria"
          errorMessage={fieldState.error?.message}
          isInvalid={fieldState.invalid}
          {...props}
          {...field}
        />
      )}
    />
  );
}
