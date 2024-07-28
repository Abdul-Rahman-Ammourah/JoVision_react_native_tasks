import React,{useState} from "react";
import {View,Text,Button,StyleSheet} from 'react-native';
 
const Task16 = () => {
    const [IsHidden,SetIsHidden] = useState(true);

    const HandlePress = () => {
        SetIsHidden(!IsHidden);
    }
    
    return(

        <View style={style.container}>
            {IsHidden && <Text style={style.text}>Abdul-Rahman Ammourah</Text>}
            <Button title="Show" onPress={HandlePress} ></Button>
            
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
        margin: 20

    }
});

export default Task16;