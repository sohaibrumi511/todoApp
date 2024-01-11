import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, Platform, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';

import { addTodo } from '../../redux/TodoSlice';
import { colors } from '../../common/colors';
import { styles } from './styles';
import { TodoList } from '../../components/TodoList';
import { Rating } from 'react-native-ratings';

export const HomeScreen = () => {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (todo) {
      dispatch(addTodo(todo));
      setTodo('');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>Today's Todos</Text>
        <Rating
          type="custom"
          imageSize={20}
          tintColor={colors.BACKGROUND}
          ratingColor={colors.ON_PRIMARY}
          ratingBackgroundColor={colors.PRIMARY}
          minValue={1}
          fractions={1}
          jumpValue={0.5}
          onFinishRating={(rating: number) => console.log(rating)}
        />
        <TodoList />
      </View>
      <View></View>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.input}>
        <TextInput
          style={styles.textInput}
          placeholder={'Add a todo'}
          placeholderTextColor={colors.ON_PRIMARY}
          value={todo}
          onChangeText={text => setTodo(text)}
          onSubmitEditing={handleAddTodo}
        />
        <TouchableOpacity onPress={handleAddTodo}>
          <Text style={styles.addText}>+</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
