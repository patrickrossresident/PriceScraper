import React from 'react'; 
import PriceList from '../../components/PriceList';
import AddPrice from '../../components/AddPrice';
import Scraper from '../../components/Scraper';
const Prices = () => (
  <div className="prices-page container">
    <AddPrice />
    <PriceList  />
    <Scraper />
  </div>
);

export default Prices;