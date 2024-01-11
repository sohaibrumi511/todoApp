export type TodoType = {
  id: number;
  text: string;
  completed: boolean;
};

export type EditProps = {
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  todoItem: TodoType;
};

export type TodoProps = {
  todoItem: TodoType;
};

export type EditScreenParamList = {
  EditScreen: {
    todoItem: TodoType;
  };
};
