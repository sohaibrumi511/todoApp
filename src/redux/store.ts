import { configureStore } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer, PERSIST } from 'redux-persist';

import TodoSlice from './TodoSlice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedTodoSlice = persistReducer(persistConfig, TodoSlice);

export const store = configureStore({
  reducer: {
    todo: persistedTodoSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST],
      },
    }),
});

export const PersistStore = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
