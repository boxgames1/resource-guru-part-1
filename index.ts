type FlatArray<Arr> = Arr extends ReadonlyArray<infer InnerArr>
  ? FlatArray<InnerArr>
  : Arr;

const flatArray = <T>(array: Array<T>): FlatArray<Array<T>>[] => {
  if (!Array.isArray(array)) throw new Error("Input is not an array");

  const result = array.reduce(
    (acc, item) => [
      ...acc,
      ...(Array.isArray(item) ? flatArray(item) : [item]),
    ],
    [] as Array<T>
  );

  return result;
};

export default flatArray;
