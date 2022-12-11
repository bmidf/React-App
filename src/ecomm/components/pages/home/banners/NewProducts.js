/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './home.css'
import { useEffect, useState } from 'react';

function NewProducts(items) {
  const products = items.items
  const productsFiler = products.filter((item, index) => index < 3)
  const history = useHistory();

  return (
    <>
      <div className='box-grid'>
        {productsFiler.map(item => (
            <Link key={item.id} to={`/item/${item.id}`} onClick={() => history.push(`/item/${item.id}`)}>
                  <div className="imageBoxProduct">
                    <img className="imageProduct" src={item.category.image} alt={item.title} />
                  </div>
                  <div className="titleNewProduct">
                    {item.title}
                  </div>
            </Link>
        ))}
      </div>
    </>
  );
}
export default NewProducts;