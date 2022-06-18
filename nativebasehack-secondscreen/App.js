import React, { useEffect, useState } from "react";
import { NativeBaseProvider, useMediaQuery } from "native-base";
import Main from "./src/screens/Main";
import WebAppBar from "./src/components/WebAppBar";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { EventRegister } from "react-native-event-listeners";
export default function App() {
  const [isSmallScreen] = useMediaQuery({
    minWidth: 280,
    maxWidth: 600,
  });

  const [darkTheme, setDarkTheme] = useState(false);
  const appTheme = darkTheme ? MyTheme : DefaultTheme;

  useEffect(() => {
    let appThemeEvent = EventRegister.addEventListener(
      "changeAppTheme",
      (data) => {
        setDarkTheme(data);
      }
    );

    return () => {
      EventRegister.removeEventListener(appThemeEvent);
    };
  }, []);


  return (
    <NavigationContainer theme={appTheme}>
      <NativeBaseProvider>
        {!isSmallScreen && <WebAppBar />}
        <Main />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
