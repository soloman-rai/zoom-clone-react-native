import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

import tw from "twrnc";
import AntDesign from "react-native-vector-icons/AntDesign";

const contactItems = [
  {
    isStarred: true,
  },
  {
    name: "John Doe",
    photo: require("../assets/client-1.jpg"),
  },
  {
    name: "Emily Gray",
    photo: require("../assets/client-2.jpg"),
  },
  {
    name: "Sarah Jones",
    photo: require("../assets/client-3.jpg"),
  },
];

const Contacts = () => {
  return (
    <View>
      {contactItems.map((contact, index) => (
        <View key={index} style={tw`flex-row items-center mt-5`}>
          <View
            style={[
              {
                backgroundColor: "#333333",
                ...styles.contactWrap,
              },
              tw`items-center justify-center`,
            ]}
          >
            {contact.isStarred ? (
              <AntDesign name="star" size={30} color="#efefef" />
            ) : (
              <Image source={contact.photo} style={styles.contactWrap} />
            )}
          </View>
          <Text style={tw`text-white text-lg pl-3`}>
            {contact.isStarred ? "Starred" : contact.name}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default Contacts;

const styles = StyleSheet.create({
  contactWrap: {
    width: 55,
    height: 55,
    borderRadius: 20,
  },
});
