import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
const eventsData = [
  {
    id: '1',
    title: 'MCGI Dental Clinic',
    description: 'Tomorrow at 8:00AM',
    image: require('../assets/dental-mission.jpg'),
  },
  {
    id: '2',
    title: 'MCGI FREESTORE PROGRAM',
    description: 'January 01, 2024 at 10:00AM',
    image: require('../assets/freestore.jpeg'),
  },
  {
    id: '3',
    title: 'MCGI FEEDING PROGRAM',
    description: 'January 15, 2024 at 10:00AM',
    image: require('../assets/Feeding.jpg'),
  },
  {
    id: '4',
    title: 'MCGI MEDICAL MISSION',
    description: 'Febuary 07, 2024 at 9:00AM',
    image: require('../assets/closeteam.jpg'),
  },
];


const EventList = () => {
  const renderItem = ({ item }) => (
      <View style={styles.itemContainer}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
  );

  return (
    <FlatList
      data={eventsData}
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
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
  },
  image: {
    width: 340,
    height: 200,
    borderRadius: 25,
  },
  title: {
    fontSize: 20,
    marginTop: 15,
    color: '#6C63FF',
  },
  description: {
    padding: 0,
    marginTop: 10,
    color: 'darkgray',
    fontSize: 15,
  },

  listContent: {
    paddingBottom: 10,
  },

});

export default EventList;
