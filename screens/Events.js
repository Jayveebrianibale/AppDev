import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import EventList from '../component/Eventlist';
import { MaterialIcons } from '@expo/vector-icons';

function Events() {
  return (
        <EventList/>
  );
}

const styles = StyleSheet.create({

});

export default Events;