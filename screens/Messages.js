import React from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text, FlatList, Image, StyleSheet,} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const messagesData = [
  { id: '1', sender: 'Health Services', message: 'Hello, how can i help you?', nickname: 'Nonprofit Organization', avatar: require('../assets/closeteam.jpg') },
  { id: '2', sender: 'Education', message: 'Hello, how can i help you?', nickname: 'Nonprofit Organization', avatar: require('../assets/Education.jpg') },
  { id: '3', sender: 'Government Services', message: 'Hello, how can i help you?', nickname: 'Nonprofit Organization', avatar: require('../assets/Government.jpg') },
  { id: '4', sender: 'Social Services', message: 'Hello, how can i help you?', nickname: 'Nonprofit Organization', avatar: require('../assets/Social.jpg') },

];

const MessageItem = ({ id, sender, message, avatar, nickname}) => {
  const messenger = {id, sender, message, avatar, nickname}
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>  {
       navigation.navigate('Chat', {messenger})}}>
      <View style={styles.messageItem}>
        <Image source={avatar} style={styles.avatar} />
        <View style={styles.messageContent}>
          <Text style={styles.sender}>{sender}</Text>
          <Text>{message}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const Messages = ({navigation}) => (
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
    padding: 12,
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

export default Messages;

 