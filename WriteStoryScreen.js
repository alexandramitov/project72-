import * as React from 'react';
import { Stylesheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import keyAvoidingView from 'reactToastAndroid-native';

export default class WriteStoryScreen extends React.Component{
    constructor(){
        super();
        this.state ={
            text:'',
        }
    }

    render(){
        const showToast= ()=>{
            ToastAndroid.show('Story has been submitted!', ToastAndroid.SHORT)
        }
        return(
            <keyAvoidingView style= {{alignItems: 'center', marginTop: 20}}>
            
            <View style={styles.container}>
                <Header
                backgroundColor={"pink"}
                centerComponent={{
                    text: "Story Hub",
                    style: {color: "pink", fontSize: 20},
                }}
                />

               <TextInput
                   style={styles.titleBox}
                   onChangeText={text => {
                       this.setState({ text: text })
                   }}
                   value={this.state.text}
                   />

               <TextInput
                   style={styles.authorBox}
                   onChangeText={text => {
                    this.setState({ text: text })
                   }}
                   value={this.state.text}
                   />

               <TextInput placeholder="Write your story" 
               onChangeText= {(text)=>{ 
                   this.setState({ storyText: text }) }}
                    placeholderTextColor='black' 
                    value={this.state.storyText} 
                    style={styles.storyText} 
                    multiline={true}/>

               
               <TouchableOpacity
               style= {styles.submitButton}
               onPress={()=> {}}
               >
                   <Text>Submit</Text>
               </TouchableOpacity>
            </View>
            
            </keyAvoidingView>
        
        )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    titleBox: {
      marginTop: 40,
      width: '80%',
      alignSelf: 'center',
      height: 40,
      textAlign: 'center',
      borderWidth: 4,
      outline: 'none',
    },
    authorBox: {
      marginTop: 60,
      width: '80%',
      alignSelf: 'center',
      height: 40,
      textAlign: 'center',
      borderWidth: 4,
      outline: 'none',
    },
    storyBox: {
      marginTop: 80,
      width: '80%',
      alignSelf: 'center',
      height: 40,
      textAlign: 'center',
      borderWidth: 4,
      outline: 'none',
    },
    submitButton: {
      width: '50%',
      height: 55,
      alignSelf: 'center',
      padding: 10,
      marginTop: 90,
    },
  });