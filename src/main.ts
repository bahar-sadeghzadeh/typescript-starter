// interface Animal {
//   name: string;
// }

// interface Human {
//   firstname: string;
//   lastname: string;
// }

// export const getDisplayName = (
//   item: Animal | Human
// ): { displayName: string } => {
//   if ("name" in item) {
//     return { displayName: item.name };
//   }
// };

////Generic Types
function getFirstElement<ElementType>(array: ElementType[]): ElementType {
  return array[0];
}

const numbers = [1, 2, 3];
const firstNum = getFirstElement(numbers);

const strings = ["a", "b", "c"];
const firstString = getFirstElement(strings);

////////
type ApiResponse<
  Data = { status: number } ///Default value
> = {
  data: Data;
  isError: boolean;
};

type UserResponse = ApiResponse<{
  name: string;
  age: number;
}>;
type BlogResponse = ApiResponse<{ title: string }>;

// const respose: ApiResponse<{ name: string; age: number }> = {
const response: UserResponse = {
  data: {
    name: "bahar",
    age: 22,
  },
  isError: false,
};

const responseBlog: BlogResponse = {
  data: {
    title: "title",
  },
  isError: false,
};

////////
type SampleResponse<Data extends object> = {
  data: Data;
  isError: boolean;
};

//////
type SampleResponse1<Data extends object = { status: number }> = {
  data: Data;
  isError: boolean;
};

///
