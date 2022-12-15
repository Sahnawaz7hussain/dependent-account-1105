import React from "react";
import { Beverages } from "../Components/Homepage/Beverages";
import Slider from "../Components/Homepage/Carousel";
import { CleaningHousehold } from "../Components/Homepage/CleaningHousehold";
import { FruitsandVegetables } from "../Components/Homepage/FruitsandVegetables";
import { BeautyandHygiene } from "../Components/Homepage/BeautyandHygiene";
import { SnacksStore } from "../Components/Homepage/SnacksStore";
import { YourDailyStaples } from "../Components/Homepage/YourDailyStaples";
import { BankOffers } from "../Components/Homepage/BankOffers";
import { TopOffers } from "../Components/Homepage/TopOffers";
import BottomCarousel from "../Components/Homepage/BottomCarousel";
import { BrandStore } from "../Components/Homepage/BrandStore";
import Read from "../Components/Homepage/Read.jsx";
import { Menus } from "../Components/Homepage/Menus";


const Homepage = () => {
  return (
    <div style={{width:"80%", margin:"auto"}}>
      <br /><br />
      <Slider />
      <br /><br />
      <Menus />
      <br /> <br />
      <BankOffers />
      <br /><br />
      <TopOffers />
      <br /><br />
      <FruitsandVegetables />
      <br /><br />
      <YourDailyStaples />
      <br /><br />
      <Beverages />
      <br /><br />
      <SnacksStore /> 
      <br /><br />
      <CleaningHousehold />
      <br /><br />
      <BeautyandHygiene />
      <br /><br />
      <BottomCarousel />
      <br /><br />
      <BrandStore />
      <br /> <br />
      <Read />
      <br /> <br />
      
    </div>
  );
};


export default Homepage;
