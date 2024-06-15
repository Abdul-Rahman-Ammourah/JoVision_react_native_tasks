import React,{Component, createRef} from "react";
import { View,Text,Button,StyleSheet,Alert } from "react-native";
import Video from "react-native-video";
import styles from "./style.js";
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
        </View>
    )
}
const style = StyleSheet.create({
    Video: {
        width: 300,
        height: 300,
      },
      
})