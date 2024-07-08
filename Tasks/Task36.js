import React,{useEffect} from "react";
import { View, Text,ScrollView,StyleSheet } from "react-native";
import { maxWorkers } from "../metro.config";

export default function Task36() {
    const [words,setWords] = React.useState([]);
    
    useEffect(() => {
        WordGenerator();
    })
    function generateRandomWord(length) {
        let result = '';
        const characters = 'abcdefghijklmnopqrstuvwxyz';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }
    const WordGenerator = () => {
        const generateWords = [];
        for (let i = 0; i < 100; i++) {
            generateWords.push(generateRandomWord(7));
        }
        setWords(generateWords);
    }
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scroll}>
                {words.map((word, index) => (
                    <Text key={index}>{word}</Text>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    scroll:{
        height: 1000,

    }
})