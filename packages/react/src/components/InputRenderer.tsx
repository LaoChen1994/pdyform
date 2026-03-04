import React from 'react';
import type { FieldRenderContext } from './types';
import { Input } from './Input';

const InputRenderer: React.FC<FieldRenderContext> = ({ field, value, onChange, onBlur, fieldId }) => {
  const handleChange = (nextValue: string) => {
    if (field.type !== 'number') {
      onChange(nextValue);
      return;
    }

    onChange(nextValue === '' ? '' : Number(nextValue));
  };

  return (
    <Input
      id={fieldId}
      type={field.type}
      placeholder={field.placeholder}
      value={value ?? ''}
      onChange={(e) => handleChange(e.target.value)}
      onBlur={onBlur}
      disabled={field.disabled}
      name={field.name}
    />
  );
};

export default InputRenderer;
