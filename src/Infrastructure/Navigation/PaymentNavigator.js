import React from "react";

import { PaystackGateway } from "../../Features/Payment/Screens/PaystackGateway";
import { PaymentStateProvider } from "../../Services/Payment/PaymentStateProvider";
const PaymentStack = createStackNavigator();

export const PaymentNavigator = () => {
  return (
    <PaymentStateProvider>
    <PaymentStack.Navigator screenOptions={{ headerShown: false }}>
      <PaymentStack.Screen
        name="paystack"
        component={PaystackGateway}
        options={{
          ...TransitionPresets.ModalFadeTransition,
          ...TransitionPresets.ModalSlideFromBottomIOS,
        }}
      />
    </PaymentStack.Navigator>
    </PaymentStateProvider>
  );
};
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";