import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

import { useState, useEffect } from 'react';


export default function App() {
  console.log("____________________________________")

  // const [data, setData] = useState(0);
  // const headers = {
  //   'Content-Type': 'application/json'
  // }
  // const body = JSON.stringify({
  //   'row': 5,
  //   'col':5,
  // });

  // useEffect( () => {
  //   fetch("http://127.0.0.1:5000/getData", {
  //     method: 'POST', 
  //     headers: headers,
  //     body: body,
  //     mode: "cors",
  //   })
  //   .then(response => response.json())
  //   .then(response =>setData(response))
  //   .catch(console.log("ERROR"))

  // }, [])

  // const axios = require('axios');

  // const url = 'http://127.0.0.1:5000/getData';
  // const data = { 'row': 5, 'col': 5, };
  // const headers = {
  //   'Content-Type': 'application/json',
  // };
  
  // axios.post(url, data, { headers })
  //   .then(response => {
  //     console.log(response.data);
  //   })
  //   .catch(error => {
  //     console.error(error);
  //   });


  const fetchData = async () => {
    try {
      const url = 'http://127.0.0.1:5000/getData';

      const body = JSON.stringify({
          'row': 5,
          'col':5,
        });

      const headers = {
        'Content-Type': 'application/json',
      };
  
      const response = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: body
      });
  
      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.error(error);
    }
  };

  fetchData()


  // 192.168.1.152

  // console.log(data)
  console.log("+=========================")

  return (
    <View style={styles.container}>
      <Text>poo</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
