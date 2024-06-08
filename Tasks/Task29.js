import React,{Component} from "react";
import { View,Text,Button, Image,Alert, Pressable, FlatList,Modal, TextInput } from "react-native";
import C1Button from "../CustomFuntion/CustomButton1.js";
import C2Button from "../CustomFuntion/CustomButton2.js";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import styles from "./style.js";
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

export default class Task29 extends Component {
    state = {
        catlist:[cat1,cat2,cat3,cat4,cat5,cat6,cat7,cat8,cat9,cat10],//creating an array
        image:cat1,//setting the first image as the default
        imageindex:5,
        modalVisible:false,
        imageinput:'',
        
    }
    //Creating refference
    flatRef = React.createRef()

    handlepress = (index) => {
        Alert.alert("Image Selected", `You have selected image: ${index + 1}`);

    }
    Addimage = (index) => {
        const newlist = this.state.catlist
        newlist.splice(index,0,this.state.catlist[index])
        this.setState({catlist:newlist})
    }
    Deleteimage = (index) => {
        const newlist = this.state.catlist
        newlist.splice(index,1)
        this.setState({catlist:newlist})
    }
    
    //Displaying the list of images
    renderItem = ({item ,index}) => {
        return(
            <View style={styles.containerimage}>
            <Pressable onPress={() => this.handlepress(index)}>
                <Image source={item} style={styles.image} ></Image>
            </Pressable>

            <Pressable onPress={() => this.Deleteimage(index)} style={styles.ModalbuttonRemove}>
                <FontAwesome5 name="backspace" size={25} color="darkred" />
                {/* Task30 */}
            </Pressable>

            <Pressable onPress={() => this.Addimage(index)} style={styles.ModalbuttonAdd}>
                <FontAwesome5 name="plus-circle" size={25} color="darkred" />
                {/* Task31 */}
            </Pressable>
            </View>
        )
    }
    
    //Take input from the user and scroll to that image via alert
    handleclick = () => {
        this.setState({modalVisible:true})
    }
    //Scrolling to the image
    scrollTo = (index) => {
        this.setState({imageindex:index})
        this.flatRef.current.scrollToIndex({index:index, animated:true})
        this.setState({imageinput:null})

    }
    ModalInputHandeler = (num) => {
        try {
        if (num > 0 && num < this.state.catlist.length + 1) {
            this.scrollTo(num - 1);
        }
        else if (num == null) {
            Alert.alert("Error", "Please enter a number")
        }
        else {
            Alert.alert("Invalid Input", "Enter a number between 1 and "+this.state.catlist.length)
            this.setState({imageinput:null})

        }
    } catch (error) {
        Alert.alert("Erorr", "Something went wrong, Please restart the app")
    }
    }
    render(){
        return(
            <View style={styles.container}>
            <FlatList
                    ref={this.flatRef}
                    data={this.state.catlist}
                    renderItem={this.renderItem}
                    keyExtractor={(item,index) => index.toString()}
                    horizontal
                    contentContainerStyle={styles.contentList}
                    style={styles.list}
                />
                <C2Button text="Scroll To" onPress={this.handleclick} ></C2Button>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}>
                    <View style={styles.OutterModal}>

                        <View style={styles.InnerModal}>

                            <Text style={styles.ModalText}>Choose a number from 1 to 10</Text>

                            <TextInput placeholder="?" style={styles.ModalInput} onChangeText={(num) => this.setState({imageinput:num})} maxLength={2} keyboardType="numeric"></TextInput>
                            <C2Button  text="Submit" onPress={() => {this.ModalInputHandeler(this.state.imageinput);this.setState({modalVisible:false})}} ></C2Button>
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }
}
