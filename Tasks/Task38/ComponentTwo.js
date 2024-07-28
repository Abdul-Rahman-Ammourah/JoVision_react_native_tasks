import React, { useContext } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import ComponentOne from './ComponentOne';
import SharedTextContext from './SharedTextContext';

const ComponentTwo = () => {
    const { sharedText, setSharedText } = useContext(SharedTextContext);

    return (
        <View style={styles.container}>
            <TextInput
                placeholder='Write here'
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
        flex: 1,
        justifyContent: 'center',
    },
    input: {
        height: 40,
        width: 150,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
});

export default ComponentTwo;
