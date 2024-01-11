import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { store, PersistStore } from './src/redux/store';
import { Provider } from 'react-redux';

import { HomeScreen } from './src/screens/HomeScreen';
import { PersistGate } from 'redux-persist/integration/react';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={PersistStore}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
