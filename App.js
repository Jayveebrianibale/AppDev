import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,} from 'react-native';

import Login from './screens/Login';
import Landing from './screens/Landing';
import Verifyemail from './screens/Verifyemail';
import { CurrentRenderContext, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Events from './screens/Events';
import Home from './screens/Home';
import Groups from './screens/Groups';
import Messages from './screens/Messages';
import Ionicons from '@expo/vector-icons/Ionicons';
import Register from './screens/Register';
import Bottomtabs from './screens/Bottomtabs';
import FreeServices from './screens/FreeServices';
import EventList from './component/Eventlist';
import CharitableGroups from './screens/CharitableGroups';
import Splashscreen from './screens/Splashscreen';
import RegisterScreen from './screens/RegisterScreen';
import BarangayLanding from './OrganizationUser/OrganizationLanding';
import OrganizationLanding from './OrganizationUser/OrganizationLanding';
import OrganizationRegister from './OrganizationUser/OrganizationRegister';
import OrganizationVerify from './OrganizationUser/OrganizationVerify';
import OrganizationHome from './OrganizationUser/OrganizationHome';
import OrganizationGroups from './OrganizationUser/OrganizationGroups';
import OrganizationProfile from './OrganizationUser/OrganizationProfile';
import OrganizationBottomTabs from './OrganizationUser/OrganizationBottomTabs';
import OrganizationFreeServices from './OrganizationUser/OrganizationFreeServices';

const Stack = createNativeStackNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 50,
    background: '#fff' 
    
  }
  
}

export default function App() {
  return (
    
   <NavigationContainer>
    <Stack.Navigator initialRouteName="SplashScreen" headerMode="none" screenOptions={screenOptions} >
      <Stack.Screen
        name="Splashscreen"
        component={Splashscreen}
        options={{title: "",}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{title: "",}}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{title: "",}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{title: "",}}
      />
      <Stack.Screen
        name="Verifyemail"
        component={Verifyemail}
        options={{title: "",}}
      />
      <Stack.Screen
        name="Landing"
        component={Landing}
        options={{title: "",}}
      />
      <Stack.Screen
        name="Welcome"
        component={Bottomtabs}
        options={{title: "",}}
      />
       <Stack.Screen
        name="Messages"
        component={Messages}
        options={{title: "",}}
      />
      <Stack.Screen
        name="FreeServices"
        component={FreeServices}
        options={{title: "Free Services", headerShown: true, headerShadowVisible: false,}}
      />
      <Stack.Screen
        name="Eventlist"
        component={EventList}
        options={{title: "",}}
      />
      <Stack.Screen
        name="CharitableGroups"
        component={CharitableGroups}
        options={{title: "",}}
      />
      <Stack.Screen
        name="Events"
        component={Events}
        options={{title: "Upcoming Events", headerShown: true, headerShadowVisible: false,}}
      />
        <Stack.Screen
        name="OrganizationLanding"
        component={OrganizationLanding}
        options={{title: "",}}
      />
        <Stack.Screen
        name="OrganizationRegister"
        component={OrganizationRegister}
        options={{title: "",}}
      />
         <Stack.Screen
        name="OrganizationVerify"
        component={OrganizationVerify}
        options={{title: "",}}
      />
        <Stack.Screen
        name="OrganizationBottomTabs"
        component={OrganizationBottomTabs}
        options={{title: "",}}
      />
         <Stack.Screen
        name="OrganizationGroups"
        component={OrganizationGroups}
        options={{title: "",}}
      />
         <Stack.Screen
        name="OrganizationProfile"
        component={OrganizationProfile}
        options={{title: "",}}
      />
         <Stack.Screen
        name="OrganizationFreeServices"
        component={OrganizationFreeServices}
        options={{title: "Free Services",headerShown: true, headerShadowVisible: false}}
      />

    </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
