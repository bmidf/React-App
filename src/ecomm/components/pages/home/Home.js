import React from 'react';
import NewProducts from './banners/NewProducts'
import ServiceBanner from './banners/Services'
import WeeklyDiscover from './banners/WeeklyDiscover'
import TopSelling from './banners/TopSelling'
import '../../com-css/header.css'
import { useEffect, useState } from 'react';
import Companies from './banners/Companies';
function Home() {

  // console.log(items.events);
  return (
      <>
        <ServiceBanner/>
        <NewProducts/>
        <Companies/>
        {/* <TopSelling items={items}/>
        <WeeklyDiscover items={items}/> */}
      </>
  );
}
export default Home;