import React from "react";
import { View,Text,Button,StyleSheet} from "react-native";

export default function Screen1({navigation}){
    return(
        <View style={styles.container}>
            <Text>Screen2</Text>
            <Button title="Screen1" onPress={()=>navigation.navigate("Screen1")}></Button>
            <Button title="Screen3" onPress={()=>navigation.navigate("Screen3")}></Button>
            <Button title="Screen4" onPress={()=>navigation.navigate("Screen4")}></Button>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})