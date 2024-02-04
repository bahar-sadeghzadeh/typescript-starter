///Find out the return type of a function
const func = () => {
  const val = "string";

  return val;
};

type Return = ReturnType<typeof func>;

///Find out the return type of an async function
const asyncFunc = async () => {
  const val = "string";

  return val;
};

type AsyncReturn = Awaited<ReturnType<typeof asyncFunc>>;
