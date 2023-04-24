import {  Text, View,ScrollView,SafeAreaView } from "react-native";
import { useState } from "react";
import { Stack,useRouter } from "expo-router";
import { images, icons, COLORS, SIZES } from '../constants';
import {Nearbyjobs,Popularjobs,ScreenHeaderBtn,Welcome} from '../components'

export default function Page() {
  const router =useRouter ()
  return (
    <SafeAreaView style={{flex:1,backgroundColor:COLORS.lightWhite, paddingTop:40 }}>
        <Stack.Screen 
          options={{
            headerStyle:{backgroundColor:COLORS.lightWhite},
            headerShadowVisible:false,
            headerLeft: () => (
              <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
            ),
            
            headerRight: () => (
              <ScreenHeaderBtn iconUrl={icons.profile} dimension="100%" />
            ),
          }}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{flex:1, padding:SIZES.medium}}>
          <Welcome />
          <Popularjobs />
          <Nearbyjobs />
          </View>
        </ScrollView>
    </SafeAreaView>
  );
}

