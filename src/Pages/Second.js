import React from "react";
import { View,Text,Button } from "react-native";

function Second(props) {

    function backToFirst() {
        props.navigation.goBack();
    }

    return (
        <View>
            <Text>Hello Second</Text>
            <Button title="Go Back" onPress={backToFirst} />
        </View>
    );
}
export default Second;