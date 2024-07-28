import React,{Component} from "react";
import { View,Text,} from "react-native";

export default class MyClasscomp extends Component{
    componentDidMount(){
        console.log("Custom Class Loaded......")
    }
    componentWillUnmount(){
        console.log("Custom Class Unloaded.....")
    }
    render(){
        return(
            <View>
                <Text>Another class Hey!!</Text>
            </View>
        )
    }
}
