let sales: number = 123_456_789;
let course: string = "TypeScript";
let is_published: boolean = true;
let level;
let number: number[] = [1, 2, 3];
// number.forEach(n=>n.)

let user: [number, string] = [1, "Jen"];
// user.push(1);

const enum Size {
  Small = 1,
  Medium,
  Large,
}

let mySize: Size = Size.Medium;

console.log(mySize);

function calculateTax(income: number, taxYear: number = 2022): number {
  if (taxYear < 2022) {
    return income * 1.2;
  }
  return income * 1.3;
}

calculateTax(10_000, 2022);
