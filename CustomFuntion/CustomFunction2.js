import React,{Component,useEffect, useState} from "react";
import { View,Text, TextInput, StyleSheet } from "react-native";


export default function CustomFunction2 ({SetText}) {
    
    

    return(
        <View>
            <TextInput style={Style.textinput} onChangeText={text => SetText(text)} placeholder="Write here "></TextInput>
        </View>
    )
}
const Style = StyleSheet.create({
    textinput:{
        
        margin: 1,
        borderWidth: 1
    }
})