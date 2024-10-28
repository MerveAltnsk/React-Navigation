import React from "react";
import { View,Text,Button } from "react-native";

function Second(props) {

    const user = props.route.params.username;
    //const {username} = props.route.params;              Aynısı farklı gösterilişi


    function backToFirst() {
        props.navigation.goBack();
    }

    return (
        <View>
            <Text>Hello Second</Text>
            <Text>Welcome {user}</Text>
            //<Text>Welcome {username}</Text>

            <Button title="Go Back" onPress={backToFirst} />
        </View>
    );
}
export default Second;