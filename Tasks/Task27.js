import React,{Component} from "react";
import { View,Text,Button, Image,Alert } from "react-native";
import cat1 from "../Resources/Cat1.jpeg";
import cat2 from "../Resources/Cat2.jpeg";
import cat3 from "../Resources/Cat3.jpeg";
export default class Task27 extends Component {
    state = {
        image:cat1
    }
    ChangeImage = (usernum) => {
        this.setState({image:eval(`cat${usernum}`)})
    }
    handleclick = () => {
        //asking the user for input from 1 to 3 via alert and passing it to ChangeImage
        
    }
    render(){
        return(
            
            <View>
            <Image source={cat1} ></Image>
            <Button title="Change Image" onPress={this.handleclick} color="blue"></Button>
            </View>
        )
    }
}