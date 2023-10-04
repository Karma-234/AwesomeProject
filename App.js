import LoginPage from './pages/LoginPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './pages/HomePage';
import { createClient } from '@supabase/supabase-js';

const Stack = createNativeStackNavigator();

const SUPABASE_KEY = process.env.ANON_KEY;
const SUPABASE_URL = process.env.PUB_URL;
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName='Home' screenOptions={{ animation: 'fade_from_bottom', headerShown: false, headerBackVisible: true, }}>
        <Stack.Screen name='Login' component={LoginPage}/>
        <Stack.Screen name='Home' component={HomePage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

