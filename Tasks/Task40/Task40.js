import React, { Component } from "react";
import { View, Button } from "react-native";
import ComponentOne from "./classComponent";
import { Provider } from "react-redux";
import { store } from "./index";

class Task40 extends Component {
    state = {
        showComponentOne: true,
    };

    toggleComponentOne = () => {
        this.setState((prevState) => ({
            showComponentOne: !prevState.showComponentOne,
        }));
    };

    render() {
        return (
            <Provider store={store}>
                <View>
                    <Button
                        title={this.state.showComponentOne ? "Hide Component One" : "Show Component One"}
                        onPress={this.toggleComponentOne}
                    />
                    {this.state.showComponentOne && <ComponentOne />}
                </View>
            </Provider>
        );
    }
}

export default Task40;
