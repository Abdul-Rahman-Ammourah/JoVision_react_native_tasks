import React,{Component,useState} from "react";
import {View,Text,Button,StyleSheet,Alert} from 'react-native';
import Task16 from "./Tasks/Task16";
import Task17 from "./Tasks/Task17";
import Task18 from "./Tasks/Task18";
import Task19 from "./Tasks/Task19";
import Task20 from "./Tasks/Task20";
import Task21 from "./Tasks/Task21";
import Task22 from "./Tasks/Task22";
export default class App extends Component {
  render(){
    return(
      
      <View style={styles.appcontainer}>
        {/* <Task16></Task16> */}
        {/* <Task17></Task17> */}
        {/* <Task18></Task18> */}
        {/* <Task19></Task19> */}
        {/* <Task20></Task20> */}
        {/* <Task21></Task21> */}
        <Task22></Task22>
      </View>

    )
  }
}
const styles = StyleSheet.create({
  appcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
