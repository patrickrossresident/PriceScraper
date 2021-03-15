import React from 'react';
import {useAppContext} from '../context/state';

const Scraper = () => {
  const {updateAllPrices} = useAppContext();

  const scrapeAllPrices = () => {
    updateAllPrices()
  }

  return (
    <div className="main-btn-wrapper container">
      <button className="btn btn-primary" onClick={() => scrapeAllPrices()}>Save</button>
    </div>
  )
}

export default Scraper;