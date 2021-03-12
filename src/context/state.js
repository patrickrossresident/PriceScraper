import { createContext, useContext, useState } from 'react';


const AppContext = createContext();

export function AppWrapper({ children }) {
  const [prices, setPrices] = useState([]);

  const updatePrice = (id, title, url, path) => {
    const newPrice = {
      id,
      url,
      path,
      title
    }
    const newPrices = prices.filter(price => price.id != id);
    console.log(newPrices);
    newPrices.push(newPrice);
    setPrices(newPrices);
  }

  const addPrice = (title, url, path) => {
    const id = Date.now();
    const newPrice = {
      id,
      url,
      path,
      title
    }
    
    setPrices([
      ...prices,
      newPrice
    ])
  }

  const removePrice = (id) => {
    const newPrices = prices.filter(price => price.id != id)
    
    setPrices(newPrices)
  }

  const getAllPrices = (id) => {
    return fetch('/metafields/get')
      .then(response => response.json())
      .then(data => {
        setPrices(data)
      })
  }



  const updateAllPrices = () => {
    return fetch('/metafields/', {
      method: 'POST',
      body: JSON.stringify(prices)
    })
      .then(response => response.json())
      .then(data => {
        setPrices(data)
        
      })
  }

  let sharedState = {prices, updatePrice, addPrice, removePrice, updateAllPrices, getAllPrices};
  
  return (
    <AppContext.Provider value={sharedState}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}