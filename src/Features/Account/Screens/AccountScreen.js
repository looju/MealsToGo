import React from 'react';
import {View,Text, StyleSheet, ImageBackground} from 'react-native';

export const AccountScreen = () => {
    return (
           <ImageBackground
           resizeMode='cover'
           source={require('../../../../assets/newhome.jpg')}
           style={styles.container}
           >
            <View style={styles.buttonContainer}>
           
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
        backgroundColor:"rgba(225,225,225,0.9)",
        marginTop:300,
        marginLeft:130
    }
})


