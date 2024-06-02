import React,{Component} from "react";
import { View,Text} from "react-native";

export default class CustomClass4 extends Component{
    state = {
        text: ''
    }
    ChangeText = (newtext) => {
        this.setState({text:newtext})
    }
    render(){
        return(
            <View>
                <Text>{this.state.text}</Text>
            </View>
        )
    }
}
