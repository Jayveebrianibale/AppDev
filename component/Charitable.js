import React from 'react';
import { View, FlatList, Text, Image, StyleSheet} from 'react-native';

const groups = [
  {
    id: '1',
    name: 'MCGI Cares',
    description: 'Witness faith, hope, and love in action as the Members Church of God International (MCGI) continue the advocacies of Brother Eli Soriano and Brother Daniel Razon.',
    image: require('../assets/MCGI.webp'),
  },
  {
    id: '2',
    name: 'Philippine Red Cross',
    description: 'The Philippine Red Cross is known for its humanitarian services, including disaster response, blood donation drives, and health services.',
    image: require('../assets/RedCross.jpg'),
  },
  {
    id: '3',
    name: 'Gawad Kalinga',
    description: 'Gawad Kalinga is a Philippine-based movement that focuses on community development, providing housing, education, and livelihood programs to those in need.',
    image: require('../assets/Gawad.jpg'),
  },
  {
    id: '4',
    name: 'World Food Program',
    description: 'As the food assistance branch of the United Nations, WFP works to address hunger and promote food security globally by providing free food and nutritional support. ',
    image: require('../assets/Worldfood.jpg'),
  },
  {
    id: '5',
    name: 'Tulay ng Kabataan Foundation',
    description: 'This foundation is dedicated to helping street children and marginalized youth by providing them with shelter, education, and vocational training. ',
    image: require('../assets/Kabataan.jpg'),
  },
  {
    id: '6',
    name: 'Kanlungan sa ER-MA Ministry',
    description: 'This organization works with street dwellers in Metro Manila, providing them with basic needs such as food, clothing, and medical assistance.',
    image: require('../assets/Ministry.jpg'),
  },
  {
    id: '7',
    name: 'Childhope Philippines',
    description: 'This organization aims to help street children by providing them with education, health services, and opportunities for a better future.',
    image: require('../assets/child.jpg'),
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
