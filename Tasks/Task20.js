import React,{Component} from "react";
import { View,Text,Button,StyleSheet, Alert } from "react-native";
import MyClasscomp from '../CustomClass/CustomClass2_Task20';

export default class Task20 extends Component {
    state = {
        Callclass:false,
    }

    updateState = () => {
        this.setState({Callclass:!this.state.Callclass})}
    
    render(){
        return(
            <View style={Style.container}>
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