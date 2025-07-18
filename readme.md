## Installation

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd components-cli-tool
```

### 2. Install dependencies

```bash
npm install
```

### 3. Build the project

```bash
npx tsc
```

### 4. Link the CLI tool globally (for local development)

```bash
npm link
```

---

## Usage

After linking, you can run the command from any project on your system:

```bash
create-component MyComponent anotherComponent
```

This will create a `components/` folder (if it doesn't exist) and generate folders and files for each component name you provide.

- `components/myComponent/MyComponent.tsx`
- `components/myComponent/MyComponent.types.ts`
- `components/myComponent/AnotherComponent.tsx`
- `components/myComponent/AnotherComponent.types.ts`

---

## Troubleshooting

- **Command not found:** Make sure you ran `npm link` or installed globally.
- **Compilation errors:** Check your `tsconfig.json` and ensure all dependencies are installed.
- **Wrong output location:** Update the `bin` field in `package.json` to match the compiled file location.

---

## 📄 License

MIT
