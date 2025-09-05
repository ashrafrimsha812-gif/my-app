import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'



const Home = () => {
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor:"#fdecee"  }}>
 
  <ImageBackground source={require("../assets/images/pic.jpg")}
      style={{ width: "100%", height: 400,marginBottom:50 }}
      resizeMode="cover"
 >
        <Text style={{ fontWeight: 'bold', fontSize: 29,  marginTop: 80, textAlign: 'center',color:"#ec407fff"}}>
         Emotion Tracking
        </Text>
          <Text style={{ fontSize: 18, marginTop: 10, color:"#ee216cff" ,textAlign: 'center' }}>
          Welcome to App!
        </Text>
      
        <Text style={{ fontWeight: 'bold', fontSize: 25, textAlign: 'center', marginTop: 300 , color:"#ee216cff"}}>
          Sign In As
        </Text>

      
        <TouchableOpacity
          style={{
            width: "35%",
            height: 35,
            backgroundColor: "#d64b7d",
            borderRadius: 15,
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: "30%",
            marginTop: 20,
          }}
          onPress={() => router.push("/login")}  
        >
          <Text style={{ fontSize: 17, fontFamily: 'Times New Roman', color: 'white' }}>
            User
          </Text>
        </TouchableOpacity>

       
        <TouchableOpacity
          style={{
            width: "35%",
            height: 35,
            backgroundColor:"#d64b7d",
            borderRadius: 15,
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: "30%",
            marginTop: 18,
          }}
        onPress={() => router.push("/doctor/login")}  
        >
          <Text style={{ fontSize: 17, fontFamily: 'Times New Roman', color: 'white' }}>
            Doctor
          </Text>
        </TouchableOpacity>

      </ImageBackground>
    </View>
  )
}

export default Home
