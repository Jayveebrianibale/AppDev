import { SafeAreaView, StyleSheet, Text, View, TextInput, Image, TouchableOpacity} from 'react-native';

export default function OrganizationVerify({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>VERIFY YOUR 📧MAIL</Text>
      <Text>"We will send you a verification code". THANK YOU!</Text>
      <Image style={styles.Image} source={require('../assets/personalemail.png')} />

      <View>
        <TextInput keyboardType='numeric' placeholder="@Verification Code here" style={styles.input}/>
      </View>

      <View>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate ("OrganizationLanding", {language: "Verify Now"})}>
            <Text style={styles.verify}>Verify</Text>
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
verify: {
  color: 'white',
  fontSize: 16,
  textAlign: 'center',
},
 
});