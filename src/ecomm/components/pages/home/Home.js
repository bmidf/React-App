import React from 'react';
import NewProducts from './banners/NewProducts'
import ServiceBanner from './banners/Services'
import WeeklyDiscover from './banners/WeeklyDiscover'
import TopSelling from './banners/TopSelling'
import '../../com-css/header.css'
import { useEffect, useState } from 'react';
function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.escuelajs.co/api/v1/products?limit=10&offset=10');
      const data = await response.json();
      setItems(data);
    }
    fetchData();
  }, []);
  return (
      <>
        <ServiceBanner/>
        <NewProducts items={items}/>
        <TopSelling items={items}/>
        <WeeklyDiscover items={items}/>
      </>
  );
}
export default Home;