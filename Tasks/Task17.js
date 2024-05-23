import React,{Component,useState} from "react";
import {View,Text,Button,StyleSheet,Alert} from 'react-native';
 
const Task17 = () => {
    const [IsHidden,SetIsHidden] = useState(true);

    const HandelPress = () => {
        SetIsHidden(!IsHidden);
    }
    
    return(

        <View style={style.container}>
            {IsHidden && <Text style={style.text}>Abdul-Rahman Ammourah</Text>}
            <Button title={IsHidden?"Hide":"Show"} onPress={HandelPress} ></Button>
            
        </View>
        
    )
}
const style = StyleSheet.create({
    container: {
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        margin: 10

    }
});

export default Task17;