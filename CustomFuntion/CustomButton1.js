import React from "react";
import { Pressable,StyleSheet,Text } from "react-native";


export default C1Button = ({onPress = () => {null},title = "Button",style,styletext}) => {
    return(
        <Pressable onPress={onPress} style={[innerstyle.button,style ]} >
            <Text style={[innerstyle.text, styletext]} >{title}</Text>
        </Pressable>
    )
}
const innerstyle = StyleSheet.create({
    button: {
        backgroundColor: 'blue',
        width: 100,
        height: 50,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: 15,
    },
})