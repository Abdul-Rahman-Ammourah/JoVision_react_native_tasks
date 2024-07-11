import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SharedTextProvider } from './SharedTextContext';
import ComponentTwo from './ComponentTwo';

export default function Task38() {
    return (
        <SharedTextProvider>
            <View style={styles.safeArea}>
                    <ComponentTwo />
                    <ComponentTwo />
                    <ComponentTwo />
                    <ComponentTwo />
            </View>
        </SharedTextProvider>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    scrollView: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});
