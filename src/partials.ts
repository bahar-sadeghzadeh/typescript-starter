interface Todo {
  title: string;
  description: string;
}

const updateTodo = (todo: Todo, fieldsToUpdate: Partial<Todo>) => {
  // # const updateTodo = (todo: Todo, fieldsToUpdate: Required<Todo>) => {
  return { ...todo, fieldsToUpdate };
};

const initialToDo: Todo = {
  title: "title",
  description: "description",
};

const updatedTodo = updateTodo(initialToDo, { title: "new title" });
