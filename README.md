# vitest related + isolate:false + setupFiles vi.mock repro

Setup-file `vi.mock` is applied for the first test file but not the second one when
the tests are selected through `vitest related`. A direct run of the same two files
passes.

## Steps

```bash
pnpm install
pnpm test          # direct run: 4 passed
pnpm test:related  # related run: 1 failed | 3 passed (Vitest 5.0.5)
```

`vitest related lib/index.ts` should select both `src/a.spec.ts` and
`src/b.spec.ts`, because both import `lib/index.ts`.

To rule out the module cache, clear `node_modules/.vitest-cache` and
`node_modules/.vite` before each run.

## Versions

- `vitest`: `5.0.5` (fails), `4.1.12` (passes)
- `isolate: false`, `pool: "threads"`, `maxWorkers: 1`
- `setupFiles: ["./setup.ts"]`

## Workaround

`isolate: true` (or `vitest run` instead of `vitest related`) makes both files pass.
