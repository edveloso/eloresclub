import React, { Fragment } from 'react';
import {
  TextInput,
  Image, 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity
} from 'react-native';
import { Input,
    Button
} from 'react-native-elements';


import elo from './assets/elo.png';

export default function App() {
  const [email, onChangeEmailText] = React.useState('Insira o seu email');
  const [senha, onChangeSenhaText] = React.useState('Insira sua senha');

  return (
  
      <View style={styles.container}>
        <Image source={elo} style={{ width: 300, height: 200, borderRadius: 200}} />      
        
        <Text>
          {"\n\n"}
        </Text>

        <Input
          
          placeholder='Insira seu email'
          onChangeText={text => onChangeEmailText(text)}
          
        />

        
        <Input
          placeholder='Insira sua senha'
          onChangeText={text => onChangeSenhaText(text)}
          secureTextEntry={true}
        />


              
      <Button
        title="Solid Button"
      />

    
      </View>    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    alignItems: 'center',
    padding: 15
    
  },
});
