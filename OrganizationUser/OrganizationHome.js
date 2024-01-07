import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Entypo } from '@expo/vector-icons';

 function OrganizationHome({navigation}) {
  return (
    <SafeAreaView>
      <ScrollView style={styles.listContent}>

        <View>
        <Image style={styles.Image} source={require ('../assets/Brian1.jpg')}/>
        </View>


          <View style={styles.searchBarContainer}>
            <TextInput
              style={styles.input}
              placeholder="Search"
              placeholderTextColor="#888"
            />
            <TouchableOpacity>
              <Ionicons name="ios-search" size={24} color="#333" />
            </TouchableOpacity>
          </View>

        <View style={{flexDirection: 'row', marginTop: 10, marginLeft: 10}}>
          
          <Text style={styles.schedule}>Upcoming Events</Text>
          <View style={{flexDirection: 'row', marginLeft: 125, gap: 10,}}>
            <TouchableOpacity>
              <Entypo name="plus" size={24} color="black" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Events')}>
              <Text style={styles.Viewall}>View all</Text>
            </TouchableOpacity>
          </View>

        </View>

        
        <View>
          <Image style={styles.scheduleImage} source={require('../assets/dental-mission.jpg')}/>
          <Text style={styles.Dentalname}>Dental Clinic                                 Tomorrow at 8:00AM</Text>
        </View>

        <View style={{flexDirection: 'row', marginTop: 10, marginLeft: 10}}>
          <Text style={styles.schedule}>Free Services</Text>

          <View style={{flexDirection: 'row', marginLeft: 150, gap: 10,}}>
            <TouchableOpacity>
              <Entypo name="plus" size={24} color="black" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('FreeServices')}>
              <Text style={styles.Viewall}>View all</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <Image style={styles.scheduleImage} source={require('../assets/closeteam.jpg')}/>
          <Text style={styles.Dentalname}>HEALTH SERVICES</Text>
        </View>

        <View style={{flexDirection: 'row', marginTop: 10, marginLeft: 10}}>
          <Text style={styles.schedule}>Most Charitable Groups</Text>

          <View style={{flexDirection: 'row', marginLeft: 80, gap: 5,}}>
            <TouchableOpacity>
              <Entypo name="plus" size={24} color="black" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('CharitableGroups')}>
              <Text style={styles.Viewall}>View all</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.last}>
          <Image style={styles.scheduleImage} source={require('../assets/MCGI.webp')}/>
          <Text style={styles.Dentalname}>MGCI CARES</Text>
        </View>

        <StatusBar style="auto" />
       
      </ScrollView>
    </SafeAreaView>

  
 
  );
}

const styles = StyleSheet.create({
  container: {
   
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eee',
    borderRadius: 10,
    paddingHorizontal: 20,
    borderWidth: .1,
    width: 285,
    marginLeft: 60,

  },
  input: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 16,
    color: '#333',
  },
  Image: {
    width: 45,
    height: 45,
    top: 45,
    left: 10,
    borderRadius: 100,
    
    
  },
  Icon: {
    alignSelf: 'flex-end',
    right: 10,
  },
  schedule: {
    color: '#6C63FF',
    fontSize: 20,
  },
  scheduleImage: {
    height: 200,
    width: 325,
    borderRadius: 25,
    marginTop: 10,
    marginLeft: 15,
  },
  Viewall: {
    marginTop: 5,
    color: 'darkgray',
  },
  Dentalname: {
    color:  'darkgray',
    marginTop: 10,
    textAlign: 'center',

  },
  last: {
    paddingBottom: 60,
  }

});

export default OrganizationHome;