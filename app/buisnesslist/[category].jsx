import { View, Text, FlatList, ScrollView, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import { useNavigation } from 'expo-router'
import {db} from '../../config/FirebaseConfig'
import BuisnessListCard from '../../components/buisnessList/businessListCard'
import {collection ,getDocs,query, where} from 'firebase/firestore'
import tailwind from 'twrnc'
import { Colors } from '../../constants/Colors'
export default function BuisnessListcat() {
const navigation = useNavigation()
const [listcards ,SetListcards] = useState([])
const { category} = useLocalSearchParams()
useEffect(()=>{
  navigation.setOptions({
      headerShown: true,
      headerTitle :category
  })
},[])
  const [IsLoading, setIsloading] = useState(false);

const getbuissneList =async ()=>{
  setIsloading(true)
  SetListcards([])
  const q = query(
    collection(db, "PopulareBuisnessCard"),
    where("cat", "==", category)
  );
  const querySnapShot = await getDocs(q) 
  querySnapShot.forEach((doc)=>{
    SetListcards((prv)=>[...prv,{unique:doc.id ,...doc.data()}])
  })
  setIsloading(false)
}
useEffect(() => {
  getbuissneList();
}, []);
return (
  <View style={tailwind` flex  flex-col flex-1 items-center justify-center`}>
    {listcards.length > 0 && IsLoading== false ? (
      <FlatList
        style={tailwind``}
        refreshing={IsLoading}
         onRefresh={getbuissneList}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return <BuisnessListCard key={index} data={item} />;
        }}
        data={listcards}
      />
    ) : IsLoading?  <ActivityIndicator size={'large'}
    color={Colors.primeryColor}/> : (
      <Text
        style={[
          tailwind`text-xl font-bold text-gray-300`,
        ]}
      >
        No Business Found 
      </Text>
    )}
  </View>
);
}