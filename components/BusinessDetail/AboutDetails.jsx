import { View, Text } from 'react-native'
import React from 'react'
import tailwind from 'twrnc'
export default function AboutDetails({data}) {
  return (
    <View style={tailwind`bg-white p-[20px] `}>
      <Text style={tailwind`font-bold text-[20px]`}>About</Text>
      <Text style={tailwind`text-xs text-gray-500 mt-2 `}>{data?.about}</Text>
    </View>
  );
}