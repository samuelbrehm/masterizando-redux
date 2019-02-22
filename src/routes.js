import { createAppContainer, createStackNavigator } from 'react-navigation';

import Main from '~/pages/main';
import Favorites from '~/pages/favorites';

const Routes = createAppContainer(
  createStackNavigator({
    Main,
    Favorites,
  }),
);

export default Routes;
