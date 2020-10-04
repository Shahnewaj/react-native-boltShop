import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SearchScreen from '../src/screens/SearchScreen';
import DetailsScreen from '../src/screens/DetailsScreen';

const AppNavigator = createStackNavigator({
  Search: SearchScreen,
  Details: DetailsScreen,

  // Details:{
  //     screen: DetailsScreen,
  // },
});

export default createAppContainer(AppNavigator);
