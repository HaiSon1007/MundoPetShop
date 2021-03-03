import React from 'react'
import { Text } from "react-native";
import Axios from 'axios';

const URL = 'https://jsonplaceholder.typicode.com/todos/1';

const fetchWords = () => {
    return() => {
        Axios({
            method: 'get',
            url: 'https://jsonplaceholder.typicode.com/todos/1',
          })
            .then(function (response) {
              console.log(response)
            });
}}
function End(){
    <Text>anh anh anh</Text>
}
const tttt = () => {
    return(
        <End />,
        <Text>dsfsda</Text>
    )
}
export default {tttt,fetchWords};