import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function OrganizationRegister({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
    <Text style={styles.text}>REGISTER YOUR 📧MAIL</Text>
    <Text>THANK YOU!</Text>
    <Image style={styles.Image} source={require('../assets/Register.png')} />

    <View>
      <TextInput placeholder="Firstname" style={styles.input}/>
      <TextInput placeholder="Lastname" style={styles.input}/>
      <TextInput placeholder="@Email" style={styles.input}/>
    </View>

    <View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate ("OrganizationVerify", {language: "Verify Now"})}>
          <Text style={styles.register}>Register</Text>
      </TouchableOpacity>
    </View> 

  
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    paddingLeft: 10,
    fontWeight: 'bold',
  },
  input: {
    width: 300,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 50,
    padding: 10,
    marginBottom: 10,
    textAlign:  'center',
},
Image: {
    height: 250,
    width: 250,
    borderRadius: 50,
},
button: {
    backgroundColor: '#6C63FF',
    padding: 12,
    borderRadius: 50,
    width: 100,
},
register: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
},
});