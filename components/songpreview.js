import { Text, View, StyleSheet, Dimensions, Image } from "react-native";
import { Themes } from "../assets/Themes";
import { NavigationContainer } from "@react-navigation/native";
import { WebView } from "react-native-webview";

export function SongPreview({ route }) {
  // const ProfileScreen = ({ item, index }) => {
  //     const username = route.params.username
  //     const person = personData[username];

  const previewUrl = route.params.preview_url;
  return (
    <WebView
      source={{ uri: previewUrl }}
      style={{
        backgroundColor: Themes.colors.background,
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      }}
    />
  );
}
