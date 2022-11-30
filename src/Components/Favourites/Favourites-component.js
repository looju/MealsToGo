import React,{useContext} from 'react';
import { TouchableOpacity } from 'react-native';
import {View, StyleSheet} from 'react-native';
import {AntDesign} from "@expo/vector-icons"

import { FavouritesContext } from '../../Services/Favourites/Favourites-context';

export const FavouritesComponent = ({restaurant}) => {
     const {favourites,addToFavourites, removeFromFavourites}=useContext(FavouritesContext);
    return (
        <TouchableOpacity style={{top:25, right:25,position:"absolute", zIndex:9}}>
        <AntDesign name='hearto' size={24} color="red"/>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({})


