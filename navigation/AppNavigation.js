import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import CheckoutScreen from '../src/screen/CheckoutScreen';
import HomeScreen from '../src/screen/HomeScreen';
import LoginScreen from '../src/screen/LoginScreen';
import OtpScreen from '../src/screen/OtpScreen';
import ProductDetails from '../src/screen/ProductDetails';
import WelcomeScreen from '../src/screen/WelcomeScreen';

const AuthStack = createStackNavigator({
  Welcome: WelcomeScreen,
  Login: LoginScreen,
  Otp: OtpScreen,
});

const ShopNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Checkout: CheckoutScreen,
    Details: ProductDetails,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      header: () => null,
    },
  },
);

const AppNavigator = createSwitchNavigator({
  Auth: AuthStack,
  Shop: ShopNavigator,
});

export default createAppContainer(AppNavigator);
