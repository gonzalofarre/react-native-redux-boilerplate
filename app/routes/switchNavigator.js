import React from 'react'
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { Transition } from 'react-native-reanimated';
import Login from '../components/Login/LoginView'
import {createAppContainer} from 'react-navigation'

const SwitchNavigator = createAnimatedSwitchNavigator(
  {
    Login: Login,
  },
  {initialRouteName: 'Login',
    // The previous screen will slide to the bottom while the next screen will fade in
    transition: (
      <Transition.Together>
        <Transition.Out
          type="slide-bottom"
          durationMs={400}
          interpolation="easeIn"
        />
        <Transition.In type="fade" durationMs={500} />
      </Transition.Together>
    ),
  }
);

const Routes = createAppContainer(SwitchNavigator);

export default Routes;