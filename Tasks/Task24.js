import React,{Component, createRef, useRef} from "react";
import { View,Text,TextInput, StyleSheet } from "react-native";
import Customfunction3 from "../CustomFuntion/CustomFunction3_Task24";
export default class Task24 extends Component {

    state = {
        text:''
    }
    functionRef = createRef();

    handelTextChange =(text)=>{
        this.setState({text})
        this.functionRef.current.ChangeText(text)
    }

    render(){
        return(
            <View>
                <TextInput style={style.textinput} placeholder="Write here" onChangeText={this.handelTextChange} ></TextInput>
                <Customfunction3 ref={this.functionRef}></Customfunction3>
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