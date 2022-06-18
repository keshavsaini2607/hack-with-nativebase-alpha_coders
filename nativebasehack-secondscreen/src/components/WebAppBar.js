import React from 'react';
import {Box, HStack, Icon, IconButton, Image, StatusBar, Text, useColorMode, View} from 'native-base';
import { Colors } from '../constant';
import { Entypo } from '@expo/vector-icons';
const profilePic = require("../assets/profile-image.png");


const WebAppBar = () => {
  const { colorMode } = useColorMode();

  return (
    <View>
      <StatusBar barStyle="light-content" />
      <Box safeAreaTop />
      <HStack
        px="1"
        py="3"
        bg={colorMode == "dark" ? "#1F2937" : "white"}
        justifyContent="space-between"
        alignItems="center"
        w="100%"
      >
        <HStack alignItems="center">
          <IconButton
            icon={
              <Icon size="lg" as={Entypo} name="menu" color={Colors.DARKBACK} />
            }
          />
          <Text fontSize="20" fontWeight="bold">
            <Text color={"#8B5CF6"}>HackWith</Text>
            <Text color={colorMode == "dark" ? "white" : "black"}>NativeBase</Text>
          </Text>
        </HStack>
        <Image source={profilePic} alt="" w={30} h={30} mr={4}/>
      </HStack>
    </View>
  );
};

export default WebAppBar;
