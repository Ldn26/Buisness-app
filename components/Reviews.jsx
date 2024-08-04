import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import tailwind from 'twrnc'
import { Rating, } from "react-native-ratings";
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { db } from '../config/FirebaseConfig';
export default function Reviews({data}) {
    const [rate,setrate] = useState(4)
    const [comment, setcomment] = useState('');

    //  create an array of reviwes and add it to firebase  
const Submit = async ()=>{ 
  // get the document 
 const docRef = doc(db, "PopulareBuisnessCard",data?.id);
 await updateDoc(docRef ,{
  reviews : arrayUnion({
    rating: rate,
    comment : comment
  })
 })
}
  return (
    <View style={tailwind` p-[20px]  bg-white`}>
      <Text style={tailwind`font-bold text-black text-[20px]`}>Rating </Text>
      <Rating
        imageSize={20}
        onFinishRating={(rating) => {
          setrate(rating);
        }}
        style={[{ paddingVertical: 10, marginRight: 20 }, tailwind`p-2 mx-4`]}
      />

      <TextInput
        placeholder="Write your comment"
        numberOfLines={4}
        style={[
          tailwind`border p-[10px] mt-[10px] rounded-lg border-gray-400`,
          { textAlignVertical: "top" },
        ]}
        onChangeText={(value) => {setcomment(value)}}
      />
      <TouchableOpacity 
      onPress={Submit}
      disabled ={comment.length === 0 }
       style={tailwind`bg-[#7F57F1] p-[10px] mt-[10px] rounded-lg   ` }>
        <Text style={tailwind`text-white text-center`}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}