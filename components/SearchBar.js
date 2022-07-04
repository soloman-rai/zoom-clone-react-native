import { View, Text } from "react-native";
import React from "react";

import tw from "twrnc";
import Fontisto from "react-native-vector-icons/Fontisto";
// import { SearchBar } from "@rneui/themed";

const Searchbar = () => {
  return (
    <View
      style={[
        { backgroundColor: "#333333", borderRadius: 10 },
        tw`flex-row items-center h-10 px-2`,
      ]}
    >
      <Fontisto name="search" size={20} color="#858585" />
      <Text style={{ color: "#858585", paddingLeft: 10, fontSize: 20 }}>
        Search
      </Text>
    </View>
  );
};

export default Searchbar;
