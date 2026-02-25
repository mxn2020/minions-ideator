# minions-ideator

**Agent to help brainstorm ideas and plan features**

Built on the [Minions SDK](https://github.com/mxn2020/minions).

---

## Quick Start

```bash
# TypeScript / Node.js
npm install @minions-ideator/sdk minions-sdk

# Python
pip install minions-ideator

# CLI (global)
npm install -g @minions-ideator/cli
```

---

## CLI

```bash
# Show help
ideator --help
```

---

## Python SDK

```python
from minions_ideator import create_client

client = create_client()
```

---

## Project Structure

```
minions-ideator/
  packages/
    core/           # TypeScript core library (@minions-ideator/sdk on npm)
    python/         # Python SDK (minions-ideator on PyPI)
    cli/            # CLI tool (@minions-ideator/cli on npm)
  apps/
    web/            # Playground web app
    docs/           # Astro Starlight documentation site
    blog/           # Blog
  examples/
    typescript/     # TypeScript usage examples
    python/         # Python usage examples
```

---

## Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm run build

# Run tests
pnpm run test

# Type check
pnpm run lint
```

---

## Documentation

- Docs: [ideator.minions.help](https://ideator.minions.help)
- Blog: [ideator.minions.blog](https://ideator.minions.blog)
- App: [ideator.minions.wtf](https://ideator.minions.wtf)

---

## License

[MIT](LICENSE)
