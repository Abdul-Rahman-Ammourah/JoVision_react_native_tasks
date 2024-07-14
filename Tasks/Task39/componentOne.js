import React from "react";
import { View, Text, TextInput } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { setText } from "./setText";

export default function ComponentOne() {
    const text = useSelector((state) => state.setText.text);
    const dispatch = useDispatch();
    
    return (
        <View>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={(text) => dispatch(setText(text))}
                value={text}
            />
            <Text>Component One Says: {text}</Text>
        </View>
    );
}
