import React, { useState } from 'react';
import {
  FormSchema,
  FormRuntimeState,
  createFormRuntimeState,
  applyFieldChange,
  applyFieldBlur,
  runSubmitValidation,
  setSubmitting,
} from 'pdyform/core';
import { FormFieldRenderer } from './FormFieldRenderer';

interface DynamicFormProps {
  schema: FormSchema;
  onSubmit: (values: Record<string, any>) => void;
  className?: string;
}

export const DynamicForm: React.FC<DynamicFormProps> = ({ schema, onSubmit, className }) => {
  const [formState, setFormState] = useState<FormRuntimeState>(() => createFormRuntimeState(schema.fields));

  const handleFieldChange = (name: string, value: any) => {
    setFormState((prev) => applyFieldChange(schema.fields, prev, name, value));
  };

  const handleFieldBlur = (name: string) => {
    setFormState((prev) => applyFieldBlur(schema.fields, prev, name));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const submittingState = setSubmitting(formState, true);
    const { state: validatedState, hasError } = runSubmitValidation(schema.fields, submittingState);
    setFormState(validatedState);
    if (!hasError) {
      onSubmit(validatedState.values);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-6 ${className || ''}`}>
      {schema.title && <h2 className="text-2xl font-bold tracking-tight">{schema.title}</h2>}
      {schema.description && <p className="text-muted-foreground">{schema.description}</p>}
      
      <div className="space-y-4">
        {schema.fields.map((field) => (
          !field.hidden && (
            <FormFieldRenderer
              key={field.name}
              field={field}
              value={formState.values[field.name]}
              onChange={(val) => handleFieldChange(field.name, val)}
              onBlur={() => handleFieldBlur(field.name)}
              error={formState.errors[field.name]}
            />
          )
        ))}
      </div>

      <button
        type="submit"
        disabled={formState.isSubmitting}
        className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
      >
        {formState.isSubmitting ? 'Submitting...' : (schema.submitButtonText || 'Submit')}
      </button>
    </form>
  );
};
