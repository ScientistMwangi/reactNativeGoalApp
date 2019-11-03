import React,{useState} from 'react';

import {TextInput,View,StyleSheet,Button,Modal} from 'react-native'

const GoalInput=(props)=>{
// Get states values and set them
const[enteredGoal,setEnteredGoal]=useState('');
const goalInputHandler=enteredValue=>{
    setEnteredGoal(enteredValue);
  }
  const addGoalLocalHandler=()=>{
    props.addGoalHandler(enteredGoal)
    props.hideModalhandler();
    setEnteredGoal('');
  }

 return(
<Modal visible={props.visible } animationType='slide'>
  <View style={styles.container}>
    <TextInput 
     visible={props.visible}
     placeholder="Course Goal"
     style={styles.input}
     onChangeText={goalInputHandler}
     value={enteredGoal}
    />
    <View style={styles.ButtonContainer}>
    <View style={styles.Button}><Button title="Cancel" color="red" onPress={()=>{props.hideModalhandler()}}/></View>
    <View style={styles.Button}><Button title="ADD" onPress={addGoalLocalHandler}/></View>
    </View>
    
  </View > 
  </Modal> 
  
 );
};

const styles=StyleSheet.create({
    input:{'borderColor':'black',width:'80%',borderWidth:1,padding:10,padding:10,margin:10},
    container:{flexDirection:'column',justifyContent:'center',alignItems:'center',flex:1},
    ButtonContainer:{flexDirection:'row',justifyContent:'space-between',width:"60%",padding:10},
    Button:{width:"40%"}
});

export default GoalInput; 

