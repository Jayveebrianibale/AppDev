import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import GroupList from '../component/Grouplist';
import { AntDesign } from '@expo/vector-icons';

 function OrganizationGroups() {
  return (
    <SafeAreaView>

      <TouchableOpacity>
      <AntDesign name="addusergroup"
        size={24}
        color="black"
        style={{alignSelf: 'flex-end', marginTop: 35, marginRight: 10,}}
        />
      </TouchableOpacity>
        <GroupList/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
});
export default OrganizationGroups;