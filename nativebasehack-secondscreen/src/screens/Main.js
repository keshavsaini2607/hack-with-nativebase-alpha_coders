import { Pressable, StyleSheet } from "react-native";
import React from "react";
import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Progress,
  Switch,
  Text,
  useColorMode,
  useMediaQuery,
  View,
  VStack,
} from "native-base";
import SidePanel from "../components/SidePanel";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import Appbar from "../components/Appbar";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";



const Main = () => {
  const [isSmallScreen] = useMediaQuery({
    minWidth: 280,
    maxWidth: 600,
  });
  const [isMediumScreen] = useMediaQuery({
    minWidth: 600,
    maxWidth: 1000,
  });
  const { colorMode } = useColorMode();


const settingOptions = [
  {
    icon: (
      <MaterialCommunityIcons
        name="form-textbox-password"
        size={24}
        color={colorMode == "dark" ? "#9CA3AF" : "#6B7280"}
      />
    ),
    title: "change password",
  },
  {
    icon: (
      <MaterialCommunityIcons
        name="account-cog"
        size={24}
        color={colorMode == "dark" ? "#9CA3AF" : "#6B7280"}
      />
    ),
    title: "General",
  },
  {
    icon: (
      <MaterialCommunityIcons
        name="account-cog"
        size={24}
        color={colorMode == "dark" ? "#9CA3AF" : "#6B7280"}
      />
    ),
    title: "Manage Accounts",
  },
  {
    icon: (
      <MaterialCommunityIcons
        name="google-translate"
        size={24}
        color={colorMode == "dark" ? "#9CA3AF" : "#6B7280"}
      />
    ),
    title: "Language",
    end: "english",
  },
  {
    icon: (
      <Feather
        name="link-2"
        size={24}
        color={colorMode == "dark" ? "#9CA3AF" : "#6B7280"}
      />
    ),
    title: "Linked Accounts",
  },
  {
    icon: (
      <MaterialCommunityIcons
        name="account-cog"
        size={24}
        color={colorMode == "dark" ? "#9CA3AF" : "#6B7280"}
      />
    ),
    title: "Disable Accounts",
  },
];
  return (
    <HStack flex={1}>
      {!isSmallScreen && <SidePanel />}
      <Box
        style={[
          styles.container,
          { backgroundColor: colorMode == "dark" ? "#374151" : "#F5F3FF" },
        ]}
        flex={1}
      >
        <View w={isSmallScreen ? "100%" : "90%"} mt={isSmallScreen ? 0 : "12"}>
          <Appbar />
          {console.log(colorMode)}
        </View>
        <Box
          style={
            isSmallScreen
              ? styles.settionOptionsCotainer
              : styles.settingOptionContainerWeb
          }
          bg={colorMode == "dark" ? "#1F2937" : "white"}
          p={5}
          pt={0}
        >
          {settingOptions.map((item, index) => (
            <Pressable key={index}>
              <Flex direction="row" align={"center"} mt={6}>
                <View style={{ width: 25, height: 25 }}>{item.icon}</View>
                <Text
                  fontSize={"lg"}
                  color={colorMode == "dark" ? "#F9FAFB" : "#1F2937"}
                  textTransform={"capitalize"}
                  mx={3}
                >
                  {item.title}
                </Text>
                <Box flex={1}></Box>
                {item.end && (
                  <Text
                    fontSize={"lg"}
                    color="#6B7280"
                    textTransform={"capitalize"}
                  >
                    {item.end}
                  </Text>
                )}
              </Flex>
            </Pressable>
          ))}
        </Box>
        <Box
          bg={colorMode == "dark" ? "#1F2937" : "white"}
          r
          p={5}
          width={"90%"}
          mt={5}
        >
          <HStack space={3} width={"100%"} alignItems={"center"}>
            <Box width={isSmallScreen ? "65%" : isMediumScreen ? "80%" : "85%"}>
              <VStack space={1}>
                <HStack alignItems={"center"}>
                  <View style={{ width: 25, height: 25 }}>
                    <Ionicons
                      name="cloudy-outline"
                      size={24}
                      color={"#6B7280"}
                    />
                  </View>
                  <Text
                    ml={3}
                    fontSize={17}
                    color={colorMode == "dark" ? "#F9FAFB" : "#1F2937"}
                  >
                    Storage
                  </Text>
                </HStack>
                <Progress
                  rounded="0"
                  value={65}
                  borderLeftRadius={0}
                  borderRadius={0}
                  _filledTrack={{
                    bg: "#4C1D95",
                    borderRadius: 0,
                  }}
                />
                <Text color={colorMode == "dark" ? "#F9FAFB" : "#1F2937"}>
                  4 GB of 15 GB used
                </Text>
              </VStack>
            </Box>
            <Box width={isSmallScreen ? "35%" : isMediumScreen ? "20%" : "15%"}>
              <Button
                variant="outline"
                width={"100%"}
                height={50}
                style={{
                  borderColor: colorMode == "dark" ? "#6B7280" : "#4C1D95",
                }}
              >
                <Text color={colorMode == "dark" ? "#6B7280" : "#4C1D95"}>Buy Storage</Text>
              </Button>
            </Box>
          </HStack>
        </Box>
      </Box>
    </HStack>
  );
};


export default Main;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F3FF",
    alignItems: "center",
  },
  settionOptionsCotainer: {
    width: "100%",
  },
  settingOptionContainerWeb: {
    width: "90%",
  },
  storageContainer: {
    marginHorizontal: 20,
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 5,
    marginTop: 25,
  },
  storageLeftContainer: {
    width: "60%",
  },
});
