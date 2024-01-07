
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const RegisterScreen = ({ navigation }) => {
  const [role, setRole] = useState('user'); // Default role is 'user'

  const handleRegister = () => {
    // Perform registration logic here based on username, password, and role
    console.log(`Registered as ${role} - Username: ${username}, Password: ${password}`);

    // Navigate to the appropriate screen (e.g., HomeScreen)
    navigation.navigate('HomeScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>You can Register as:</Text>
      <Image style={styles.Image} source={require('../assets/RegisterUs.png')} />

        <View style={styles.roleContainer}>
            <TouchableOpacity
              style={styles.roleButton}
              onPress={() => setRole('user')}
              activeOpacity={0.8}
            >
              <Text style={role === 'user' ? styles.activeButtonText : styles.buttonText}>Barangay User</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.roleButton}
              onPress={() => setRole('admin')}
              activeOpacity={0.8}
            >
              <Text style={role === 'admin' ? styles.activeButtonText : styles.buttonText}>Organization User</Text>
            </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate ('Register')} style={styles.registerButton} activeOpacity={0.8}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  roleButton: {
    backgroundColor: '#6C63FF',
    padding: 10,
    borderRadius: 50,
    width: 125,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  activeButtonText: {
    color: 'darkgray',
    textAlign: 'center',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  registerButton: {
    marginTop: 30,
    backgroundColor: '#6C63FF',
    padding: 12,
    borderRadius: 50,
    width: 100,
  },
  Image: {
    height: 250,
    width: 250,
    borderRadius: 50,
},
    roleContainer: {
    flexDirection: 'row',
    gap: 50,
}
});

export default RegisterScreen;
