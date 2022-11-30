import {SafeAreaView,Platform } from "react-native";

const ios=Platform.OS==='ios'
export const SafeArea=()=>{
    return (
    <SafeAreaView style={{flex:1}}>

    </SafeAreaView>
    ) 
}