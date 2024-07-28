import React,{Component} from "react";
import { View,Text,Button } from "react-native";
import CustomFunction2 from "../CustomFuntion/CustomFunction2_Task22";
export default class Task22 extends Component {
    state = {
        text:"Some Changable Text"
    }
    SetText = (props) => {
        this.setState({text:props})
    }
    render(){
        return(
            
            <View>
                <Text>{this.state.text}</Text>
                <CustomFunction2 SetText={this.SetText}></CustomFunction2>
            </View>

            
        )
    }
}