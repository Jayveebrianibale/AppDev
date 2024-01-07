import React from 'react';
import { View, FlatList, Text, Image, StyleSheet} from 'react-native';

const groups = [
  {
    id: '1',
    name: 'Care International',
    description: 'CARE is a humanitarian organization that fights global poverty and provides assistance in emergencies.',
    image: require('../assets/Care-International.jpg'),
  },
  {
    id: '2',
    name: 'Habitat For Humanity',
    description: 'This organization works to eliminate substandard housing and homelessness by building and renovating homes for those in need. ',
    image: require('../assets/Habitathumanity.jpg'),
  },
  {
    id: '3',
    name: 'MCGI Cares',
    description: 'Witness faith, hope, and love in action as the Members Church of God International (MCGI) continue the advocacies of Brother Eli Soriano and Brother Daniel Razon.',
    image: require('../assets/MCGI.webp'),
  },
  {
    id: '4',
    name: 'World Food Program',
    description: 'As the food assistance branch of the United Nations, WFP works to address hunger and promote food security globally by providing free food and nutritional support. ',
    image: require('../assets/Worldfood.jpg'),
  },
  {
    id: '5',
    name: 'UNICEF',
    description: 'This organization works to eliminate substandard housing and homelessness by building and renovating homes for those in need. ',
    image: require('../assets/Unicef.jpg'),
  },
  {
    id: '6',
    name: 'UNICEF',
    description: 'This organization works to eliminate substandard housing and homelessness by building and renovating homes for those in need. ',
    image: require('../assets/Unicef.jpg'),
  },
  {
    id: '7',
    name: 'UNICEF',
    description: 'This organization works to eliminate substandard housing and homelessness by building and renovating homes for those in need. ',
    image: require('../assets/Unicef.jpg'),
  },
  {
    id: '8',
    name: 'UNICEF',
    description: 'This organization works to eliminate substandard housing and homelessness by building and renovating homes for those in need. ',
    image: require('../assets/Unicef.jpg'),
  },
  
];

const Charitable = () => {
  const renderItem = ({ item }) => (
    <View style={styles.groupContainer}>
      <Image source={item.image} style={styles.groupImage} />
      <View style={styles.groupDetails}>
        <Text style={styles.groupName}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );

  return (
    <FlatList style={styles.FlatList}
      data={groups}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      contentContainerStyle={styles.listContent}
    />
    
  );
};

const styles = StyleSheet.create({
  groupContainer: {
    flexDirection: 'row',
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  groupImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 16,
  },
  groupDetails: {
    flex: 1,
  },
  groupName: {
    fontSize: 25,
    textAlign: 'center',
    color: '#6C63FF',
  },
  description: {
    color: 'gray',
    marginTop: 10,
  },
  listContent: {
    paddingBottom: 110,
  },
});

export default Charitable;
