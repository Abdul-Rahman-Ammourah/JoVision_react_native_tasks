import React,{Component} from "react";
import { View,Text,Button, TextInput } from "react-native";
import CustomClass3 from "../CustomClass/CustomClass3";
export default class Task23 extends Component {
    state = {
        text:"Changable text"
    }
    Settext =(text) => {
        this.setState({text})
    }
    render(){
        return(
            
            <View>
                <Text>{this.state.text}</Text>
                <CustomClass3 settext={this.Settext}></CustomClass3>
            </View>

            
        )
    }
} 