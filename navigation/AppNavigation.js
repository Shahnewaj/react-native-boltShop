import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import CheckoutScreen from '../src/screen/CheckoutScreen';
import HomeScreen from '../src/screen/HomeScreen';
import LoginScreen from '../src/screen/LoginScreen';
import OtpScreen from '../src/screen/OtpScreen';
import WelcomeScreen from '../src/screen/WelcomeScreen';

const AuthStack = createStackNavigator({
  Welcome: WelcomeScreen,
  Login: LoginScreen,
  Otp: OtpScreen,
});

const ShopNavigator = createStackNavigator({
  Home: HomeScreen,
  checkout: CheckoutScreen,
});

const AppNavigator = createSwitchNavigator({
  Auth: AuthStack,
  Shop: ShopNavigator,
});

export default createAppContainer(AppNavigator);
