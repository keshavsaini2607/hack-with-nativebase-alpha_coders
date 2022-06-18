import React from 'react';
import {Box, HStack, Icon, IconButton, StatusBar, Switch, Text, useColorMode, useMediaQuery, View} from 'native-base';
import { Ionicons } from "@expo/vector-icons";
const Appbar = () => {
  const [isSmallScreen] = useMediaQuery({
    minWidth: 280,
    maxWidth: 600,
  });
  const { colorMode } = useColorMode();

  return (
    <View w={"100%"}>
      <StatusBar bg={"#4C1D95"} barStyle="light-content" />
      <Box safeAreaTop bg="#4C1D95" />
      <HStack
        bg={isSmallScreen ? "#4C1D95" : ""}
        px="1"
        py="3"
        justifyContent="space-between"
        alignItems="center"
        w="100%"
      >
        <HStack alignItems="center" space={5} px={isSmallScreen ? 3 : 0}>
          <View w={5} h={5}>
            <Ionicons
              name="arrow-back"
              size={24}
              color={
                isSmallScreen
                  ? "white"
                  : colorMode == "dark"
                  ? "white"
                  : "#1F2937"
              }
            />
          </View>
          <Text
            color={
              isSmallScreen
                ? "white"
                : colorMode == "dark"
                ? "white"
                : "#1F2937"
            }
            fontSize="20"
            fontWeight={isSmallScreen ? "bold" : "normal"}
          >
            Settings
          </Text>
        </HStack>
        <ToggleDarkMode />
      </HStack>
    </View>
  );
};


// Color Switch Component
function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center" mr={3}>
      <Switch
        isChecked={colorMode === "light"}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />
    </HStack>
  );
}



export default Appbar;
