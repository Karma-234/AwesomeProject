import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MenuList from './components/MenuList';
import Custom from './components/SectionList';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <MenuList/> */}
      <Custom/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
