import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Switch, Text, View } from 'react-native';
import MenuList from './components/MenuList';
import Custom from './components/SectionList';
import CustomImage from './components/CustomImage';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <MenuList/> */}
      {/* <Custom/> */}
      <CustomImage/>
      <StatusBar hidden={false} style="inverted" animated />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
