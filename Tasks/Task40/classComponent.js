import React, { Component } from "react";
import { View, Text, TextInput } from "react-native";
import { connect } from "react-redux";
import { setText } from "./setText";

class ComponentOne extends Component {
    handleChangeText = (text) => {
        this.props.setText(text);
    };

    render() {
        return (
            <View>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={this.handleChangeText}
                    value={this.props.text}
                />
                <Text>Component One Says: {this.props.text}</Text>
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    text: state.setText.text,
});

const mapDispatchToProps = {
    setText,
};

export default connect(mapStateToProps, mapDispatchToProps)(ComponentOne);
