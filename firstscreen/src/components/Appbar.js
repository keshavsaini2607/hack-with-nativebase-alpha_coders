import React, { useState } from "react";
import {
  Box,
  HStack,
  Icon,
  IconButton,
  StatusBar,
  Text,
  View,
} from "native-base";
import { Ionicons, Entypo, AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { Colors } from "../constant";
import { useTheme } from "@react-navigation/native";
import ThemeModal from "./ThemeModal";

const Appbar = () => {
  const [showThemeModal, setShowThemeModal] = useState(false);
  const { colors, dark } = useTheme();
  return (
    <View>
      <StatusBar bg={dark ? Colors.XDark : "#4C1D95"} barStyle="light-content" />
      <Box safeAreaTop bg="#4C1D95" />
      <HStack
        bg={dark ? colors.border : "#4C1D95"}
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
              <Icon size="lg" as={Entypo} name="menu" color={Colors.BACKGROUND} />
            }
          />
          <Text color="white" fontSize="md" fontWeight="bold">
            Baby Suit
          </Text>
        </HStack>
        <HStack paddingRight={2}>
          <IconButton
            icon={
              <Icon
                as={Entypo}
                name="share"
                size="md"
                color={Colors.TERTIARY}
              />
            }
          />
          <IconButton
            icon={
              <Icon
                as={AntDesign}
                name="heart"
                size="md"
                color={Colors.TERTIARY}
              />
            }
          />
          <IconButton
            icon={
              <Icon
                as={Entypo}
                name="shopping-cart"
                size="md"
                color={Colors.TERTIARY}
              />
            }
          />
        </HStack>
      </HStack>
      <ThemeModal
        showModal={showThemeModal}
        hideModal={() => setShowThemeModal(false)}
      />
    </View>
  );
};

export default Appbar;
