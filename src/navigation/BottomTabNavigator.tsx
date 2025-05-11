import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabParamList} from './types';
import VectorIcon from '../utils/VectorIcon';
import {IconsType} from '../utils/constants';
import HomeScreen from '../screens/Home/HomeScreen';
import ProfileScreen from '../screens/Home/ProfileScreen';
import {Colors} from '../assets/colors';
import SettingScreen from '../screens/Home/SettingScreen';
import WishlistScreen from '../screens/Home/WishlistScreen';

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName: string;

          switch (route.name) {
            case 'Home':
              iconName = 'home-outline'; // Ionicons
              break;
            case 'Profile':
              iconName = 'person-outline'; // Ionicons
              break;
            case 'Settings':
              iconName = 'settings-outline'; // Ionicons
              break;
            case 'Wishlist':
              iconName = 'heart-outline'; // Ionicons
              break;
            default:
              iconName = 'ellipse-outline';
          }

          return (
            <VectorIcon
              type={IconsType.Ionicons}
              name={iconName}
              color={color}
              size={size}
            />
          );
        },
        tabBarActiveTintColor: Colors.colorRed,
        tabBarInactiveTintColor: Colors.black,
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Wishlist"
        component={WishlistScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Settings"
        component={SettingScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
