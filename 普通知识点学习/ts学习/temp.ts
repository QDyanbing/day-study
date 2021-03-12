// interface Dog1 {
//   run(): void;
// }

// interface Dog2 {
//   eat(): void;
// }

// const Dog: Dog1 & Dog2 = {
//   run() {},
//   eat() {},
// };

// let a: string | number = 1;

// interface Square {
//   kind: "square";
//   size: number;
// }

// interface Rectangle {
//   kind: "rectangle";
//   width: number;
//   height: number;
// }

// interface Circle {
//   kind: "circle";
//   r: number;
// }

// type Shape = Square | Rectangle | Circle;

// function getSize(s: Shape) {
//   switch (s.kind) {
//     case "square":
//       return s.size * s.size;
//     case "rectangle":
//       return s.width * s.height;
//     default:
//       return ((e:never)=>{throw new Error(e)})(s);
//   }
// }

// const obj = { a: 1, b: 2 };
// function getValue<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
//   return keys.map((item) => obj[item]);
// }

// console.log(getValue(obj, ["a", "b"])); //[1,2]
// console.log(getValue(obj, ["c", "d"])); //[undefined,undefined]

// interface Obj {
//   a: number;
//   b: number;
// }

// const key: keyof Obj = "a";

// interface Obj {
//   x: string;
//   y: string;
// }
// type ReadonlyObj = Readonly<Obj>;

// type parObj = Partial<Obj>

// type TypeName<T> = T extends string
//   ? "string"
//   : T extends number
//   ? "number"
//   : "undefined";

// // a.ts
// namespace Shape {
//   export function say() {}
// }

// // b.ts
// namespace Shape {
//   export function eat() {}
// }

// interface A {
//   x: string;
// }
// interface A {
//   y: string;
// }

// const a: A = {
//   x: "123",
//   y: "23",
// };



