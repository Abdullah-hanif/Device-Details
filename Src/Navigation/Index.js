// In App.js in a new project

import * as React from 'react';
import { View, Text, MaskedViewBase } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../Screens/Home/Index'
import DeviceInfo from '../Screens/DeviceInfo/Index'
import CallLog from '../Screens/CallsLog/index'
import MakePhoneCalls from '../Screens/MakePhoneCalls/Index'
import DocumentAndFiles from '../Screens/DocumentAndFiles/Index'
import Camera from '../Screens/Camera/Index'


// import MyContacts from '../Screens/MyContacts/Index'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="home" component={Home}  options={{headerShown: false}} />
        <Stack.Screen name="deviceInfo" component={DeviceInfo}  options={{headerShown: false}} />
        <Stack.Screen name="callsLog" component={CallLog}  options={{headerShown: false}} />
        <Stack.Screen name="makePhoneCalls" component={MakePhoneCalls}  options={{headerShown: false}} />
        <Stack.Screen name="documentAndFiles" component={DocumentAndFiles}  options={{headerShown: false}} />
        <Stack.Screen name="camera" component={Camera}  options={{headerShown: false}} />
       
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;