import { Box, Divider, Flex, HStack, Image, Text, useColorMode, VStack } from "native-base";
import React from "react";
import { Pressable } from "react-native";
const profilePic = require("../assets/profile-image.png");
import Ionicons from "@expo/vector-icons/Ionicons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const SidePanel = () => {
  const { colorMode } = useColorMode();

  const options = [
    {
      title: "Contacts",
      icon: (
        <MaterialCommunityIcons
          name="account"
          size={24}
          color={colorMode == "dark" ? "#F9FAFB" : "#1F2937"}
        />
      ),
    },
    {
      title: "Groups",
      icon: (
        <FontAwesome
          name="group"
          size={24}
          color={colorMode == "dark" ? "#F9FAFB" : "#1F2937"}
        />
      ),
    },
    {
      title: "Notification",
      icon: (
        <Ionicons
          name="notifications"
          size={24}
          color={colorMode == "dark" ? "#F9FAFB" : "#1F2937"}
        />
      ),
    },
    {
      title: "Orders",
      icon: (
        <FontAwesome5
          name="shopping-bag"
          size={24}
          color={colorMode == "dark" ? "#F9FAFB" : "#1F2937"}
        />
      ),
    },
    {
      title: "Settings",
      icon: (
        <Ionicons
          name="settings"
          size={24}
          color={colorMode == "dark" ? "#F9FAFB" : "#1F2937"}
        />
      ),
    },
    {
      title: "Privacy policies",
      icon: (
        <MaterialIcons
          name="privacy-tip"
          size={24}
          color={colorMode == "dark" ? "#F9FAFB" : "#1F2937"}
        />
      ),
    },
    {
      title: "Help and support",
      icon: (
        <MaterialIcons
          name="support-agent"
          size={24}
          color={colorMode == "dark" ? "#F9FAFB" : "#1F2937"}
        />
      ),
    },
    {
      title: "refer and earn",
      icon: (
        <Entypo
          name="share"
          size={24}
          color={colorMode == "dark" ? "#F9FAFB" : "#1F2937"}
        />
      ),
    },
  ];

  return (
    <Box width={"25%"} bg={colorMode == "dark" ? "#1F2937" : "white"}>
      <Flex flex={1}>
        <VStack alignItems={"center"} space={1} py={4}>
          <Image source={profilePic} alt="profile" width={100} height={100} />
          <HStack space={2} alignItems="center">
            <Text
              fontWeight={"bold"}
              fontSize="xl"
              color={colorMode == "dark" ? "white" : "#1F2937"}
            >
              Jane Deo
            </Text>
            <FontAwesome5
              name="pen"
              size={16}
              color={colorMode == "dark" ? "white" : "#1F2937"}
            />
          </HStack>
          <Text color={colorMode == "dark" ? "#9CA3AF" : "#6B7280"}>
            janedoe2@mydomain.com
          </Text>
        </VStack>
        <Divider />
        <VStack space={5} py={8} px={"7"} flex={1}>
          {options.map((item, index) => (
            <Pressable key={index}>
              <HStack>
                {item.icon}
                <Text
                  fontSize={"lg"}
                  color={colorMode == "dark" ? "#F9FAFB" : "#1F2937"}
                  textTransform={"capitalize"}
                  mx={3}
                  fontWeight={"medium"}
                >
                  {item.title}
                </Text>
              </HStack>
            </Pressable>
          ))}
        </VStack>
        <Divider />
        <HStack p={7} space={0}>
          <MaterialIcons
            name="logout"
            size={24}
            color={colorMode == "dark" ? "#F9FAFB" : "#1F2937"}
          />
          <Text
            fontSize={"lg"}
            color={colorMode == "dark" ? "#F9FAFB" : "#1F2937"}
            textTransform={"capitalize"}
            mx={3}
          >
            Logout
          </Text>
        </HStack>
      </Flex>
    </Box>
  );
};

export default SidePanel;
