import React, { useContext } from "react";
import { List } from "react-native-paper";
import { View, StyleSheet, SafeAreaView, Text } from "react-native";
import { AuthenticationContext } from "../../../Services/Authentication/Authentication-context";


export const SettingsScreen = ({ navigation,route }) => {
  const { onLogOut } = useContext(AuthenticationContext);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <List.Section>
          <List.Item
            title="Favourites"
            description="View your favourite restaurants"
            left={() => <List.Icon icon="heart" color="#A020F0"/>}
            onPress={() => {
            }}
            style={{}}
            titleStyle={{fontSize:18, fontFamily:"Oswald_400Regular"}}
          />
          <List.Item
            title="Logout"
            description="Sign out from MealsToGo"
            left={() => <List.Icon icon="logout" color="#A020F0"/>}
            onPress={onLogOut}
            style={{}}
            titleStyle={{fontSize:18, fontFamily:"Oswald_400Regular"}}
          />
        </List.Section>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
