import { createSlice } from '@reduxjs/toolkit';
import { TodoType } from '../types/todo.types';

interface TodoState {
  todos: TodoType[];
}

const initialState: TodoState = {
  todos: [],
};

export const TodoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.unshift({
        id: new Date().getTime(),
        text: action.payload,
        completed: false,
      });
    },
    completeTodo: (state, action) => {
      const completedTodo = state.todos.find(item => item.id === action.payload.id);
      if(completedTodo) {
        completedTodo.completed = !completedTodo.completed;
        const index = state.todos.findIndex(item => item.id === action.payload.id);
        state.todos.splice(index, 1);
        if(completedTodo.completed) {
          state.todos.push(completedTodo)
        } else {
          state.todos.unshift(completedTodo);
        }
      }
    },
    finishTodo: (state, action) => {
      state.todos = state.todos.filter(item => item.id !== action.payload);
    },
    editTodo: (state, action) => {
      const editedTodo = state.todos.find(item => item.id === action.payload.id);
      if (editedTodo) {
        editedTodo.text = action.payload.text;
      }
      console.log(editedTodo?.text)
    },
  },
});

export const selectTodos = (state: any) => state.todo.todos;
export const { addTodo, completeTodo, editTodo, finishTodo } = TodoSlice.actions;
export default TodoSlice.reducer;
