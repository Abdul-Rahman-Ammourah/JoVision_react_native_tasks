import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import SharedTextContext from './SharedTextContext'; // Import the context

class ComponentOne extends Component {
    static contextType = SharedTextContext;

    render() {
        const { sharedText } = this.context;
        return <Text style={styles.text}>{sharedText}</Text>;
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        color: 'blue',
    },
});

export default ComponentOne;
