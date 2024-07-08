import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet, RefreshControl } from "react-native";

export default function Task37() {
    const [words, setWords] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        WordGenerator();
    }, []);

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
        setRefreshing(false);
    };

    const onRefresh = () => {
        setRefreshing(true);
        // Simulate a network request with a timeout
        WordGenerator();
    };

    return (
        <View style={styles.container}>
            <ScrollView 
                style={styles.scroll} 
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            >
                {words.map((word, index) => (
                    <Text key={index} style={styles.word}>{word}</Text>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    scroll: {
        width: '100%',
    },
    word: {
        fontSize: 18,
        padding: 10,
    },
});
