import { View, Text, FlatList,Image, TouchableOpacity, Linking } from "react-native";
import React from "react";
import tailwind from "twrnc";
export default function ActionButtons({ data }) {
  const actionMenu = [
    {
      id: 1,
      name: "Call",
      icon: require("../../assets/images/call.png"),
      url: "tel:"+data?.contact,
    },
    {
      id: 2,
      name: "Location",
      icon: require("../../assets/images/pin.png"),
      url: "https://google.com/maps/search/?api=1&query="+data?.adress,
    },
    {
      id: 3,
      name: "Web",
      icon: require("../../assets/images/web.png"),
      url: data?.web,
    },
    {
      id: 4,
      name: "Share",
      icon: require("../../assets/images/share.png"),
      url: data?.web,
    },

  ];


  const openOnressHaldler = (item)=>{
    if(item.name=='Share'){
  return
    }  
Linking.openURL(item.url)
  }
  return (
    <View style={tailwind`p-[20px]  bg-white`}>
      <FlatList
        data={actionMenu}
        columnWrapperStyle={{justifyContent:'space-between'}}
        numColumns={4}
        style={tailwind``}
        renderItem={({ item, index }) => (
          <TouchableOpacity  
          onPress={()=>openOnressHaldler(item)}
          style={tailwind``}>
            <Image source={item?.icon} style={tailwind`w-[50px] h-[50px]`} />
            <Text style={tailwind`text-center`}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
