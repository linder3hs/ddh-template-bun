import { test, expect } from "bun:test";
import { sum } from "../src/app";

test("sum", () => {
  expect(sum(1, 2)).toBe(3);
});
