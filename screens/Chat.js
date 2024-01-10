import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, SafeAreaView, Image } from 'react-native';


const Chat = ({route}) => {
  const {messenger} = route.params
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState('');

  
  const sendMessage = () => {
    if (currentMessage.trim() === '') return;
    const newMessages = [...messages, { id: messages.length + 1,
     text: currentMessage,
      sender: 'user',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
       isSent: true, }];
    setMessages(newMessages);
    setCurrentMessage('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.receiverContainer}>
        <Image style={styles.receiverPhoto} source={messenger.avatar}/>
        <Text style={styles.receiverName}>{messenger.sender}</Text>
        <Text style={{color: 'gray'}}>{messenger.nickname}</Text>
      </View>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
            <View style={item.sender === 'user' ? styles.userMessage : styles.otherMessage}>
              <Text style={styles.messageText}>{item.text}</Text>
              <Text style={styles.timeText}>{item.time}</Text>
            </View>
        )}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          value={currentMessage}
          onChangeText={(text) => setCurrentMessage(text)}
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F4F4F4',
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#DCF8C6',
    padding: 8,
    marginVertical: 4,
    borderRadius: 8,
  },
  otherMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#E0E0E0',
    padding: 8,
    marginVertical: 4,
    borderRadius: 8,
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#C0C0C0',
    borderRadius: 8,
    padding: 8,
    marginRight: 8,
  },
  sendButton: {
    backgroundColor: '#6C63FF',
    padding: 8,
    borderRadius: 8,
  },
  sendButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  timeText: {
    fontSize: 12,
    marginTop: 4,
    color: '#666',
  },
  receiverContainer: {
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    justifyContent: 'center',
    gap: 10,
  },
  receiverPhoto: {
    width: 100,
    height: 100,
    borderRadius: 100,
    marginRight: 10,
  },
  receiverName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  
});
export default Chat;
