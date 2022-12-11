import React from 'react';
import NewProducts from './banners/NewProducts'
import ServiceBanner from './banners/Services'
import WeeklyDiscover from './banners/WeeklyDiscover'
import TopSelling from './banners/TopSelling'
import '../../com-css/header.css'

function Home() {
  return (
      <>
        <ServiceBanner/>
        <NewProducts/>
        <TopSelling/>
        <WeeklyDiscover/>
      </>
  );
}
export default Home;