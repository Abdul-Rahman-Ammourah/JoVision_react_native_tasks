import React from "react";
import { TouchableOpacity, Text, StyleSheet, Pressable } from "react-native";

export default C2Button = ({ text = "Remove", style, onPress = () => { null },styletext }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} >
      <TouchableOpacity style={styles.textWrapper} onPress={onPress} >
        <Text style={[styles.text, styletext]}>{text}</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    display: 'flex',
  },
  textWrapper: {
    alignItems: 'center',
    backgroundColor: '#2b2e4a',
    borderRadius: 999,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    overflow: 'hidden',
    paddingVertical: 11,
    paddingHorizontal: 18,
    position: 'relative',
  },
  text: {
    color: '#ffffff',
    fontFamily: 'Lato-Bold',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 14,
    marginTop: -1,
    position: 'relative',
  },
});

