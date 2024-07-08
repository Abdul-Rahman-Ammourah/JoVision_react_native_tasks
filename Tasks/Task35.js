import React from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Task35() {
    const [isHidden, setIsHidden] = React.useState(false);
    const [isHidden2, setIsHidden2] = React.useState(false);
    const [user, setUser] = React.useState({
        name: "",
        age: "",
        country: "",
        timestamp: null,
    });

    const storeData = async () => {
        const time = new Date();
        const updatedUser = { ...user, timestamp: time };
        try {
            const jsonValue = JSON.stringify(updatedUser);
            await AsyncStorage.setItem('@user', jsonValue);
            setIsHidden(true);
        } catch (e) {
            Alert.alert("Error", e.message);
        }
    };

    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('@user');
            if (jsonValue !== null) {
                const retrievedUser = JSON.parse(jsonValue);
                setIsHidden2(true);
                setUser(retrievedUser);
            }
        } catch (error) {
            Alert.alert("Error", error.message);
        }
    };

    return (
        <View style={styles.container}>
            {isHidden && <Text style={styles.hiddenText}>User saved</Text>}
            {isHidden2 && (
                <Text style={styles.hiddenText}>
                    User name: {user.name} {'\n'}
                    User age: {user.age} {'\n'}
                    User country: {user.country} {'\n'}
                    User time submitted: {user.timestamp?.toString()}
                </Text>
            )}
            <View style={styles.inputbox}>
                <TextInput
                    placeholder="Write your name Please"
                    placeholderTextColor={"rgba(0,0,0,0.5)"}
                    onChangeText={text => setUser({ ...user, name: text })}
                />
            </View>
            <View style={styles.inputbox}>
                <TextInput
                    placeholder="Write your age Please"
                    placeholderTextColor={"rgba(0,0,0,0.5)"}
                    keyboardType="numeric"
                    onChangeText={text => setUser({ ...user, age: text })}
                />
            </View>
            <View style={styles.inputbox}>
                <TextInput
                    placeholder="Where are you from"
                    placeholderTextColor={"rgba(0,0,0,0.5)"}
                    onChangeText={text => setUser({ ...user, country: text })}
                />
            </View>

            <View style={styles.submit}>
                <TouchableOpacity onPress={storeData}>
                    <Text>Submit</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.submit}>
                <TouchableOpacity onPress={getData}>
                    <Text>Get data</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputbox: {
        padding: 5,
        backgroundColor: 'lightblue',
        borderRadius: 10,
        marginBottom: 10,
        width: '80%',
    },
    submit: {
        padding: 10,
        backgroundColor: 'lightblue',
        borderRadius: 10,
        marginBottom: 10,
    },
    hiddenText: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
    }
});
