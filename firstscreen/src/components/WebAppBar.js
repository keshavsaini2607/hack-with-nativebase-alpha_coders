import React, { useState } from "react";
import {
  Box,
  HStack,
  Icon,
  IconButton,
  Popover,
  StatusBar,
  Text,
  View,
} from "native-base";
import { Colors } from "../constant";
import { Entypo } from "@expo/vector-icons";
import ThemeModal from "./ThemeModal";
import { useTheme } from "@react-navigation/native";

const WebAppBar = () => {
  const {colors, dark} = useTheme()
  const [showThemeModal, setShowThemeModal] = useState(false);
  return (
    <View>
      <StatusBar bg={Colors.BACKGROUND} barStyle="light-content" />
      <Box safeAreaTop bg={Colors.PRIMARY} />
      <HStack
        bg={!dark ? Colors.BACKGROUND : colors.notification}
        px="1"
        py="3"
        justifyContent="space-between"
        alignItems="center"
        w="100%"
      >
        <HStack alignItems="center">
          <IconButton
          onPress={() => setShowThemeModal(true)}
            icon={
              <Icon size="lg" as={Entypo} name="menu" color={colors.text} />
            }
          />
          <Text color={dark ? colors.primary : Colors.DARKBACK} fontSize="20" fontWeight="bold">
            <Text color={Colors.LINK}>HackWith</Text>NativeBase
          </Text>
        </HStack>
      </HStack>
      <ThemeModal
        showModal={showThemeModal}
        hideModal={() => setShowThemeModal((p) => !p)}
      />
    </View>
  );
};

export default WebAppBar;
