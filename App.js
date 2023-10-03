import LoginPage from './pages/LoginPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './pages/HomePage';

const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName='Login' screenOptions={{ animation: 'fade_from_bottom', headerShown: false, headerBackVisible: true, }}>
        <Stack.Screen name='Login' component={LoginPage}/>
        <Stack.Screen name='Home' component={HomePage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

