import { View, Text,Image, FlatList,  TouchableOpacity } from 'react-native'
import React, {  useState } from 'react'
import { getDocs, collection, query } from "firebase/firestore";
import {db} from "../../config/FirebaseConfig"
import { useEffect } from 'react'
import {Colors} from '../../constants/Colors'
import tailwind from 'twrnc'
import {useRouter} from "expo-router"
export default function Category() {
    const [categories ,setcategories] = useState([])
    const getcategory = async()=>{
    setcategories([])
  const q = query(collection(db ,'category'))
  const querySnapShot = await getDocs(q)
  querySnapShot.forEach((doc) => {
    setcategories((prv)=>[...prv, doc.data()])
  })


    }
    useEffect(() => {
        getcategory();
      }, []);
      const router = useRouter()
  return (
    <View style={tailwind`mt-2`}>
      <View style={tailwind`flex flex-row items-center  justify-between `}>
        <Text
          style={[
            tailwind`font-bold text-lg  p-2`,
            { fontFamily: "outfit_bold" },
          ]}
        >
          # Category
        </Text>
        <Text
          style={[
            tailwind`font-bold   p-2`,
            { fontFamily: "outfit_bold", color: Colors.primeryColor },
          ]}
        >
          View All
        </Text>
      </View>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={categories}
        keyExtractor={(item) => item.id}
        style={tailwind`pl-2`}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
            onPress={()=>{
              router.push("/buisnesslist/"+item.name ,{item:item});
            }}
              style={tailwind`flex flex-row items-center  justify-between `}
            >
              <View style={tailwind`flex mx-2 flex-col items-center   `}>
                <View style={tailwind`bg-indigo-100 rounded-full p-2  `}>
                  <Image
                    source={{ uri: item.icon }}
                    width={30}
                    height={30}
                    style={tailwind` `}
                  />
                </View>
                <Text style={tailwind`text-[12px]`}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}