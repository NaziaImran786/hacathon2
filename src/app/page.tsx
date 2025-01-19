//src\app\page.tsx

// import {importData} from "@/services/api";
import Category from "@/components/Category";
import CategoryImg from "@/components/CategoryImg";
import Discount from "@/components/Discount";
import FeatureSection from "@/components/FeatureSection";
import Hero from "@/components/Hero";
import LeatestProduct from "@/components/Leatest";
import Shopex from "@/components/Shopex";
import Trending from "@/components/Trending";



export default async function Home() {

// await importData()
  
//   await fetchData()
  return (
    <>    
    <Hero/>
    <FeatureSection/>
    <LeatestProduct />
    <Shopex />
    <Trending />
    <Discount/>
    <Category/>
    <CategoryImg/>
    
    </>
   );
 }

// function fetchData() {
//   throw new Error("Function not implemented.");
// }

