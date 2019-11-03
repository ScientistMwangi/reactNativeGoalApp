import React,{useState} from 'react';
import { StyleSheet, Text, View,Button,TextInput,ScrollView,FlatList } from 'react-native';
// Custom components
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';


export default function App() {

// Create a state on empty goals
const[courseGoals,setCourseGoals]=useState([]);
const[isModal,setIsModal]=useState(false);
const hideModalhandler=()=>{
  setIsModal(false);
}
const addGoalHandler=(enteredGoal)=>{
  setCourseGoals(currentGoals=>[...currentGoals,{id:Math.random().toString(),value:enteredGoal}]);
  setIsModal(false);
 }

// Delete the titles
 const removeGoalHandler=(id)=>{
  setCourseGoals( goals=>{return goals.filter((goal)=>goal.id!==id)});
  
 }
//  const[outputText,setOutputText]=useState('Open up App.js to start working on your app!');
  return (
<View style={{padding:50}}>
<Button title="Add Goal" styles={styles.button} onPress={()=>setIsModal(true)}/>
<GoalInput
visible={isModal}
addGoalHandler={addGoalHandler}
hideModalhandler={hideModalhandler}
/>
<FlatList 
   keyExtractor={(item,index)=>item.id}
    data={courseGoals}
    renderItem={itemData=>(
     <GoalItem id={itemData.item.id} removeGoalHandler={removeGoalHandler} goalTitle={itemData.item.value}/>
  )}

  
  />
{/*   <ScrollView>
  <View>
        {courseGoals.map((goal)=><View key={goal} style={styles.listItem}><Text key={goal}>{goal}</Text></View>)}
  </View>
  </ScrollView> */}
{
  //#region 
  // First Learning
  /*   <View style={{flexDirection:'row-reverse'}}>
    <View style={{
      backgroundColor:'red',
       flex:1,
      //width:100,
      height:100,
      justifyContent:'center',
      alignItems:'center'
    }}> 
      <Text>1</Text>
    </View>
    <View style={{
      backgroundColor:'blue',
      flex:2,
     // width:100,
      height:100,
      justifyContent:'center',
      alignItems:'center'
    }}>
    <Text>2</Text>
    </View>
    <View style={{
      backgroundColor:'green',
     // width:100,
     flex:1,
      height:100,
      justifyContent:'center',
      alignItems:'center'
    }}>
      <Text>3</Text>
      </View>
  </View> */
  //#endregion
  }
  </View>


  );
}

const styles = StyleSheet.create({
  
   button:{padding:20}
  
});
