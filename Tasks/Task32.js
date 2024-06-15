import React,{Component, createRef} from "react";
import { View,Text,Button,StyleSheet,Alert, Image, ImageBackground, Pressable } from "react-native";
import Video from "react-native-video";
import styles from "./style.js";
import Cat1 from "../Resources/Cat1.jpeg";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default Task32 = () => {
    const [status, setStatus] = React.useState({
        shouldPlay: true,
    })
    const videoRef = createRef();
    const background = require('../Resources/Cute_Cats.mp4');


    const handleBuffer = () => {
        console.log("Buffering.....");
    };

    const handleError = (error) => {
        console.log("Error: ", error);
    };
    const handlepress = () => {
        setStatus({shouldPlay: !status.shouldPlay})
    }
    return(
        <View style={styles.container}>     
            <Video
                ref={videoRef}
                source={background}
                onBuffer={handleBuffer}
                onError={handleError}
                style={style.Video}
                paused={status.shouldPlay}  
                >
                </Video>
                {status.shouldPlay &&<Image
                source={Cat1}
                style={style.image}
                resizeMode="cover"/>}
                <Pressable onPress={handlepress} style={style.playIcon}>
                {status.shouldPlay &&<FontAwesome5 name="play" size={50} color="green" />}
                </Pressable>

        </View>
    )
}
const style = StyleSheet.create({
    container:{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Video: {
        width: 300,
        height: 300,
      },
    image:{
        position: 'absolute',
        width: 300,
        height: 175,
    },
    playIcon:{
        position: 'absolute',
        top: 350,
        left: 135,
        zIndex: 10,
        },
})