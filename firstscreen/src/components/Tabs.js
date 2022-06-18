import { StyleSheet, Pressable } from "react-native";
import React from "react";
import { Box, FlatList, Flex, Icon, Image, Text, View } from "native-base";
import { Colors } from "../constant";
import { Entypo } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";

const Description = () => {
  const {colors} = useTheme()
  return (
    <Box>
      <Text color={colors.text}>
        Yellow bodysuit, has a round neck with envelope detail along the
        shoulder, short sleeves and snap button closures along the crotch.
        Yellow bodysuit, has a round neck with envelope detail along the
        shoulder, short sleeves and snap button closures along the crotch.Yellow
        bodysuit, has a round neck with envelo
      </Text>
    </Box>
  );
};

const Review = () => {
  const {colors} = useTheme()

  return (
    <Flex direction="row">
      <Box style={styles.avatar} backgroundColor={colors.background}></Box>
      <Flex>
        <Text fontSize="xs" color={colors.text}>Jhon Doe</Text>
        <Text fontSize="xs" color={colors.text}>Good project worth selecting for a win</Text>
        <Flex direction="row">
          <Icon
            as={Entypo}
            name="star"
            size="md"
            color={Colors.YELLOW}
            marginRight={1}
          />
          <Icon
            as={Entypo}
            name="star"
            size="md"
            color={Colors.YELLOW}
            marginRight={1}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

const Tabs = () => {
  const {colors} = useTheme()

  const [active, setActive] = React.useState("desc");
  const [routes] = React.useState([
    { key: "desc", title: "Description" },
    { key: "rev", title: "Reviews" },
  ]);

  return (
    <View>
      <FlatList
        data={routes}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => setActive(item.key)}
            style={[styles.tabs, active == item.key && styles.active]}
          >
            <Text key={item.key} fontSize="md" color={colors.text}>
              {item.title}
            </Text>
          </Pressable>
        )}
        horizontal
      />
      <View style={{ marginTop: 5 }} />
      {active === "desc" ? <Description /> : <Review />}
    </View>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  tabs: {
    marginRight: 20,
  },
  active: {
    borderBottomColor: Colors.PRIMARY,
    borderBottomWidth: 4,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  avatar: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginRight: 10
  }
});
