import React from 'react';
import { Provider } from 'react-redux';

import { View } from 'react-native';

import store from './store';
import TodoList from './TodoList';

// import styles from './styles';

const App = () => (
  <Provider store={store}>
    <View style={{ backgroundColor: '#FFF', flex: 1 }}>
      <TodoList />
    </View>
  </Provider>
);

export default App;
