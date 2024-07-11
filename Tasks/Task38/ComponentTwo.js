import React, { useContext } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import ComponentOne from './ComponentOne';
import SharedTextContext from './SharedTextContext';

const ComponentTwo = () => {
    const { sharedText, setSharedText } = useContext(SharedTextContext);

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={sharedText}
                onChangeText={setSharedText}
            />
            <ComponentOne />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
});

export default ComponentTwo;
