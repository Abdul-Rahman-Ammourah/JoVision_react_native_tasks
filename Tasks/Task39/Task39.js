import React, { useState } from "react";
import { View, Button } from "react-native";
import ComponentOne from "./componentOne";
import { Provider } from "react-redux";
import { store } from "./index";

export default function Task39() {
    const [showComponentOne, setShowComponentOne] = useState(true);

    return (
        <Provider store={store}>
            <View>
                <Button
                    title={showComponentOne ? "Hide Component One" : "Show Component One"}
                    onPress={() => setShowComponentOne(!showComponentOne)}
                />
                {showComponentOne && <ComponentOne />}
            </View>
        </Provider>
    );
}
