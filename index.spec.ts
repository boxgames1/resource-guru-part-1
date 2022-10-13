import flatArray from ".";

describe("Array flat", () => {
  describe("incorrect arguments", () => {
    it("should throw an error if the input is not an array", () => {
      expect(() => flatArray("not an array" as any)).toThrowError(
        "Input is not an array"
      );
    });
  });
  describe("base case", () => {
    it("should return the same array if it is already flat", () => {
      expect(flatArray([1, 2, 3])).toEqual([1, 2, 3]);
    });
  });
  describe("mixed types", () => {
    it("should return a flat array given an input with 1 level of depth", () => {
      expect(flatArray([1, [2, 3], [4], 5, [6, 7, 8]])).toEqual([
        1, 2, 3, 4, 5, 6, 7, 8,
      ]);
    });
  });
  describe("nested arrays", () => {
    it("should return a flat array given an input of mixed types with 1 level of depth", () => {
      expect(
        flatArray([
          Symbol.iterator,
          [2, "3"],
          [undefined],
          { a: 5 },
          [6, { b: 7 }, null],
        ])
      ).toEqual([
        Symbol.iterator,
        2,
        "3",
        undefined,
        { a: 5 },
        6,
        { b: 7 },
        null,
      ]);
    });
    it("should return a flat array given an input with 2 levels of depth", () => {
      expect(flatArray([1, [2, [3, 4]], [5, 6], 7])).toEqual([
        1, 2, 3, 4, 5, 6, 7,
      ]);
    });
    it("should return a flat array given an input with 3 levels of depth", () => {
      expect(flatArray([1, [2, [3, [4, 5]]], [6, 7], 8])).toEqual([
        1, 2, 3, 4, 5, 6, 7, 8,
      ]);
    });
    it("should return a flat array given an input with 4 levels of depth", () => {
      expect(flatArray([1, [2, [3, [4, [5, 6]]]], [7, 8], 9])).toEqual([
        1, 2, 3, 4, 5, 6, 7, 8, 9,
      ]);
    });
    it("should return a flat array given an input with 10 levels of depth", () => {
      expect(
        flatArray([
          1,
          [2, [3, [4, [5, [6, [7, [8, [9, [10, 11]]]]]]]]],
          [12, 13],
          14,
        ])
      ).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]);
    });
  });
});
