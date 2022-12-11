import React, { useContext } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { View, Text, TouchableOpacity } from "react-native";
import { PaymentState } from "../../../Services/Payment/PaymentStateProvider";
import { Paystack } from "react-native-paystack-webview";
import { List } from "react-native-paper";
import LottieView from "lottie-react-native";
import { RestaurantsContext } from "../../../Services/Restaurants/Restaurant-context";

export const PaystackGateway = (route, navigation) => {
  const { noPayment, price } = useContext(PaymentState);

  function PaymentCheckOut(){
    return(
      <View style={{ flex: 1 }}>
      <Paystack
        paystackKey="pk_test_4345d3165483814deea06c7622f13ecb59693e21"
        amount={price}
        billingEmail="Mealstogo@food.com"
        billingName="MealsToGo"
        billingMobile="08187996286"
        activityIndicatorColor="#A020F0"
        onCancel={(e) => {
          navigation.navigate("RestaurantDetail");
          console.log(e);
        }}
        onSuccess={(res) => {
          alert(
            "Successful",
            `Payments successfully made!. Your ID number is ${res}`
          );
          console.log(res);
        }}
        channels={["card", "ussd"]}
        autoStart={true}
      />
    </View>
    )
   
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          height: 150,
        }}
      >
        <LottieView
          style={{ width: 200, height: 200, marginVertical: 20 }}
          source={require("../../../../assets/transaction.json")}
          autoPlay
          loop
        />
      </View>
      <View style={{ paddingTop: 50 }}>
        <List.Section>
          <List.Item
            title="Restaurant Name"
            description="res"
            left={() => <List.Icon icon="food" color="#A020F0" />}
            titleStyle={{
              fontSize: 18,
              fontFamily: "Lato_400Regular",
              color: "#fff",
            }}
          />
          <List.Item
            title="Price (in $)"
            description={price}
            left={() => <List.Icon icon="cash-100" color="#A020F0" />}
            titleStyle={{
              fontSize: 18,
              fontFamily: "Lato_400Regular",
              color: "#fff",
            }}
          />
          <List.Item
            title="Estimated delivery time"
            description="15 minutes"
            left={() => <List.Icon icon="bike-fast" color="#A020F0" />}
            titleStyle={{
              fontSize: 18,
              fontFamily: "Lato_400Regular",
              color: "#fff",
            }}
          />
        </List.Section>
        <View>
          <TouchableOpacity
            onPress={()=>alert("hello")}
          >
            <View
              style={{
                backgroundColor: "#A020F0",
                width: 300,
                height: 30,
                marginTop:50,
                borderRadius: 10,
                left: 50,
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontFamily: "Griffy_400Regular",
                  fontSize: 20,
                }}
              >
                Proceed with payment
              </Text>
              <View
                style={{
                  paddingLeft: 10,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <MaterialCommunityIcons
                  name="cash-multiple"
                  color="white"
                  size={30}
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
