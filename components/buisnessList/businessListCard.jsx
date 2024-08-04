import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";
import tailwind from "twrnc";
import { useRouter } from "expo-router";
export default function businessListCard({ data }) {
  const router = useRouter();
  return (
    <TouchableOpacity
      onPress={()=>router.push("/buisnessDetail/"+data.unique)}
    >
      <View style={tailwind`flex flex-row  bg-white w-full p-2 my-2 `}>
        <Image
          source={{ uri: data.ImageUrl }}
          style={tailwind`w-[120px] h-[120px] rounded-lg`}
        />
        <View style={tailwind`flex ml-5 flex-col`}>
          <Text style={[tailwind`font-bold `]}>{data.name}</Text>
          <Text
            style={[tailwind`w-[200px] text-xs `, { color: Colors.grayColor }]}
          >
            {data.adress}
          </Text>
          <View style={tailwind`flex mt-2 flex-row items-center`}>
            <Text>4.5</Text>
            <Image
              source={require("../../assets/images/star.png")}
              style={tailwind`w-4 h-4 ml-2`}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
