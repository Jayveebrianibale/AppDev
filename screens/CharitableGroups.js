import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import EventList from '../component/Eventlist';
import Charitable from '../component/Charitable';
import { AntDesign } from '@expo/vector-icons';

function CharitableGroups() {
  return (
      <SafeAreaView>
        <Charitable/>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
});
export default CharitableGroups;