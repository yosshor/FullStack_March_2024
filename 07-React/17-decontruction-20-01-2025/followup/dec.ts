interface Arrs {
  a: number;
  b: number;
  c: number;
  d: number;
  fn: () => void;
}

const newArrs: Arrs = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  fn: () => {
    console.log("user clicked");
  },
};

// const { a, b, c }: Arrs = newArrs;
// console.log(a, b);

const r = { ...newArrs, a: 5, b: 6, g: 6 };
console.log(r);
