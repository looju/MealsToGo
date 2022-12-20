import React, { useContext } from "react";
import { View, Alert } from "react-native";
import { Paystack } from "react-native-paystack-webview";
import { PaymentState } from "../../../Services/Payment/PaymentStateProvider";
import { StatsState } from "../../../Services/Stats/StatsStateProvider";
export const PaystackCheckOut = ({ navigation, route }) => {
  const { price } = useContext(PaymentState);
  const { data, addToData,setData } = useContext(StatsState);
  const { name } = route.params;
  return (
    <View style={{ flex: 1 }}>
      <Paystack
        paystackKey="pk_test_4345d3165483814deea06c7622f13ecb59693e21"
        amount={price * 700}
        billingEmail="Mealstogo@food.com"
        billingName="MealsToGo"
        billingMobile="08187996286"
        activityIndicatorColor="#A020F0"
        onCancel={(e) => {
          navigation.goBack();
          console.log(e);
        }}
        onSuccess={(res) => {
          Alert.alert(
            "Success!",
            `Payments successfully made. Your ref number is ${res.transactionRef.trxref}`,
            [{ text: "OK" }]
          );
          navigation.goBack();
          setData((data)=>[...data,{ x: 1, y:1, label: name }])
          console.log(res);
        }}
        channels={["card", "ussd"]}
        autoStart={true}
      />
    </View>
  );
};
