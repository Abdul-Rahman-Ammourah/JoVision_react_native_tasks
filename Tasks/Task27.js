import React,{Component} from "react";
import { View,Text,Button, Image,Alert,StyleSheet } from "react-native";
import cat1 from "../Resources/Cat1.jpeg";
import cat2 from "../Resources/Cat2.jpeg";
import cat3 from "../Resources/Cat3.jpeg";

const catlist = [cat1,cat2,cat3]
export default class Task27 extends Component {
    state = {
        image:catlist[0]
    }
    ChangeImage = (usernum) => {
        this.setState({image:catlist[usernum-1]})
    }
    handleclick = () => {
        
        Alert.alert("Cat pictures","Choose one of the three cats",
        [{text:"1",onPress:()=>this.ChangeImage(1)},
        {text:"2",onPress:()=>this.ChangeImage(2)},
        {text:"3",onPress:()=>this.ChangeImage(3)}])
    }
    render(){
        return(
            
            <View style={styles.container}>
            <Image source={this.state.image} style={styles.image} ></Image>
            <Button title="Change Image" onPress={this.handleclick} color="blue"></Button>
            </View>
        )
    }
}
//styling
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 20,
    }
});