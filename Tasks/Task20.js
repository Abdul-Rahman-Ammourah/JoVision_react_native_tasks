import React,{Component} from "react";
import { View,Text,Button,StyleSheet, Alert } from "react-native";
import MyClasscomp from '../CustomClass/CustomClass2';

export default class Task20 extends Component {
    state = {
        Callclass:false,
        didmount:false
    }
    updateState = () => {
        this.setState({Callclass:true})}
    componentDidMount(){
        this.setState({didmount:true})
        console.log("Custom Class Loaded......")
    }
    componentWillUnmount(){
        console.log("Custom Class Unloaded.....")
    }

    render(){
        return(
            <View>
                <Button title="Show" onPress={this.updateState} ></Button>
                {this.state.Callclass && <MyClasscomp></MyClasscomp>}
                
            </View>
        )
    }
    
}
const Style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',

    }

})