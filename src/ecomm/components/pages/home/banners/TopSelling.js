/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import happyGuy from '../../../../assets/images/happyGuy.png'
import { Link, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';


const TopSelling = (items) => {
    const topSelling = items.items


    // filter top selling to 2 items
    const topSellingFilter = topSelling.filter((item, index) => index < 2)


      
        const history = useHistory();
      
    return (
        <>
        <div className="weeklyDiscover">
            <div className='box-grid-weekly'>
                        <div className="boxWeeklyProducts">
                            <div className='weeklySpans'>
                                <span>MACC</span>
                                <span className="boxWeeklyProducts2">TOP SELLINGS</span>
                            </div>
                            <button>VIEW ALL</button>
                        </div>
                    <div className="weeklyColumn">
                {topSellingFilter.map(item => (
                    <Link key={item.id} to={`/item/${item.id}`} onClick={() => history.push(`/item/${item.id}`)}>
                        <div className="weeklyImageBoxProduct">
                            <img className="imageProduct" src={item.category.image} alt={item.title} />
                        </div>
                        <div className="titleWeeklyProduct">
                            {item.title}<br/>${item.price}
                        </div>
                    </Link>
                ))}
                </div>
            </div>
            <div className='weeklyImage'>
                <img src={happyGuy} alt="weekly-discover"/>
            </div>
        </div>
        </>
    )
}
export default TopSelling