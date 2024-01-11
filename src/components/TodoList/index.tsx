import React from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import { selectTodos } from '../../redux/TodoSlice';
import { TodoItem } from '../TodoItem';

export const TodoList = () => {
  const todos = useSelector(selectTodos);

  return <FlatList data={todos} keyExtractor={item => item.id} renderItem={({ item }) => <TodoItem todoItem={item} />} />;
};
