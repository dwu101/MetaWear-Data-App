import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import { readRemoteFile } from 'react-native-csv';

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

  const [data, setData] = useState(0);

  const fetchData = async () => {
    try {
      const url = 'https://b869-2600-4040-4527-e700-30f8-7df6-f6e7-e61.ngrok-free.app/getData';

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
      setData(responseData['Success'])
    } catch (error) {
      console.error(error);
    }
  };

  fetchData()

// readRemoteFile('test.csv',{
//   complete: (results) => {
//     // console.log("_SDASDASD")
//     console.log(results)
//   }
// })




  // 192.168.1.152

  // console.log(data)
  console.log("+=========================")

  return (
    <View style={styles.container}>
      <Text>{data}</Text>
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
