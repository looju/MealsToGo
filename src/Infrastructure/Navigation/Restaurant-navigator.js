// this navigation is solely responsible for all the navigation that can occur in the restaurants tab, located in App-navigator.js

import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { Restaurant } from '../../Features/Restaurants/Screens/restaurant-screen';
import { RestaurantDetails } from '../../Features/Restaurants/Screens/restaurant-details';

const RestaurantStack=createStackNavigator()

export const RestaurantNavigator = () => {
    return (
       <RestaurantStack.Navigator screenOptions={{headerShown:false}}>
        <RestaurantStack.Screen name="RestaurantScreen" component={Restaurant} />
        <RestaurantStack.Screen name="RestaurantDetail" component={RestaurantDetails} options={{...TransitionPresets.RevealFromBottomAndroid, ...TransitionPresets.ModalSlideFromBottomIOS}} />
        </RestaurantStack.Navigator>
    );
}

const styles = StyleSheet.create({})


