import React from 'react';
import {View,Text, StyleSheet, ImageBackground} from 'react-native';
import { ButtonComponents } from '../Components/ButtonComponents';

export const AccountScreen = () => {
    return (
           <ImageBackground
           resizeMode='cover'
           source={require('../../../../assets/newhome.jpg')}
           style={styles.container}
           >
            <View style={styles.buttonContainer}>
             <ButtonComponents name={"Login"} icon={"login"}/>
             <ButtonComponents name={"Register"} icon={"account-lock-open-outline"}/>
            </View>

           </ImageBackground>
        
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    buttonContainer:{
        width:150,
        height:150,
        borderRadius:5,
        backgroundColor:"rgba(225,225,225,0.9)",
        marginTop:350,
        marginLeft:130,
        justifyContent:"space-evenly"
    }
})


