import React, { useContext } from "react";
import { View, Text } from "react-native";
import { PaymentState } from "../../../Services/Payment/PaymentStateProvider";
import { Paystack } from "react-native-paystack-webview";
import LottieView from "lottie-react-native";

export const PaystackGateway = (route, navigation) => {
  const { noPayment, price } = useContext(PaymentState);
  return (
    <View style={{ flex: 1 }}>
      {!noPayment ? (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#000",
          }}
        >
          <LottieView
            source={require("../../../../assets/transaction.json")}
            style={{ width: 200, height: 200, marginVertical: 20 }}
            autoPlay
            loop
          />
          <View>
            <Text style={{color:"#fff", fontFamily:"Lato_400Regular", fontSize:15}}>No ongoing payment!</Text>
          </View>
        </View>
      ) : (
        <View style={{ flex: 1 }}>
          <Paystack
            paystackKey="pk_test_4345d3165483814deea06c7622f13ecb59693e21"
            amount={price}
            billingEmail="omofade2019.com"
            billingName="Omofade Oluwaloju"
            billingMobile="08187996286"
            activityIndicatorColor="#A020F0"
            onCancel={(e) => {
              navigation.navigate("RestaurantDetail");
              console.log(e)
            }}
            onSuccess={(res) => {
              alert("Successful",`Payments successfully made!. Your ID number is ${res}`)
              console.log(res)
            }}
            channels={["card","ussd"]}
          />
        </View>
      )}
    </View>
  );
};
