import React,{Component,useState} from "react";
import {View,Text,Button,StyleSheet,Alert} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//Tasks
import Task16 from "./Tasks/Task16";
import Task17 from "./Tasks/Task17";
import Task18 from "./Tasks/Task18";
import Task19 from "./Tasks/Task19";
import Task20 from "./Tasks/Task20";
import Task21 from "./Tasks/Task21";
import Task22 from "./Tasks/Task22";
import Task23 from "./Tasks/Task23";
import Task24 from "./Tasks/Task24";
import Task25 from "./Tasks/Task25";
import Task26 from "./Tasks/Task26";
import Task27 from "./Tasks/Task27";
import Task28 from "./Tasks/Task28";
import Task29 from "./Tasks/Task29";
import Task32 from "./Tasks/Task32";
import Task33 from "./Tasks/Task33";
import Task34 from "./Tasks/Task34/Task34";
import Task35 from "./Tasks/Task35";
import Task36 from "./Tasks/Task36";
import Task37 from "./Tasks/Task37";
import Task38 from "./Tasks/Task38/Task38";
import Task39 from "./Tasks/Task39/Task39";
import Task40 from "./Tasks/Task40/Task40";
import Task41 from "./Tasks/Task41+42/Task41";
//******************************************************************  */
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
        {/* <Task22></Task22> */}
        {/* <Task23></Task23> */}
        {/* <Task24></Task24> */}
        {/* <Task25></Task25> */}
        {/* <Task26></Task26> */}
        {/* <Task27></Task27> */}
        {/* <Task28></Task28> */}
        {/* <Task29></Task29> */}
        {/* <Task32></Task32> */}
        {/* <Task33></Task33> */}
        {/* <Task34></Task34> */}
        {/* <Task35></Task35> */}
        {/* <Task36></Task36> */}
        {/* <Task37></Task37> */}
        {/* <Task38></Task38> */}
        {/* <Task39></Task39> */}
        {/* <Task40></Task40> */}
        <Task41></Task41>
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
