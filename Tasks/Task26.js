import React,{Component,useState} from "react";
import { View,Text,Button,StyleSheet, ActivityIndicator } from "react-native";

export default class Task26 extends Component {
    state ={
        IPaddress: 'No address',
        Isloading:false
    }

    BlockingGetip = async () => {
        this.setState({Isloading:!this.state.Isloading})
        try{
        const responec = await fetch("https://api.ipify.org?format=json")
        const data = await responec.json();
        this.setState({IPaddress:data.ip,Isloading:true})
        setTimeout(()=>{this.setState({Isloading:false})},500)
    }
        catch(error){
            console.error("Error Fetch your IP address",error);
            this.setState({Isloading:false})
        }
    }

    Getip = async () => {
        try {
            const response = await fetch("https://api.ipify.org?format=json");
            const data = await response.json();
            this.setState({ IPaddress: data.ip });
        } catch (error) {
            console.error("Error Fetch your IP address",error);
        }
    };
    render(){
        return(
            <View>
                {this.state.Isloading ? <ActivityIndicator size={'large'} color={'red'}></ActivityIndicator> :
                <View>
                    <Button title="Get Ip (NON-BLOCKING)" onPress={this.Getip} color={"#bbaaaa"}></Button>
                    <Button title="Get Ip (BLOCKING)" onPress={this.BlockingGetip} color="blue"></Button>
                    <Text>{this.state.IPaddress}</Text>
                </View> 
                }
            </View>
        )

    }
}