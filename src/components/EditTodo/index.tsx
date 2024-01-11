import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { KeyboardAvoidingView, Text, TextInput, TouchableOpacity } from 'react-native';

import { EditProps } from '../../types/todo.types';
import { editTodo } from '../../redux/TodoSlice';
import { colors } from '../../common/colors';
import { styles } from './styles';

export const EditTodo = ({ todoItem, setIsVisible }: EditProps) => {
  const [todo, setTodo] = useState(todoItem.text);
  const dispatch = useDispatch();

  const addTodo = () => {
    if (todo) {
      dispatch(editTodo({ id: todoItem.id, text: todo }));
      setIsVisible(false);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.input} behavior="padding">
      <TextInput
        style={styles.textInput}
        placeholder={'Edit a todo'}
        placeholderTextColor={colors.ON_PRIMARY}
        value={todo}
        onChangeText={text => setTodo(text)}
        onSubmitEditing={addTodo}
      />
      <TouchableOpacity onPress={addTodo}>
        <Text style={styles.addText}>+</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};
