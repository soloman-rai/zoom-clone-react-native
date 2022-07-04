import {
  View,
  SafeAreaView,
  Alert,
  TouchableOpacity,
  Text,
  Modal,
} from "react-native";
import React, { useState, useEffect } from "react";

import tw from "twrnc";
import { io } from "socket.io-client";
import { Camera } from "expo-camera";
import { useNavigation } from "@react-navigation/native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import StartMeeting from "./StartMeeting";
import Chat from "./Chat";

var socket;

const tileItems = [
  {
    label: "Mute",
    icon: "microphone",
  },
  {
    label: "Stop Video",
    icon: "video-camera",
  },
  {
    label: "Share",
    icon: "upload",
  },
  {
    label: "Participants",
    icon: "group",
  },
];

const MeetingRoom = () => {
  const [userName, setUserName] = useState();
  const [roomID, setRoomID] = useState();
  const [roomUsers, setRoomUsers] = useState();
  const [meetingStarted, setMeetingStarted] = useState(false);
  const [seeChat, setSeeChat] = useState(false);
  const navigation = useNavigation();

  // roomUsers && console.log(roomUsers);

  useEffect(() => {
    const API_URL = "http://localhost:3001";
    socket = io(`${API_URL}`);

    socket.on("connection", () => console.log("🚀"));
    socket.on("all-users", (users) => {
      setRoomUsers(users.filter((user) => user.userName !== userName));
      // console.log(users);
    });
  }, [socket]);

  useEffect(() => {
    if (!roomID) return;
    if (meetingStarted) {
      navigation.setOptions({
        headerTitle: `Room ${roomID}`,
      });
    }
  }, [roomID, meetingStarted, navigation]);

  const startCamera = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    if (status === "granted") {
      setMeetingStarted(true);
    } else {
      Alert.alert("Camera Access Denied!");
    }
  };

  const joinRoom = () => {
    if (userName && roomID) {
      // console.log("Joining", userName, roomID);
      socket.emit("join-room", { userName, roomID });
      startCamera();
    }
  };

  return (
    <View
      style={[
        { backgroundColor: "#1c1c1c", flex: 1 },
        !meetingStarted && tw`px-5`,
      ]}
    >
      {meetingStarted ? (
        <SafeAreaView style={tw`h-full bg-black`}>
          <Modal
            transparent={false}
            animationType="slide"
            presentationStyle="fullscreen"
            visible={seeChat}
            onRequestClose={() => setSeeChat(false)}
          >
            <Chat modalVisible={seeChat} setModalVisible={setSeeChat} />
          </Modal>

          <View style={tw`flex-1 justify-center`}>
            <View style={roomUsers?.length > 0 && tw`flex-row flex-wrap`}>
              <Camera
                type={"front"}
                style={[
                  roomUsers?.length > 0 ? tw`w-48 h-48` : tw`w-full h-128`,
                  { borderColor: "gray", borderWidth: 1 },
                ]}
              />
              {roomUsers &&
                roomUsers.map((user, index) => (
                  <View
                    key={index}
                    style={[
                      tw`w-48 h-48 justify-center items-center`,
                      { borderColor: "gray", borderWidth: 1 },
                    ]}
                  >
                    <Text style={tw`text-white text-xl font-semibold`}>
                      {user.userName}
                    </Text>
                  </View>
                ))}
            </View>
          </View>

          <View style={tw`flex-row justify-around px-1 py-2`}>
            {tileItems.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={tw`items-center justify-center mt-3`}
              >
                <FontAwesome name={item.icon} size={24} color="#efefef" />
                <Text style={tw`text-white mt-1`}>{item.label}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity
              onPress={() => setSeeChat(true)}
              style={tw`items-center justify-center mt-3`}
            >
              <FontAwesome name="comment" size={24} color="#efefef" />
              <Text style={tw`text-white mt-1`}>Chat</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      ) : (
        <StartMeeting
          userName={userName}
          setUserName={setUserName}
          roomID={roomID}
          setRoomID={setRoomID}
          joinRoom={joinRoom}
        />
      )}
    </View>
  );
};

export default MeetingRoom;
