import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    isolate: false,
    pool: "threads",
    maxWorkers: 1,
    setupFiles: ["./setup.ts"],
  },
});
