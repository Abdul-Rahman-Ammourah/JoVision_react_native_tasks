import React,{Component, forwardRef, useImperativeHandle, useState} from "react";
import { View,Text } from "react-native";


const CustomFunction3 = forwardRef((props,ref)=>{
    const [text,settext] = useState("Changable text")

    useImperativeHandle(ref, () => ({
        ChangeText: (newText) => {
            settext(newText)
        }
    }))
    
    return(
        <View>
            <Text>{text}</Text>
        </View>
    )
})

export default CustomFunction3;