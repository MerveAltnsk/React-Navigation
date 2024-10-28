import React from 'react';
import {View, Text, Button} from 'react-native';

function First(props) {

    function navigateToPage() {
        props.navigation.navigate('SecondScreen',{username:'Merve'});
    }


  return (
    <View>
      <Text>Hello First</Text>
      <Button title = "Go to second" onPress={navigateToPage}/>
    </View>
  );
}

export default First;
