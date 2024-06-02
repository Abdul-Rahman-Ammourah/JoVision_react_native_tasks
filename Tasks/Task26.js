import React,{Component} from "react";
import { View,Text,Button,StyleSheet } from "react-native";

export default class Task26 extends Component {
    state ={
        IPaddress: 'No address'
    }
    render(){
        return(
            <View>
                <Button title="Get IP"></Button> 
                <Button title="Block IP"></Button>
                <Text>{this.state.IPaddress}</Text>
            </View>
        )

    }
}

const style = StyleSheet.create({
    Buttons:{
        
    },
    textoutput:{
        flex:1,
        justifyContent:1,
        
    }
})