import { View, Text, TouchableOpacity, ScrollView, ImageBackground } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const Splash = () => {  
  const router = useRouter();

  return (
    <ImageBackground  
      source={require("../../assets/images/home.png")} 
      style={{ flex: 1, width: "100%", height: 500 ,marginTop:70}} 
  
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      
        <Text style={{ fontWeight: 'bold', fontSize: 30,  marginBottom: 40,textAlign:"center" ,color:"#d64b7d"}}>
          Emotion Tracker
        </Text>
         
       
        <TouchableOpacity
          style={{
            backgroundColor: "#d64b7d",
            borderRadius: 10,
            width: "60%",
            height: 50,
            alignSelf: 'center',
            marginTop: 490,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onPress={() => router.push("/home")}
        >
          <View style={{
            backgroundColor: "#d64b7d",
            width: 50,
            height: 50,
            borderRadius: 7,
            alignItems: 'center',
            justifyContent: 'center',
            
          }}>
            <Ionicons name="chevron-forward" size={20} color="#fff" />
          </View>
          <Text style={{
            fontWeight: 'bold',
            fontSize: 20,
            color: "#fff"
          }}>
            GET STARTED
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  )
}

export default Splash;
