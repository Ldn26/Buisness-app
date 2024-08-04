import { View, Text,Image, FlatList } from 'react-native'
import React, {  useState } from 'react'
import { getDocs, collection, query } from "firebase/firestore";
import {db} from "../../config/FirebaseConfig"
import { useEffect } from 'react'
import {Colors} from '../../constants/Colors'
import tailwind from 'twrnc'
export default function PopularBuisnessCard() {
    const [IsLoading, setIsloading] = useState(false);
    const [PopularBuisnessCard ,setPopulareBuinessCard] = useState([])
    const getPopelareBuinessCard = async()=>{
    setIsloading(true)
    setPopulareBuinessCard([])
  const q = query(collection(db ,'PopulareBuisnessCard'))
  const querySnapShot = await getDocs(q)
  querySnapShot.forEach((doc) => {
    setPopulareBuinessCard((prv)=>[...prv, doc.data()])
  })
 setIsloading(false) 
}
    useEffect(() => {
        getPopelareBuinessCard();
      }, []);
  return (
    <View style={tailwind`mt-4  `}>
      <View style={tailwind`flex flex-row items-center justify-between `}>
        <Text
          style={[
            tailwind`font-bold text-lg  p-2`,
            { fontFamily: "outfit_bold" },
          ]}
        >
          # Populare Buisness
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
          data={PopularBuisnessCard}
          style={[tailwind``, { paddingLeft: 20 }]}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          renderItem={({ item }) => (
            <View
              style={[
                tailwind`p-2 flex flex-col gap-1 bg-white rounded-xl mb-4 mr-4 justify-center`,
              ]}
            >
              <Image
                style={tailwind`rounded-xl`}
                source={{ uri: item.ImageUrl }}
                width={200}
                height={130}
              />
              <Text style={tailwind`font-bold`}>{item.name}</Text>
              <Text
                style={[
                  tailwind`w-[200px] text-xs`,
                  { color: Colors.grayColor },
                ]}
              >
                {item.adress}
              </Text>
              {/* rating box  */}
              <View style={tailwind`flex flex-row justify-between`}>
                <View style={tailwind`flex flex-row items-center`}>
                  <Text>4.5</Text>
                  <Image
                    source={require("../../assets/images/star.png")}
                    style={tailwind`w-4 h-4 ml-2`}
                  />
                </View>
                <Text
                  style={[
                    tailwind`text-white rounded-lg px-2 py-1 `,
                    { backgroundColor: Colors.primeryColor },
                  ]}
                >
                  {item.cat}
                </Text>
              </View>
            </View>
          )}
        />
     
    </View>
  );
}