import React, { useState, useEffect } from "react";
import { NativeBaseProvider, ScrollView } from "native-base";
import Main from "./src/screens/Main";
import Tabs from "./src/components/Tabs";
import Appbar from "./src/components/Appbar";
import WebAppBar from "./src/components/WebAppBar";
import { Alert, Dimensions } from "react-native";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { EventRegister } from "react-native-event-listeners";
import { Colors } from "./src/constant";

const MyTheme = {
  dark: true,
  colors: {
    primary: 'rgb(250, 250, 250)',
    background: Colors.DARKBACK,
    card: Colors.SDARK,
    text: 'rgb(255, 255, 255)',
    border: Colors.XDark,
    notification: Colors.MDark,
  },
};

export default function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const appTheme = darkTheme ? MyTheme : DefaultTheme;
  

  useEffect(() => {
    let appThemeEvent = EventRegister.addEventListener("changeAppTheme", (data) => {
      setDarkTheme(data);
    });

    return () => {
      EventRegister.removeEventListener(appThemeEvent);
    };
  }, []);

  return (
    <NavigationContainer theme={appTheme}>
      <NativeBaseProvider>
        {Dimensions.get("screen").width > 768 ? <WebAppBar /> : <Appbar />}
        {Dimensions.get("screen").width > 768 ? (
          <Main />
        ) : (
          <ScrollView>
            <Main />
          </ScrollView>
        )}
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
