import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

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

const OrganizationFreeServices = () => {
  const renderItem = ({ item }) => (
    <SafeAreaView>
      <View style={styles.itemContainer}>
        <Image source={item.image} style={styles.image} />
          <View style={styles.MessageContainer}>
            <Text style={styles.title}>{item.title}</Text>
          </View>

      </View>
    </SafeAreaView>
  );

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

export default OrganizationFreeServices;
