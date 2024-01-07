import { StyleSheet} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Settings from './Settings';
import Groups from './Groups';
import Events from './Events';
import Home from './Home';
import Icon from 'react-native-vector-icons/Ionicons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Profile from './Profile';
import BarangayHome from '../OrganizationUser/OrganizationHome';
import OrganizationHome from '../OrganizationUser/OrganizationHome';
import OrganizationGroups from '../OrganizationUser/OrganizationGroups';
import OrganizationProfile from '../OrganizationUser/OrganizationProfile';

const Tab = createBottomTabNavigator();
const screenOptions = {
  headerShown: false,
  tabBarStyle: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 50,
  },
  tabBarOptions: {
    labelStyle: {
      fontSize: 50,
    
    },
  }
}
export default function Bottomtabs() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
    <Tab.Screen
    name="Home"
    component={Home}
    options={{
      tabBarIcon: ({ color, focused }) => (
      <Ionicons name="ios-home" size={30} color={focused ? '#6C63FF' : color} />
      ),
    }}
    />
    <Tab.Screen
     name="Groups" 
     component={Groups}
     options={{
      tabBarIcon: ({ color, focused }) => (
      <MaterialIcons name="groups" size={30} color={focused ? '#6C63FF' : color} />
      ),
    }}
    />
    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{
        tabBarIcon: ({ color, focused }) => (
          <MaterialIcons name="face" size={30} color={focused ? '#6C63FF' : color} />
        ),
      }}
      />
 
  </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  
});
