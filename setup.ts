import { vi } from "vitest";

vi.mock("./lib/index.ts", async importActual => ({
  ...await importActual(),
  marker: vi.fn(() => "mocked"),
}));
