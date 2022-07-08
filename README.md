# DOMAIN DRIVE HEXAGON - bun

- [bun]("https://github.com/linder3hs/bun"): Incredibly fast JavaScript runtime, bundler, transpiler and package manager – all in one.

## Template for projects with bun

This a new template for projects with bun.

## [Bun test]("https://github.com/Jarred-Sumner/bun/tree/main/test")

Bun implements a test framework for JavaScript.

`bun wiptest`

with this we are replace jest

- Example

`test/app.test.ts`

```ts
import { test, expect } from "bun:test";
import { sum } from "../src/app";

test("sum", () => {
  expect(sum(1, 2)).toBe(3);
});
```

`package.json`

```json
{
  "scripts": {
    "test": "bun wiptest"
  },
}
```

`terminal`

```bash
bun run test
```
