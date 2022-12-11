/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import Container from '@mui/material/Container';
import './com-css/header.css'
import './com-css/shop.css'
import './com-css/details.css'
import ItemDetails from "./ItemDetails";
import Shop from "./pages/shop/Shop";
import Cart from "./pages/cart/Cart";
import ServiceBanner from "./pages/home/banners/Services";
import NewProducts from "./pages/home/banners/NewProducts";
import WeeklyDiscover from "./pages/home/banners/WeeklyDiscover";
import TopSelling from "./pages/home/banners/TopSelling";
import Header from '../re-components/Header';
import Home from "./pages/home/Home";
function ECommerce() {
    return (
        <Container fixed>
            <Router>
                <Header/>
                <Switch>
                    <Route exact path="/react-app">
                        <Home  />
                        {/* <ServiceBanner/>
                        <div className="boxNewProducts">
                            <span>NEW</span>
                            <span className="boxNewProductsSpan2">PRODUCTS</span>
                        </div>
                        <NewProducts/>
                        <WeeklyDiscover/>
                        <TopSelling/> */}
                    </Route>
                    <Route path="/Shop">
                        <Shop/>
                    </Route>
                    <Route path="/Cart">
                        <Cart/>
                    </Route>
                    <Route path="/item/:id">
                        <ItemDetails/>
                    </Route>
                </Switch>
            </Router>
        </Container>
    );
}

export default ECommerce;