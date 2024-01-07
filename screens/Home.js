import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Entypo } from '@expo/vector-icons';

 function Home({navigation}) {
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

        <View style={{flexDirection: 'row', marginTop: 10,}}>
          
          <Text style={styles.schedule1}>Upcoming Events</Text>
          <View style={{flexDirection: 'row', marginLeft: 140, gap: 10,}}>
            <TouchableOpacity>
              <Entypo name="plus" size={24} color="gray" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Events')}>
              <Text style={styles.Viewall1}>View all</Text>
            </TouchableOpacity>
          </View>

        </View>

        
        <View>
          <Image style={styles.scheduleImage} source={require('../assets/dental-mission.jpg')}/>
          <Text style={styles.Dentalname}>Dental Clinic                                 Tomorrow at 8:00AM</Text>
        </View>

        <View>
          <Text style={styles.schedule}>Free Services</Text>

          <TouchableOpacity onPress={() => navigation.navigate('FreeServices')}>
            <Text style={styles.Viewall}>View all</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Image style={styles.scheduleImage} source={require('../assets/closeteam.jpg')}/>
          <Text style={styles.Dentalname}>HEALTH SERVICES</Text>
        </View>

        <View>
          <Text style={styles.schedule}>Most Charitable Groups</Text>

          <TouchableOpacity onPress={() => navigation.navigate('CharitableGroups')}>
            <Text style={styles.Viewall}>View all</Text>
          </TouchableOpacity>
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
    // flex: 1,
    // backgroundColor: 'white',
    // alignItems: 'center',
    // justifyContent: 'center',
   
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
    top: 15,
    left: 10,
    fontSize: 20,
  },
  schedule1: {
    color: '#6C63FF',
    left: 10,
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
    alignSelf: 'flex-end',
    marginRight: 20,
    color: 'darkgray',
  },
  Viewall1: {
    alignSelf: 'flex-end',
    marginRight: 20,
    color: 'darkgray',
    top: 5,
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

export default Home;