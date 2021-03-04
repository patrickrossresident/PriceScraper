import React, {useEffect} from 'react';
import cheerio from "cheerio";
import {useAppContext} from '../context/state';

const Scraper = () => {
  const {prices, updateAllPrices} = useAppContext();

  const scrapeAllPrices = () => {
    updateAllPrices()
  }

  setInterval(()=>{
    let currentTime = new Date;
    currentTime = currentTime.getHours();
    if(currentTime == 0){  
      scrapeAllPrices()
    }
  }, 3600000)

  return (
    <div className="main-btn-wrapper container">
      <button className="btn btn-primary" onClick={() => scrapeAllPrices()}>Save</button>
    </div>
  )
}

export default Scraper;