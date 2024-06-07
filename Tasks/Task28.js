import React,{Component} from "react";
import { View,Text,Button, Image,Alert,StyleSheet, Pressable, FlatList } from "react-native";
import cat1 from "../Resources/Cat1.jpeg";
import cat2 from "../Resources/Cat2.jpeg";
import cat3 from "../Resources/Cat3.jpeg";
import cat4 from "../Resources/Cat4.jpeg";
import cat5 from "../Resources/Cat5.jpeg";
import cat6 from "../Resources/Cat6.jpeg";
import cat7 from "../Resources/Cat7.jpeg";
import cat8 from "../Resources/Cat8.jpeg";
import cat9 from "../Resources/Cat9.jpeg";
import cat10 from "../Resources/Cat10.jpeg";


const catlist = [cat1,cat2,cat3,cat4,cat5,cat6,cat7,cat8,cat9,cat10]//creating an array
export default class Task28 extends Component {
    state = {
        image:catlist[0]//setting the first image as the default
    }
    
    handlepress = (index) => {
        
        Alert.alert("Image Selected",`You have selected image: ${index+1}`);
    }
    renderItem = (item ,index) => {
        return(
            <View style={styles.containerimage}>
            <Pressable onPress={() => this.handlepress(index)}>
            <Image source={item} style={styles.image} ></Image>
            </Pressable>
            </View>
        )
    }
    render(){
        return(
            <View style={styles.container}>
            <FlatList
                    data={catlist}
                    renderItem={this.renderItem}
                    keyExtractor={(index) => index.toString()}
                    horizontal
                    contentContainerStyle={styles.contentList}
                    style={styles.list}
                />

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
    containerimage: {
        padding: 1
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 20,

    },
    list: {
        flex:1,
        flexDirection: 'row',

    },
    contentList: {
        justifyContent: 'center',
        alignItems: 'center',
    }
});