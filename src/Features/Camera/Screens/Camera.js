import { Camera, CameraType } from "expo-camera";
import React, { useState, useRef, useContext } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  Pressable,
} from "react-native";
import * as ImagePicker from 'expo-image-picker'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "../../../Services/Authentication/Authentication-context";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export function CameraScreen({ navigation }) {
  const { user } = useContext(AuthenticationContext);
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [modalVisible, setModalVisible] = useState(false);
  const cameraRef = useRef();

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                MealsToGo requires permission to access the camera
              </Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => requestPermission()}
              >
                <Text style={styles.textStyle}>Grant permission</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    );

    //   <View style={styles.container}>
    //   <Text style={{ textAlign: "center" }}>
    //     MealsToGo need your permission to show the camera
    //   </Text>
    //   <Button onPress={requestPermission} title="grant permission" />
    // </View>
  }

  const takePicture = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      const photoValue = photo.uri;
      console.log(photoValue);
      navigation.navigate("settings");
      AsyncStorage.setItem(`${user.uid}-photo`, photoValue);
    }
  };

  const toggleCameraType=() =>{
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }


  const pickImage=async()=>{
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if(!result.canceled){
      const galleryPhoto=result.assets[0].uri
      AsyncStorage.setItem(`${user.uid}-galleryphoto`,galleryPhoto );
      navigation.goBack()
    }
  }
  
  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        type={type}
        ref={(camera) => (cameraRef.current = camera)}
      >
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={toggleCameraType}>
            <MaterialCommunityIcons
              name="camera-party-mode"
              size={30}
              color={"#A020F0"}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.cameraButtonContainer}>
          <TouchableOpacity onPress={takePicture}>
            <MaterialCommunityIcons
              name="camera-iris"
              color={"#A020F0"}
              size={40}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.galleryButtonContainer}>
          <TouchableOpacity onPress={pickImage}>
            <MaterialCommunityIcons
              name="file-image"
              color={"#A020F0"}
              size={30}
            />
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    top: "90%",
    left: "20%",
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
    backgroundColor: "#A020F0",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: "black",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },

  buttonClose: {
    backgroundColor: "#A020F0",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  cameraButtonContainer: {
    top: "85%",
    left: "45%",
  },
  galleryButtonContainer:{
    top: "80%",
    left: "70%",
  }
});
