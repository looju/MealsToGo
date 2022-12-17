import React, { useContext, useState, useEffect } from "react";
import { List, Avatar } from "react-native-paper";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FadeInView } from "../../../Components/Animations/FadeAnimation";
import { AuthenticationContext } from "../../../Services/Authentication/Authentication-context";


export const SettingsScreen = ({ navigation, route }) => {
  const { onLogOut, user } = useContext(AuthenticationContext);
  const [photo, setPhoto] = useState(null);

  const getUserPicture = async (user) => {
    const profilePhoto = AsyncStorage.getItem(`${user.uid}-photo`);
    setPhoto(profilePhoto);
  };

  const getUserGalleryPicture=async (user) => {
    const galleryProfilePhoto = AsyncStorage.getItem(`${user.uid}-galleryphoto`);
    setPhoto(galleryProfilePhoto);
  };

  useEffect(() => {
    getUserPicture(user);
  }, [user]);

  useEffect(() => {
    getUserGalleryPicture(user);
  }, [user]);



  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.avatarView}>
        <FadeInView duration={2500}>
          <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
            {photo && (
                 <Avatar.Image
                 size={180}
                 source={{ uri: photo }}
                 backgroundColor="#A020F0"
               />
            )}
            {!photo && <Avatar.Icon size={200} icon="human" />}
          </TouchableOpacity>
        </FadeInView>
        <View style={styles.emailView}>
          <Text style={{ color: "#fff" }}>Email@email.com</Text>
        </View>
      </View>
      <View>
        <List.Section>
          <List.Item
            title="Favourites"
            description="View your favourite restaurants"
            left={() => <List.Icon icon="heart" color="#A020F0" />}
            onPress={() => navigation.navigate("settingsFavourites")}
            titleStyle={{
              fontSize: 18,
              fontFamily: "Oswald_400Regular",
              color: "#fff",
            }}
          />
          <List.Item
            title="Logout"
            description="Sign out from MealsToGo"
            left={() => <List.Icon icon="logout" color="#A020F0" />}
            onPress={onLogOut}
            style={{}}
            titleStyle={{
              fontSize: 18,
              fontFamily: "Oswald_400Regular",
              color: "#fff",
            }}
          />
        </List.Section>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  avatarView: {
    marginTop: 40,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  emailView: {
    paddingTop: 10,
  },
});
