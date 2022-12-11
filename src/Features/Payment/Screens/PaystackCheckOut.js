import React,{useContext} from "react"
import { View } from "react-native";
import { Paystack } from "react-native-paystack-webview";
import { PaymentState } from "../../../Services/Payment/PaymentStateProvider";
export const PaystackCheckOut=({navigation})=>{
    const {price}=useContext(PaymentState)
    return(
      <View style={{ flex: 1 }}>
      <Paystack
        paystackKey="pk_test_4345d3165483814deea06c7622f13ecb59693e21"
        amount={price*700}
        billingEmail="Mealstogo@food.com"
        billingName="MealsToGo"
        billingMobile="08187996286"
        activityIndicatorColor="#A020F0"
        onCancel={(e) => {
          navigation.goBack()
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