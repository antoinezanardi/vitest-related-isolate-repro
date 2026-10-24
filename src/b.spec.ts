import { marker } from "../lib/index";
import { useMarker } from "./service";

describe("b", () => {
  it("uses the mocked marker directly", () => {
    expect(marker()).toBe("mocked");
  });

  it("uses the mocked marker through service", () => {
    expect(useMarker()).toBe("mocked");
  });
});
