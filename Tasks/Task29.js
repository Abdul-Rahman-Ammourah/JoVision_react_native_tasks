import React,{Component} from "react";
import { View,Text,Button, Image,Alert,StyleSheet, Pressable, FlatList,Modal, TextInput } from "react-native";
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
export default class Task29 extends Component {
    state = {
        image:catlist[0],//setting the first image as the default
        imageindex:5,
        modalVisible:true
    }
    //Creating refference
    flatRef = React.createRef()

    handlepress = (index) => {
        Alert.alert("Image Selected", `You have selected image: ${index + 1}`);

    }
    //Displaying the list of images
    renderItem = ({item ,index}) => {
        return(
            <View style={styles.containerimage}>
            <Pressable onPress={() => this.handlepress(index)}>
            <Image source={item} style={styles.image} ></Image>
            </Pressable>
            </View>
        )
    }
    
    //Take input from the user and scroll to that image via alert
    handleclick = () => {
        Alert.alert("Cat pictures","Choose one of the ten cats",[
            {
                text:"Enter a number from 1 to 10",
                onPress:() => {
                    this.scrollTo(this.state.imageindex);
                }
            },
        ])
    }
    //Scrolling to the image
    scrollTo = (index) => {
        this.setState({imageindex:index})
        this.flatRef.current.scrollToIndex({index:index, animated:true})
    }
    ModalInputHandeler = (num) => {
        if (num > 0 && num < 11) {
            this.scrollTo(num - 1);
        }
    }
    render(){
        return(
            <View style={styles.container}>
            <FlatList
                    ref={this.flatRef}
                    data={catlist}
                    renderItem={this.renderItem}
                    keyExtractor={(index) => index.toString()}
                    horizontal
                    contentContainerStyle={styles.contentList}
                    style={styles.list}
                    
                    
                    
                />
                <Button title="Scroll to Image" onPress={this.handleclick} ></Button>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        this.setState({modalVisible: false });
                    }}
                >
                    <View style={styles.OutterModal}>

                        <View style={styles.InnerModal}>

                            <Text style={styles.ModalText}>Choose a number from 1 to 10</Text>

                            <TextInput placeholder="    ?" style={styles.ModalInput} onChangeText={this.ModalInputHandeler}  ></TextInput>
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }
}
