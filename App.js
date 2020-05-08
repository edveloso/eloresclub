import Login from './src/login/login';
import HomePage from './src/HomePage';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


const Routes = createStackNavigator({
  "Elo Residencial Club": {
    screen: Login,
  },
  Home: {
    screen: HomePage,
  },
});

export default createAppContainer(Routes);