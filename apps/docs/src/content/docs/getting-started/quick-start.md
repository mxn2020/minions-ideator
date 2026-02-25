---
title: Quick Start
description: Get up and running with Minions Ideator in minutes
---

## TypeScript

```typescript
import { createClient } from '@minions-ideator/sdk';

const client = createClient();
console.log('Version:', client.version);
```

## Python

```python
from minions_ideator import create_client

client = create_client()
print(f"Version: {client['version']}")
```

## CLI

```bash
ideator info
```
