// @vitest-environment jsdom
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { DynamicForm } from '../src/DynamicForm';
import React from 'react';

describe('React DynamicForm', () => {
  const schema: any = {
    fields: [
      { name: 'username', label: 'Username', type: 'text', validations: [{ type: 'required', message: 'Required' }] }
    ]
  };

  it('renders correctly', () => {
    render(<DynamicForm schema={schema} onSubmit={() => {}} />);
    expect(screen.getByLabelText('Username')).toBeTruthy();
  });

  it('shows validation error on blur', async () => {
    render(<DynamicForm schema={schema} onSubmit={() => {}} />);
    const input = screen.getByLabelText('Username');
    fireEvent.blur(input);
    expect(await screen.findByText('Required')).toBeTruthy();
  });
});
