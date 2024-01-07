import { StyleSheet,} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import OrganizationHome from './OrganizationHome';
import OrganizationGroups from './OrganizationGroups';
import OrganizationProfile from './OrganizationProfile';

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
export default function OrganizationBottomTabs() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
    <Tab.Screen
    name="Home"
    component={OrganizationHome}
    options={{
      tabBarIcon: ({ color, focused }) => (
      <Ionicons name="ios-home" size={30} color={focused ? '#6C63FF' : color} />
      ),
    }}
    />
    <Tab.Screen
     name="Groups" 
     component={OrganizationGroups}
     options={{
      tabBarIcon: ({ color, focused }) => (
      <MaterialIcons name="groups" size={30} color={focused ? '#6C63FF' : color} />
      ),
    }}
    />
    <Tab.Screen
      name="Profile"
      component={OrganizationProfile}
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
