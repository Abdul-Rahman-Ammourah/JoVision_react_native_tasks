import React,{Component,useState,useEffect} from "react";
import {View,Text,ActivityIndicator, StyleSheet} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const Task18 = () => {
    const [Isloading,SetIsloading] = useState(true);
    

    useEffect(() => {
        const timer = setTimeout(() => {SetIsloading(false);}, 5000);
    
        return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
      }, []);
    return(
    <View>
        
        
        {Isloading && (
            <>
                <ActivityIndicator size='large' color='#00ffff' />
                <Text>Loading...</Text>
            </>
        )}
        
    </View>
    )
}

const Style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',

    }

})

export default Task18;