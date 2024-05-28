import React,{Component} from "react";
import { View,Text,Button } from "react-native";
import CustomFunction1 from "../CustomFuntion/CustomFunction1";
export default class Task21 extends Component {
    state = {
        Isloading:false
    }
    UpdateIsLoading = () =>{
        this.setState({Isloading:!this.state.Isloading})
    }
    render(){
        return(
            <View>
                <Button title="Show" onPress={this.UpdateIsLoading}></Button>
                {this.state.Isloading && <CustomFunction1></CustomFunction1>}
            </View>


        )
    }
}