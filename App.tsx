import { Milonga_400Regular, useFonts } from '@expo-google-fonts/milonga';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import { LogInContainer } from './screens/LogIn/loginContainer';
import { Splash } from './screens/Splash/Splash';
import { Home } from './screens/Home/home';


const theme = {
  ...DefaultTheme,
  fontFamily: {...DefaultTheme.fonts.regular.fontFamily = 'Milonga_400Regular'} 
};

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Milonga_400Regular
  });

  if ( !fontsLoaded ) return null

  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash" screenOptions={ { headerShown: false } }>
          <Stack.Screen
            name="LogIn"
            component={LogInContainer}/>
          <Stack.Screen
            name='Tabla'
            component={Home}/>
          <Stack.Screen
            name="Splash"
            component={Splash}
            initialParams={ {to: "LogIn"} }/>
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
