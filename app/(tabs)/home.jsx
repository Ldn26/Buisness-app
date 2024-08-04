import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Header from '../../components/home/Header';
import Slider from '../../components/home/Slider';
import Category from '../../components/home/Category';
import PopularBuisnessCard from '../../components/home/PopularBuisnessCard';
export default function home() {
  
  return (
    <ScrollView>
   <Header/>
<Slider/>
<Category/>
<PopularBuisnessCard/>
   
    </ScrollView>
  );
}