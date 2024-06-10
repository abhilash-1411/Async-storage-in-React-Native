

import React, { useState } from 'react';
import { Text, View,Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


function App() {
  const [user,setUser]=useState('');
  const setData = async()=>{
   await AsyncStorage.setItem("user","Adixoo Brand")
  }

  const getData = async()=>{
    const name=await AsyncStorage.getItem("user")
    setUser(name);
    // console.warn(name);
    
   }
   const removeData=async()=>{
    await AsyncStorage.removeItem("user")
    setUser('')
   }

  return (
   <View>
    <Text style={{fontSize:30}}>Async Storage in React-Native | {user}</Text>
    <Button title='Set Data' onPress={setData}/>
    <Button title='Get Data' onPress={getData}/>
    <Button title='Remove Data' onPress={removeData}/>
   </View>
  );
}


export default App;
