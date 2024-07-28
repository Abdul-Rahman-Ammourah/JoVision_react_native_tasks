import React,{Component,useEffect} from "react";
import { View,Text } from "react-native";


export default function CustomFunction1 () {
    useEffect(() => {
        console.log("CustomFunction Is loading....")

        return() =>{
            console.log("CustomFunction Is Unloading.....")
        }
    },)
    return(
        <View>
            <Text>Hello world from the CustomFunction!!</Text>
        </View>
    )
}