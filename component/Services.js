import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Services = () => {
  const navigation = useNavigation();
 

  const freeServices = [
    {
      id: '1',
      title: 'Health Services',
      image: require('../assets/closeteam.jpg'),
    },
    {
      id: '2',
      title: 'Education', 
      image: require('../assets/Education.jpg'),
    },
    {
      id: '3',
      title: 'Government Services',
      image: require('../assets/Government.jpg'),
    },
    {
      id: '4',
      title: 'Social Services',
      image: require('../assets/Social.jpg'),
    },
  ];

  

  const renderItem = ({ item }) => {
    const messenger = {
      avatar: item.image,
      sender: item.title,
      message: 'DefaultMessage', 
      nickname: 'Non Profit Organization', 
      
    };
  
    return (
      <SafeAreaView>
        <View style={styles.itemContainer}>
          <Image source={item.image} style={styles.image} />
          <View style={styles.MessageContainer}>
            <Text style={styles.title}>{item.title}</Text>
            
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Chat', { messenger });
              }}
            >         
              <Text style={styles.messageUS}>Message Us
                <AntDesign name="message1" size={24} color="black" />
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  };

  return (
    <FlatList
      data={freeServices}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      style={styles.container}
      contentContainerStyle={styles.listContent}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  MessageContainer: {
    padding: 5,
  },
  image: {
    width: 340,
    height: 200,
    borderRadius: 25,
    marginTop: 10,
  },
  title: {
    fontSize: 20,
    color: '#6C63FF',
    textAlign: 'center'
  },
  messageUS: {
    fontSize: 20,
    color: 'gray',
    textAlign: 'center',
  },
  listContent: {
    paddingBottom: 10,
  },
});

export default Services;
