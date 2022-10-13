type FlatArray<Arr> = Arr extends ReadonlyArray<infer InnerArr>
  ? FlatArray<InnerArr>
  : Arr;

const flatArray = <T>(array: Array<T>): FlatArray<Array<T>>[] => {
};

export default flatArray;
