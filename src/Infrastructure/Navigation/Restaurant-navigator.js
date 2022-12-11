// this navigation is solely responsible for all the navigation that can occur in the restaurants tab, located in App-navigator.js

import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { Restaurant } from '../../Features/Restaurants/Screens/restaurant-screen';
import { RestaurantDetails } from '../../Features/Restaurants/Screens/restaurant-details';
import { PaystackGateway } from '../../Features/Payment/Screens/PaystackGateway';

const RestaurantStack=createStackNavigator()
const PaymentStack= createStackNavigator();

export const RestaurantNavigator = () => {
    return (
       <RestaurantStack.Navigator screenOptions={{headerShown:false}}>
        <RestaurantStack.Screen name="RestaurantScreen" component={Restaurant} />
        <RestaurantStack.Screen name="RestaurantDetail" component={RestaurantDetails} options={{...TransitionPresets.RevealFromBottomAndroid, ...TransitionPresets.ModalSlideFromBottomIOS}} />
        <PaymentStack.Screen
        name="Payment"
        component={PaystackGateway}
        options={{
          ...TransitionPresets.ScaleFromCenterAndroid,
          headerShown: true,
          headerTitle:"CheckOut Screen",
          title:"CheckOut Screen",
          headerStyle: { backgroundColor: "#A020F0" },
          headerTitleStyle: { color: "#fff" },
          headerBackTitleStyle: { color: "#fff" }
        }}
      />
        </RestaurantStack.Navigator>
    );
}




