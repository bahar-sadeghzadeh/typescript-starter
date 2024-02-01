type props = {
  name: string;
} & (MaleProps | FemaleProps);

type MaleProps = {
  gender: "male";
  salary: number;
};

type FemaleProps = {
  gender: "female";
  weight: number;
};

///usage

const maleEmployee: props = {
  name: "bahar",
  gender: "female",
  weight: 20,
};

const femaleEmployee: props = {
  name: "hh",
  gender: "male",
  salary: 1000,
};

//////////////////////

type ApiResponseMessageType<T> =
  | { status: "success"; data: T; timestamp: Date }
  | { status: "error"; message: string; timestamp: Date };

let response1: ApiResponseMessageType<number> = {
  status: "success",
  data: 10,
  timestamp: new Date(),
};
let response2: ApiResponseMessageType<number> = {
  status: "error",
  message: "something went wrong",
  timestamp: new Date(),
};
