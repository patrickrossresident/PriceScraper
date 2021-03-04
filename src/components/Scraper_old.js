import React, {useEffect} from 'react';
import cheerio from "cheerio";
import {useAppContext} from '../context/state';

const Scraper = () => {
  const {prices, updateAllPrices} = useAppContext();

  const scrapeAllPrices = () => {
    const promicesArr = [];
    const newPricesArr = [];

    prices.map( priceObj => {
      
      const scapePrice = fetch(priceObj.url)
      .then((responce) => {
        return responce.text()
      })
      .then((html) => {
        let $ = cheerio.load(html);

        let price = $(priceObj.path).prepend().text();
        newPricesArr.push({
          ...priceObj,
          value: price || 'Can\'t get Price'
        })
        return price
      })
      
      
      promicesArr.push(scapePrice);
    });

    Promise.allSettled(promicesArr).then(() => {
      newPricesArr.forEach(priceObj => {
        const postBody = {
          "metafield": {
            "namespace": "competitors",
            "key": priceObj.title,
            "value": priceObj.value,
            "value_type": "string"
          }
        }
        fetch('/metafields', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(postBody)
        })
        .then((responce) => {
          return responce.json()
        })
        .then((body) => {
          console.log(body);
        })
      })

      
      updateAllPrices(newPricesArr)
    })
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