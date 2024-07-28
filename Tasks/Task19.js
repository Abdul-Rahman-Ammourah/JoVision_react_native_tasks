import React,{Component} from "react";
import { View,Text,Button,StyleSheet, Alert } from "react-native";
import MyClasscomp from '../CustomClass/CustomClass1_Task19';

export default class Task19 extends Component {
    state = {
        callclass:false
    }
    updateState = () => {
        this.setState({callclass:true})
    }

    render(){
        return(
            <View>
                <Button title="Show" onPress={this.updateState} ></Button>
                {this.state.callclass && <MyClasscomp></MyClasscomp>}
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