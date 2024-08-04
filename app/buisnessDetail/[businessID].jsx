import { View, Text, ActivityIndicator, ScrollView,} from "react-native";
import React, { useState, useEffect } from "react";
import tailwind from "twrnc";
import {  useLocalSearchParams, useRouter } from "expo-router";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/FirebaseConfig";

import Intro from "../../components/BusinessDetail/Intro";
import ActionButtons from "../../components/BusinessDetail/ActionButtons";
import AboutDetails from "../../components/BusinessDetail/AboutDetails";
import Reviews from "../../components/Reviews";
const BusinessID = () => {
  const [data, setData] = useState(null);
  const { businessID } = useLocalSearchParams();
  const [loading, setLoading] = useState(false);

  const getDetails = async () => {
    setLoading(true);
    try {
      const docRef = doc(db, "PopulareBuisnessCard", businessID);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log(docSnap.data());
        setData({id:docSnap.id,...docSnap.data()});
      } else {
        console.log("Document not found");
      }
    } catch (error) {
      console.error("Error fetching document:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (businessID) {
      getDetails();
    }
  }, [businessID]);

  return (
      <View>

      
        {loading ? (
          <ActivityIndicator size={"large"} />
        ) : (
          <View style={tailwind``}>
            {data ? (
              <ScrollView>
                <Intro data={data} />
                <ActionButtons data={data} />
               <AboutDetails data={data} />
<Reviews data={data}/>
              </ScrollView>
            ) : (
              <Text>No data available</Text>
            )}
          </View>
        )}
      </View>
 
  );
};

export default BusinessID;
