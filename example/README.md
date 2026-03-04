# examples

用于本地调试 schema 与渲染行为的示例工程。

## 目录

```text
example/
├── shared/
│   └── defaultSchema.ts    # React/Vue 共享默认 schema
├── react-demo/             # Vite + React 示例
└── vue-demo/               # Vite + Vue 示例
```

## 启动

在仓库根目录执行：

```bash
pnpm install

# React + Vue 一起启动
pnpm run dev:example

# React demo
pnpm run dev:example:react

# Vue demo
pnpm run dev:example:vue
```

## 使用方式

- 左侧：可直接编辑 JSON schema（实时解析）
- 右侧：渲染动态表单并提交，观察 payload
- 修改 schema 后可立即验证字段渲染和校验逻辑是否正常
