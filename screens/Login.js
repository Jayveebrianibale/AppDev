import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, style, Button, TextInput, TouchableOpacity, SafeAreaView,} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Login({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
         <Text style={styles.Text}>CHARITABLE  ICARE {"\n"}   ORGANIZATIONS APP</Text>
        <Image style={styles.Image} source={require('../assets/Showing.png')} />

        <View>
            <TextInput placeholder="@Email here" style={styles.input} />
        </View>  
          
        <Text>
          Don't have an account?{' '}
          <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
            <Text style={{ color: 'blue', gap: 25 }}>Register here!</Text>
          </TouchableOpacity>
        </Text>

      <View>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate ("Verifyemail", {language: "Register Now"})}>
            <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
      </View> 


    </SafeAreaView>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
Image: {
    height: 250,
    width: 250,
    borderRadius: 50,
  },
Text: {
    // marginTop: 140,
    fontSize: 30,
    fontWeight: 'bold'
    
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
    fontSize: 16,
},
button: {
    backgroundColor: '#6C63FF',
    padding: 12,
    borderRadius: 50,
    width: 100,
    marginTop:10,

},
text: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
},
  
});