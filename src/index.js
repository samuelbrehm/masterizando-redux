import React from 'react';
import { Provider } from 'react-redux';

import { View } from 'react-native';

import store from './store';

// import styles from './styles';

const App = () => (
  <Provider store={store}>
    <View style={{ backgroundColor: '#FFF', flex: 1 }} />
  </Provider>
);

export default App;
