import { Dimensions, StyleSheet } from "react-native";
import React from "react";
import Appbar from "../components/Appbar";
import {
  Box,
  Button,
  Flex,
  Icon,
  Image,
  Text,
  useBreakpointValue,
  View,
  ScrollView,
} from "native-base";
import { Colors } from "../constant";
import Tabs from "../components/Tabs";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";

const Main = () => {
  const { colors, dark } = useTheme();
  const imageWidth = useBreakpointValue({
    base: Dimensions.get("window").width - 50,
    md: 500,
    // md: 350
  });

  const imageHeight = useBreakpointValue({
    base: 250,
    md: 600,
    lg: 500,
  });

  const flexDir = useBreakpointValue({
    base: "column",
    lg: "row",
  });

  const containerStyle = useBreakpointValue({
    base: styles.content,
    lg: [
      styles.content,
      {
        width: Dimensions.get("screen").width - 250,
        justifyContent: "space-evenly",
        alignSelf: "center",
      },
    ],
  });

  const flex = useBreakpointValue({
    lg: 0.5,
  });

  const mainContainerStyle = useBreakpointValue({
    base: styles.mobile,
    lg: [styles.desktop, { justifyContent: "center" }],
  });

  const description = useBreakpointValue({
    lg: "1rem",
  });

  const tabsFlex = useBreakpointValue({
    lg: "column-reverse",
  });

  const display = useBreakpointValue({
    base: "none",
    lg: "flex",
  });

  return (
    <View style={[mainContainerStyle, {backgroundColor: dark ? Colors.SDARK : Colors.TERTIARY}]}>
      <Flex
        style={[styles.topBar, { display: display }]}
        direction="row"
        alignItems="center"
      >
        <Icon as={Ionicons} name="arrow-back" size="lg" color={colors.text} />
        <Text fontSize="lg" color={colors.text}>Body Suit</Text>
      </Flex>
      <Flex direction={flexDir} style={containerStyle} backgroundColor={dark ? colors.notification : Colors.BACKGROUND} justifyContent="center">
        <View
          style={[styles.imageContainer, { flex: flex }]}
          justifyContent="flex-start"
          backgroundColor={dark ? colors.card : Colors.TERTIARY}
        >
          <Image
            source={require("../assets/Image.png")}
            width={imageWidth}
            height={imageHeight}
            alt="child__image"
            borderRadius={5}
          />
        </View>
        <View
          style={{ flex: flex, paddingHorizontal: description }}
          justifyContent="flex-start"
        >
          <Flex direction="row" justifyContent="space-between" marginTop="4">
            <Box>
              <Text fontSize="lg" bold color={colors.text}>
                Baby Suit
              </Text>
            </Box>
            <Box>
              <Flex direction="row" alignItems="center">
                <Icon
                  as={Entypo}
                  name="star"
                  size="md"
                  color={Colors.YELLOW}
                  marginRight={1}
                />
                <Text bold fontSize="lg" color={colors.text}>
                  4.9
                </Text>{" "}
                <Text fontSize="lg" color={Colors.SECONDARY}>
                  (120)
                </Text>
              </Flex>
            </Box>
          </Flex>
          <Box>
            <Text fontSize="lg" color={Colors.SECONDARY}>
              Mother Care
            </Text>
          </Box>
          <Box>
            <Text fontSize="lg" bold color={colors.text}>
              ₹500
            </Text>
          </Box>
          <Flex direction="row" justifyContent="space-between" marginTop="3">
            <Text color={colors.text}>
              Select Size <Text color={Colors.SECONDARY}>(Age Group)</Text>
            </Text>
            <Text color={Colors.PRIMARY}>Size Chart</Text>
          </Flex>
          <Flex direction="row" marginTop="3">
            <Box style={styles.box}>
              <Text>New Born</Text>
            </Box>
            <Box style={styles.box}>
              <Text>Tiny Baby</Text>
            </Box>
            <Box style={styles.box}>
              <Text>0-3 M</Text>
            </Box>
          </Flex>
          <Flex flexDirection={tabsFlex}>
            <Box marginTop={5}>
              <Tabs />
            </Box>
            <Flex
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              marginTop={10}
            >
              <Box style={[styles.box, {backgroundColor: colors.card}]}>
                <Image
                  source={require("../assets/heart.png")}
                  style={styles.icon}
                  alt="heart__image"
                />
              </Box>
              <Button backgroundColor={Colors.PRIMARY} flex={1}>
                Continue
              </Button>
            </Flex>
          </Flex>
        </View>
      </Flex>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  imageContainer: {
    // backgroundColor: Colors.TERTIARY,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    alignSelf: "center",
    borderRadius: 5,
  },
  content: {
    padding: 20,
  },
  box: {
    backgroundColor: Colors.TERTIARY,
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  icon: {
    width: 20,
    height: 20,
  },
  desktop: {
    backgroundColor: Colors.TERTIARY,
    flex: 1,
  },
  mobile: {
    backgroundColor: "#FFFFFF",
  },
  topBar: {
    width: Dimensions.get("screen").width - 250,
    alignSelf: "center",
    marginBottom: 10,
  },
});
