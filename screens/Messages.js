import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const messagesData = [
  { id: '1', sender: 'Gojo Saturo', message: 'Pogi ko!', avatar: require('../assets/Gojo.webp') },
  { id: '2', sender: 'Megume Fushiguro', message: 'HAHAHAHAHAHA!', avatar: require('../assets/Gojo.webp') },
  { id: '3', sender: 'Toji Fushiguro', message: 'HAHAHAHAHAHA!', avatar: require('../assets/Gojo.webp') },
  { id: '4', sender: 'Goku', message: 'HAHAHAHAHAHA!', avatar: require('../assets/Gojo.webp') },
  { id: '5', sender: 'Vegeta', message: 'HAHAHAHAHAHA!', avatar: require('../assets/Gojo.webp') },
  { id: '6', sender: 'Naruto Uzumaki', message: 'HAHAHAHAHAHA!', avatar: require('../assets/Gojo.webp') },
  { id: '7', sender: 'Uchiha Sasuke', message: 'HAHAHAHAHAHA!', avatar: require('../assets/Gojo.webp') },
  { id: '8', sender: 'Izuku Midoriya ', message: 'HAHAHAHAHAHA!', avatar: require('../assets/Gojo.webp') },
  { id: '9', sender: 'Izumi Miyamura', message: 'HAHAHAHAHAHA!', avatar: require('../assets/Gojo.webp') },
  { id: '10', sender: 'Uchiha Itachi', message: 'HAHAHAHAHAHA!', avatar: require('../assets/Gojo.webp') },
  { id: '11', sender: 'Minato Namikaze', message: 'HAHAHAHAHAHA!', avatar: require('../assets/Gojo.webp') },

  // Add more messages as needed
];

const MessageItem = ({ sender, message, avatar }) => (
  <View style={styles.messageItem}>
    <Image source={avatar} style={styles.avatar} />
    <View style={styles.messageContent}>
      <Text style={styles.sender}>{sender}</Text>
      <Text>{message}</Text>
    </View>
  </View>
);

const MessagesScreen = () => (
  <View style={styles.container}>
    <FlatList
      data={messagesData}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <MessageItem {...item} />}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    top: 40,
  },
  messageItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  messageContent: {
    flex: 1,
  },
  sender: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
});

export default MessagesScreen;

 