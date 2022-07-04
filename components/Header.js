import { View, Text } from "react-native";
import React from "react";

import Entypo from "react-native-vector-icons/Entypo";
import tw from "twrnc";

const Header = () => {
  return (
    <View style={tw`flex flex-row items-center justify-between py-3`}>
      <Entypo name="notification" size={30} color="#efefef" />
      <Text style={tw`text-white font-bold text-xl`}>Meet & Chat</Text>
      <Entypo name="new-message" size={30} color="#efefef" />
    </View>
  );
};

export default Header;
