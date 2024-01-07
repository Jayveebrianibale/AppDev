import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';


function OrganizationProfile({navigation}) {
  return (
    <View style={styles.container}>

      <TouchableOpacity onPress={() => navigation.navigate ('Messages')  } style={{alignSelf: 'flex-end', marginRight: 10, marginTop: 5, }}>
        <AntDesign name="message1" size={30} color="#6C63FF" />
      </TouchableOpacity>

      <Image
        style={styles.profileImage}
        source={require('../assets/Brian1.jpg')}/>
      <TouchableOpacity>
        <Fontisto style={{left: 40, bottom: 30, }} name="camera" size={20} color="gray" />
      </TouchableOpacity>
     
      <Text style={styles.username}>Jayvee Brian Ibale</Text>
      <Text style={{color: '#6C63FF', fontSize: 16, }}>Organization User</Text>
      
      <TouchableOpacity style={{alignSelf: 'flex-start', flexDirection: 'row', marginLeft: 10, marginTop: 30,}}>
        <AntDesign style={{marginTop: 5}}  name="user" size={30} color="black" />

        <View>
          <Text style={styles.usernameFontsize}>Username</Text>
          <Text style={styles.usernameFontsize1}>Jayvee Brian Ibale</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={{alignSelf: 'flex-start', flexDirection: 'row', marginLeft: 10, marginTop: 10,}}>
        <MaterialCommunityIcons style={{marginTop: 5}} name="email-outline" size={30} color="black" />

        <View>
          <Text style={styles.usernameFontsize}>Email</Text>
          <Text style={styles.usernameFontsize1}>Jayveebrianibale29@gmail.com</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={{alignSelf: 'flex-start', flexDirection: 'row', marginLeft: 10, marginTop: 10,}}>
        <MaterialIcons style={{marginTop: 5}} name="groups" size={30} color="black" />

        <View>
          <Text style={styles.usernameFontsize}>Groups</Text>
          <Text style={styles.usernameFontsize1}>Organization</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.AboutContainer}>
        <Text style={{fontSize: 30}}>About</Text>
      </View>

      <TouchableOpacity style={{alignSelf: 'flex-start', flexDirection: 'row', marginLeft: 10, marginTop: 10,}}>
        <Entypo style={{marginTop: 5}} name="language" size={30} color="black" />
        <View>
          <Text style={styles.usernameFontsize}>Language</Text>
          <Text style={styles.usernameFontsize1}>English</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={{alignSelf: 'flex-start', flexDirection: 'row', marginLeft: 5, marginTop: 10,}}>
        <MaterialIcons style={{marginTop: 5}} name="update" size={30} color="black" />
        <View>
          <Text style={styles.appUpdate}>App Update</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={{alignSelf: 'flex-start', flexDirection: 'row', marginLeft: 10, marginTop: 10,}}>
        <Octicons style={{marginTop: 5}} name="report" size={24} color="black" />
        <View>
          <Text style={styles.appUpdate}>Report Technical Problem</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={{alignSelf: 'flex-start', flexDirection: 'row', marginLeft: 10, marginTop: 10,}}>
        <MaterialIcons style={{marginTop: 5}} name="policy" size={24} color="black" />
        <View>
          <Text style={styles.appUpdate}>Terms and Policies</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate ('Login')} style={{alignSelf: 'flex-start', flexDirection: 'row', marginLeft: 10, marginTop: 10,}}>
        <AntDesign style={{marginTop: 5}} name="logout" size={24} color="black" />
        <View>
          <Text style={styles.appUpdate}>Logout</Text>
        </View>
      </TouchableOpacity>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  username: {
    fontSize: 24,
  },
  usernameFontsize:{
    fontSize: 20,
    marginLeft: 10,
  },
  usernameFontsize1:{
    fontSize: 10,
    color: 'gray',
    marginLeft: 10,
  },

  AboutContainer:{
    alignSelf: 'flex-start',
    marginLeft: 10,
    marginTop: 20, 
  },
  appUpdate: {
    marginTop: 5,
    fontSize: 20,
    marginLeft: 10,
  },


});
export default OrganizationProfile;