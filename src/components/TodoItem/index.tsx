import React, { useCallback, useState } from 'react';
import { Alert, Modal, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';

import { TodoProps } from '../../types/todo.types';
import { EditTodo } from '../EditTodo';
import { completeTodo, finishTodo } from '../../redux/TodoSlice';
import { styles } from './styles';

export const TodoItem = ({ todoItem }: TodoProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();

  const handleFinishTodo = useCallback((index: number) => {
    Alert.alert('Confirm Completion', 'Are you sure you want to remove this todo?', [
      {
        text: 'No',
      },
      { text: 'Yes', onPress: () => dispatch(finishTodo(index)) },
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TouchableOpacity
      onPress={() => dispatch(completeTodo({ id: todoItem.id }))}
      onLongPress={() => handleFinishTodo(todoItem.id)}>
      <View style={styles.item}>
        <View style={[styles.itemSide, styles.itemSideLeft]}>
          <Text
            style={[styles.itemText, { textDecorationLine: todoItem?.completed === true ? 'line-through' : 'none' }]}>
            {todoItem?.text}
          </Text>
        </View>
        <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
          <Text style={[styles.itemSide, styles.itemSideRight]}>...</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={isVisible}
          onRequestClose={() => {
            setIsVisible(!isVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <EditTodo todoItem={todoItem} setIsVisible={setIsVisible} />
            </View>
          </View>
        </Modal>
      </View>
    </TouchableOpacity>
  );
};
