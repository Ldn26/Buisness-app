import { View, Text ,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import tailwind from 'twrnc';
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from 'expo-router';

export default function Intro({data}) {

      const router = useRouter();

  return (

    <View style={tailwind`relative`}>
      <TouchableOpacity
        style={tailwind`absolute z-99 top-8  left-2 `}
        onPress={() => router.back()}
      >
        <Ionicons name="arrow-back-circle" size={40} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        style={tailwind`absolute z-99 top-8  right-2 `}
        onPress={() => console.log("first")}
      >
        <Ionicons name="heart-outline" size={40} color="white" />
      </TouchableOpacity>
      <Image
        source={{ uri: data?.ImageUrl }}
        style={tailwind`w-full  h-[320px]`}
      />
      <View
        style={[
          tailwind` p-[20px] -mt-[20px] bg-white`,
          { borderTopLeftRadius: 25, borderTopRightRadius: 25 },
        ]}
      >
        <Text style={tailwind` text-[26px] font-bold `}>{data?.name}</Text>
        <Text style={tailwind` text-[15px]   text-gray-400 `}>{data?.adress}</Text>
      </View>
    </View>
  );
}