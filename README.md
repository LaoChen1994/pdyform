# pd-dynamic-form

A high-performance, schema-driven dynamic form system with React and Vue support.

## Packages

- `pd-dynamic-form-core`: Framework-agnostic logic and schema parser.
- `pd-dynamic-form-react`: React components based on Shadcn UI.
- `pd-dynamic-form-vue`: Vue components based on Shadcn-vue.

## Development

```bash
# Build all packages
pnpm run build:all

# Run all tests
pnpm run test:all
```

## Usage

This package provides a unified entry point. You can import framework-specific components directly from the main package:

```typescript
// Core logic
import { validateField } from 'pd-dynamic-form/core';

// React components
import { DynamicForm } from 'pd-dynamic-form/react';

// Vue components
import { DynamicForm } from 'pd-dynamic-form/vue';
```
