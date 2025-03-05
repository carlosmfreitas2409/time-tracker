import type { FormHTMLAttributes } from 'react';

import {
  FormProvider,
  type FieldValues,
  type UseFormReturn,
} from 'react-hook-form';

interface RHFFormProps<T extends FieldValues>
  extends FormHTMLAttributes<HTMLFormElement> {
  methods: UseFormReturn<T>;
}

export function RHFForm<T extends FieldValues>({
  methods,
  ...props
}: RHFFormProps<T>) {
  return (
    <FormProvider {...methods}>
      <form {...props} />
    </FormProvider>
  );
}
