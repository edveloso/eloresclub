
import React from 'react';
import { View, Text, Button, StatusBar } from 'react-native';

const HomePage = ({ navigation }) => {
    return(
        <View>
            <StatusBar hidden />
            <Text>Home Page</Text>
            <Button
            title='Ir para Agenda'
            onPress={() => navigation.navigate('Agenda')}
            />
        </View>
    );
}


HomePage.navigateOptions = {
    title: null,
}

export default HomePage;