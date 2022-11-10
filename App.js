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
import { SongPreview } from "./components/songpreview";
import { SongDetails } from "./components/songscreen";

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
        <Stack.Screen name="Preview" component={SongPreview} />
        <Stack.Screen name="Song" component={SongDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
