import React, { useEffect } from 'react';
import { useAppContext } from '../context/state';
import Link from 'next/link';



const PriceList = () => {
  const {prices, removePrice, getAllPrices} = useAppContext();

  const renderFunc = () => {
    const pricesList = prices.map(({id, title, value}) => {
      const text = value == 0 ? 'Can\'t Scripe Price From This Resource' : value;
      return(
        <li key={id}>
          <Link href={`/prices/${id}`}>
            <div className="card">
              <h3>{title}</h3>
            
              <p className="price-val">{text || 'Not scraped yet' }</p>
              <button 
                className="btn btn-danger"
                onClick={(e) => {
                  e.preventDefault();
                  removePrice(id);
                }}
              >×</button>
            </div>
          </Link>
        </li>
      ) 
    })

    return(
      <div className="price-list">
        <ul>
          {pricesList}
        </ul>
      </div>
    )
  }
  
  useEffect(() => {
    if(!prices.length){
        getAllPrices()
    } else{
       renderFunc()
    }
  },[prices])

  return renderFunc()
}

export default PriceList;