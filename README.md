# pdyform

A high-performance, schema-driven dynamic form system with React and Vue support.

## Packages

- `pdyform-core`: Framework-agnostic logic and schema parser.
- `pdyform-react`: React components based on Shadcn UI.
- `pdyform-vue`: Vue components based on Shadcn-vue.

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
import { validateField } from 'pdyform/core';

// React components
import { DynamicForm } from 'pdyform/react';

// Vue components
import { DynamicForm } from 'pdyform/vue';
```
