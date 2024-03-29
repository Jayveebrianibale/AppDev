import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image, TouchableOpacity} from 'react-native';

export default function Landing({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>“Provide charitable assistance{"\n"}          to those in need.”</Text>
      <Image style={styles.Image} source={require('../assets/medicine.png')} />
      
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate ("Welcome", {language: "Continue"})}>
            <Text style={styles.text}>Continue</Text>
        </TouchableOpacity>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  Text: {
    marginTop: 190,
    fontSize: 25,
  },
  Image: {
    height: 250,
    width: 400,
    marginBottom: 20,
    marginTop: 20,
  },
  button: {
    backgroundColor: '#6C63FF',
    padding: 12,
    borderRadius: 50,
    width: 100,
  },
  text:{
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  }
});