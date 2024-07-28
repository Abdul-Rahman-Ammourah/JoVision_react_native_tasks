import React,{Component, createRef, useRef} from "react";
import { View,Text,TextInput, StyleSheet } from "react-native";
import CustomClass4 from "../CustomClass/CustomClass4_Task25";
export default class Task25 extends Component {
    state = {
        text:''
    }
    ClassRef = createRef();

    handelTextChange =(text)=>{
        this.setState({text})
        this.ClassRef.current.ChangeText(text)
    }

    render(){
        return(
            <View>
                <TextInput style={style.textinput} placeholder="Write here" onChangeText={this.handelTextChange} ></TextInput>
                <CustomClass4 ref={this.ClassRef} ></CustomClass4>
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