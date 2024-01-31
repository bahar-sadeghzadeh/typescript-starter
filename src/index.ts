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

///Type Alias
type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employee: Employee = {
  id: 1,
  name: "Bahar",
  retire: (date: Date) => {
    console.log(date);
  },
};

///Union Types
function kgToLbs(weight: number | string): number {
  if (typeof weight === "number") {
    return weight * 2.2;
  } else {
    return parseInt(weight) * 2.2;
  }
}

///Remove a member of a Union type
type Letters = "a" | "b" | "c";
type RemoveC<TType> = TType extends "c" ? never : TType;
type WowWithoutC = RemoveC<Letters>;

///Remove a member from an inteface: Omit
interface LettersC {
  a: "a";
  b: "b";
  c: "c";
}

type OmitC = Omit<LettersC, "c">;

///Intersection Types
type Draggable = {
  drag: () => void;
};
type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

///We can use Intersection for inhertance in types
type EventType = {
  name: string;
  dateCreated: string;
  type: string;
};

type UserEvent = EventType & { UserId: string };

///Literal Types
type Quantity = 50 | 100;
let quantity: Quantity = 100;

type Metric = "cm" | "inch";
let metric: Metric = "cm";

///Nullable Types
function greet(name: string | null | undefined) {
  if (name) {
    console.log(name.toUpperCase());
  } else {
    console.log("Hola!");
  }
}
greet(null);
greet(undefined);

///Optional Properties
type Customer = {
  birthday?: Date;
};
function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(1);
// Optional property access operator
console.log(customer?.birthday?.getFullYear());

// Optional element access operator
let customers = [customer];
console.log(customers[0]?.birthday?.getFullYear());

// Optional call
let log: any = null;
log?.("a");
