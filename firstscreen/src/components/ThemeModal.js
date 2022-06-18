import { View } from "react-native";
import React, { useState } from "react";
import { Flex, Modal, Switch, Text } from "native-base";
import { EventRegister } from "react-native-event-listeners";
import { useTheme } from "@react-navigation/native";
import { Colors } from "../constant";

const ThemeModal = ({ showModal, hideModal }) => {
  const {colors, dark} = useTheme()
  const [darkMode, setDarkMode] = useState(false);
  return (
    <Modal isOpen={showModal} onClose={hideModal}>
      <Modal.Content>
        <Modal.CloseButton />
        <Modal.Header backgroundColor={dark ? Colors.XDark : Colors.BACKGROUND}>
          <Text color={colors.text}>Change App Theme</Text>
        </Modal.Header>
        <Modal.Body backgroundColor={dark ? Colors.SDARK : Colors.BACKGROUND}>
          <Flex
            direction="row"
            alignItems="center"
            justifyContent="space-around"
          >
            <Text color={colors.text}>Light</Text>
            <Switch
              offTrackColor="orange.100"
              onTrackColor="orange.200"
              onThumbColor="orange.500"
              offThumbColor="orange.50"
              value={darkMode}
              onValueChange={(value) => {
                setDarkMode(value);
                EventRegister.emit("changeAppTheme", value);
              }}
            />
            <Text color={colors.text}>Dark</Text>
          </Flex>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
};

export default ThemeModal;
