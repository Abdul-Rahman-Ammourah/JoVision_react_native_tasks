import React,{Component} from "react";
import { View,Text,TextInput,StyleSheet } from "react-native";

export default class CustomClass3 extends Component {
    render(){
        return(
            <View>
                <TextInput style={style.textinput} onChangeText={text => this.props.settext(text) } placeholder="Write here" ></TextInput>
                
            </View>

        )
    }
}
const style = StyleSheet.create({
    textinput:{
        margin:1,
        borderWidth:1
    }
})
