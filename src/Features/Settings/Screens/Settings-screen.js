import React, { useContext } from "react";
import { List, Avatar } from "react-native-paper";
import { View, StyleSheet, SafeAreaView, Text } from "react-native";
import { FadeInView } from "../../../Components/Animations/FadeAnimation";
import { AuthenticationContext } from "../../../Services/Authentication/Authentication-context";

export const SettingsScreen = ({ navigation, route }) => {
  const { onLogOut, user } = useContext(AuthenticationContext);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.avatarView}>
        <FadeInView duration={2500}>
          <Avatar.Icon size={200} icon="human-handsdown" />
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
            style={{}}
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
