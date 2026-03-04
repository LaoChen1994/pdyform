import type { FormSchema } from 'pdyform/core';

export const defaultSchema: FormSchema = {
  title: 'Developer Debug Form',
  description: 'Use this schema to quickly validate core logic and renderer behavior.',
  submitButtonText: 'Submit Form',
  fields: [
    {
      id: 'name',
      name: 'name',
      label: 'Name',
      type: 'text',
      placeholder: 'Enter your name',
      validations: [{ type: 'required', message: 'Name is required' }],
    },
    {
      id: 'email',
      name: 'email',
      label: 'Email',
      type: 'email',
      placeholder: 'name@example.com',
      validations: [
        { type: 'required', message: 'Email is required' },
        { type: 'email', message: 'Invalid email format' },
      ],
    },
    {
      id: 'age',
      name: 'age',
      label: 'Age',
      type: 'number',
      placeholder: '18',
      validations: [{ type: 'min', value: 18, message: 'Age must be at least 18' }],
    },
    {
      id: 'role',
      name: 'role',
      label: 'Role',
      type: 'select',
      options: [
        { label: 'Developer', value: 'developer' },
        { label: 'Designer', value: 'designer' },
        { label: 'Product Manager', value: 'pm' },
      ],
      validations: [{ type: 'required', message: 'Please choose a role' }],
    },
    {
      id: 'skills',
      name: 'skills',
      label: 'Skills',
      type: 'checkbox',
      options: [
        { label: 'TypeScript', value: 'ts' },
        { label: 'React', value: 'react' },
        { label: 'Vue', value: 'vue' },
      ],
      validations: [{ type: 'required', message: 'Pick at least one skill' }],
    },
    {
      id: 'bio',
      name: 'bio',
      label: 'Bio',
      type: 'textarea',
      placeholder: 'Write something about yourself',
      validations: [{ type: 'max', value: 120, message: 'Bio should be within 120 characters' }],
    },
  ],
};
