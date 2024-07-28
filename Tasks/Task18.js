import React,{useState,useEffect} from "react";
import {View,Text,ActivityIndicator, StyleSheet} from "react-native";

const Task18 = () => {
    const [Isloading,SetIsloading] = useState(true);
    

    useEffect(() => {
        setTimeout(() => {SetIsloading(false);}, 5000);
     
      }, []);
    return(
    <View style={Style.container}>
        {Isloading ? (
            <>
                <ActivityIndicator size='large' color='#bbbbff' />
                <Text style={Style.text}>Loading...</Text>
            </>
        ):(
            <Text style={Style.text}>Done Loading...</Text>
        )}
        
    </View>
    )
}

const Style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },
    text:{
        fontSize: 20,
        color: 'black',
    }

})

export default Task18;