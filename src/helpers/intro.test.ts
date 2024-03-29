import { percentFunc } from "./const";

describe("percentFunc Function", () => {
  test(" should return number in percentage ", () => {
    expect(percentFunc(750, 850)).toBe(12.5);
    expect(percentFunc(750, 850)).toEqual(12.5);
  });
  test("should return value correctly comparing to other values ", () => {
    expect(percentFunc(2332, 5423)).toBeGreaterThan(1);
    expect(percentFunc(2332, 5423)).toBeGreaterThanOrEqual(1);
    expect(percentFunc(2332, 5423)).toBeLessThan(154);
    expect(percentFunc(2332, 5423)).toBeLessThanOrEqual(154);
  });
});
describe("should return false value null", () => {});
