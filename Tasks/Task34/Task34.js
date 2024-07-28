import React,{useEffect} from "react";
import { View, Text } from "react-native";
import useCurrentTime from "./useCurrentTime";

export default function task34() {
    useEffect(() => {
        return () => {
            clearInterval();
        };
    }, []);
    const { time,date } = useCurrentTime();
    return (
        <View>
            <Text>{time + '  '+ date}</Text>
        </View>
    );
}