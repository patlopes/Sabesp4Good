import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Home from '../screens/home';
import Report from '../screens/report';

const screens = {
    Home: {
        screen: Home,
    },
    Report: {
        screen: Report,
    },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);