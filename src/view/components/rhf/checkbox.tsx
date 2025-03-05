import { Controller, useFormContext } from 'react-hook-form';

import { Checkbox, type CheckboxProps } from '@heroui/checkbox';

interface RHFCheckboxProps extends CheckboxProps {
  name: string;
}

export function RHFCheckbox({ name, ...props }: RHFCheckboxProps) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <Checkbox
          validationBehavior="aria"
          isInvalid={fieldState.invalid}
          {...props}
          {...field}
        />
      )}
    />
  );
}
