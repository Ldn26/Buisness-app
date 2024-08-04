import { View, Text, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { getDocs, collection, query } from "firebase/firestore";
import { db } from "../../config/FirebaseConfig";
import tailwind from "twrnc";
export default function Slider() {
  const [sliders ,setsliders] = useState([])
  const getSliderList = async () => {
    setsliders([])
    const q = query(collection(db, "sliders"));
    const querySnapShot = await getDocs(q);
    querySnapShot.forEach((doc) => {
    setsliders((prv=> [...prv , doc.data()]))
    });
  };
 useEffect(() => {
   getSliderList();
 }, []);
  return (
    <View>
        <Text
          style={[
            tailwind`font-bold text-lg  p-2`,
            { fontFamily: "outfit_bold" },
          ]}
        >
          # Special for you
        </Text>
  
      <FlatList
        data={sliders}
        style={{ paddingLeft: 20 }}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        renderItem={({ item }) => (
          <Image
            style={tailwind`rounded-lg mr-[15px]`}
            source={{ uri: item.ImageUrl }}
            width={300}
            height={150}
          />
        )}
      />
    </View>
  );
}
