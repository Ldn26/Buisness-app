import { View, Text , Image, TextInput} from 'react-native'
import React from 'react'
import {useUser} from '@clerk/clerk-expo'
import tailwind from "twrnc"
import {Colors} from "../../constants/Colors"
import { Ionicons } from "@expo/vector-icons";

export default function Header() {
  const {user} = useUser()
  console.log(user)
  return (
    <View
      style={[
        tailwind`pt-[40px]  p-[20px]`,
        { backgroundColor: Colors.primeryColor ,borderBottomLeftRadius:20 ,borderBottomRightRadius:20},
      ]}
    >
      <View style={tailwind`flex flex-row items-center mt-4 gap-10`}>
        <Image
          source={{ uri: user?.imageUrl }}
          style={tailwind`w-[45px] h-[45px] rounded-full `}
        />
        <View>
          <Text style={tailwind`text-white`}>Welcome </Text>
          <Text
            style={[
              tailwind`text-[19px] text-white`,
              { fontFamily: "outfit_medium" },
            ]}
          >
            {user?.fullName}
          </Text>
        </View>
      </View>
      <View
        style={tailwind`bg-white mt-4 p-1 rounded  items-center flex flex-row  `}
      >
        <Ionicons name="search" size={24} color={Colors.primeryColor} />
        <TextInput
          style={[tailwind`text-[16px]  mx-2`, { fontFamily: "outfit_regulare"   }]}
          placeholder="Search ...."
        />
      </View>
    </View>
  );
}