import {
  View,
  SafeAreaView,
  Text,
  Pressable,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";
import React, { useState } from "react";

import tw from "twrnc";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Chat = ({ modalVisible, setModalVisible }) => {
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={[tw`h-full p-2`, { backgroundColor: "#1c1c1c" }]}>
      <KeyboardAvoidingView
        style={tw`flex-1`}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <>
            <ChatHeader close={closeModal} />
            <View style={tw`flex-1`}></View>
            <View
              style={[tw`p-2`, { borderColor: "#2f2f2f", borderTopWidth: 1 }]}
            >
              <Text style={tw`text-gray-300 text-base`}>Send to: Everyone</Text>
              <View
                style={tw`flex flex-row items-center my-1 mt-2 border border-gray-700 p-2 pr-3 rounded-lg`}
              >
                <TextInput
                  style={tw`flex-1 text-lg text-gray-200 pb-2`}
                  placeholder="Tap here to chat"
                  placeholderTextColor="#595859"
                  value={newMessage}
                  onChangeText={(text) => setNewMessage(text)}
                  //   onSubmitEditing={}
                />
                <TouchableOpacity>
                  <FontAwesome
                    name="send"
                    size={18}
                    color={newMessage === "" ? "#efefef" : "#2D8CFF"}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const ChatHeader = ({ close, newText = false }) => (
  <View style={tw`flex-row justify-between px-3 py-2`}>
    <Pressable onPress={close}>
      <Text style={tw`text-white font-medium text-lg`}>Close</Text>
    </Pressable>
    <Text style={tw`text-white font-bold text-xl`}>Chat</Text>
    <TouchableOpacity>
      <Entypo name="bell" size={25} color="#efefef" />
    </TouchableOpacity>
  </View>
);
export default Chat;
