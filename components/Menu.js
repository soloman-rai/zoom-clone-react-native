import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

import tw from "twrnc";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const menuItems = [
  {
    id: 1,
    icon: "video-camera",
    title: "New Meeting",
    customColor: "#DD6B20",
    promptInit: true,
  },
  { id: 2, icon: "plus-square", title: "Join" },
  { id: 3, icon: "calendar", title: "Schedule" },
  { id: 4, icon: "upload", title: "Share Screen" },
];

const Menu = () => {
  const navigation = useNavigation();

  const initializeMeeting = () => {
    navigation.navigate("MeetingRoom");
  };

  return (
    <View
      style={[
        styles.container,
        tw`flex-row items-center justify-between mt-5 pb-3`,
      ]}
    >
      {menuItems.map((item) => (
        <View key={item.id} style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => item.promptInit && initializeMeeting()}
            style={[
              styles.iconButton,
              tw`items-center justify-center`,
              item.customColor && { backgroundColor: item.customColor },
            ]}
          >
            <FontAwesome name={item.icon} size={23} color="#efefef" />
          </TouchableOpacity>
          <Text style={tw`text-white pt-2 font-medium`}>{item.title}</Text>
        </View>
      ))}
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    borderBottomColor: "#1f1f1f",
    borderBottomWidth: 1,
  },
  buttonContainer: {
    alignItems: "center",
    // flex: 1,
  },
  iconButton: {
    width: 50,
    height: 50,
    backgroundColor: "#2D8CFF",
    borderRadius: 15,
  },
});
