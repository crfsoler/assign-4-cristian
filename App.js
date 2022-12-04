import "react-native-gesture-handler";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Dimensions,
  Image,
  ImageBackground,
} from "react-native";
import { Themes, Images } from "./assets/Themes";
import { HomeScreen } from "./components/homescreen";
import { useState } from "react";
import { ScreenStack } from "react-native-screens";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { RoomCode } from "./components/entercode";
import { HostName } from "./components/hostname";
import { GuestList } from "./components/guestlistscreen";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Host name" 
          component={HostName} 
          options={{
            headerStyle: {
              backgroundColor: Themes.colors.white,
            },
          headerTintColor: 'gray',
          }}
        />
        <Stack.Screen 
          name="Guest room" 
          component={RoomCode} 
          options={{
            headerStyle: {
              backgroundColor: Themes.colors.white,
            },
          headerTintColor: 'gray',
          }}
        />
        <Stack.Screen 
          name="Guest list" 
          component={GuestList} 
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.white,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
