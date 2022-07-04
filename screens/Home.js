import { View, SafeAreaView } from "react-native";
import React from "react";

import tw from "twrnc";

import Header from "../components/Header";
import Searchbar from "../components/SearchBar";
import Menu from "../components/Menu";
import Contacts from "../components/Contacts";

const Home = () => {
  return (
    <View style={[{ backgroundColor: "#1c1c1c" }, tw`p-5`]}>
      <SafeAreaView style={tw`h-full`}>
        <Header />
        <Searchbar />
        <Menu />
        <Contacts />
      </SafeAreaView>
    </View>
  );
};

export default Home;
