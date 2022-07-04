import React from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";

import tw from "twrnc";

const styles = {
  input: tw`w-full text-lg text-white border-b border-t border-gray-600 p-3`,
};

const StartMeeting = ({
  userName,
  roomID,
  setUserName,
  setRoomID,
  joinRoom,
}) => {
  return (
    <>
      <View style={tw``}>
        <TextInput
          style={styles.input}
          placeholder="Enter Your Name"
          placeholderTextColor="#8F8F8F"
          value={userName}
          onChangeText={(text) => setUserName(text)}
        />
      </View>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Enter Room ID"
          placeholderTextColor="#8F8F8F"
          value={roomID}
          onChangeText={(text) => setRoomID(text)}
        />
      </View>
      <View style={tw`mt-5`}>
        <TouchableOpacity
          onPress={joinRoom}
          style={[
            { backgroundColor: "#2D8CFF", borderRadius: 15 },
            tw`w-full flex items-center px-5 py-3`,
          ]}
        >
          <Text style={tw`text-white font-semibold text-lg`}>Start</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default StartMeeting;
