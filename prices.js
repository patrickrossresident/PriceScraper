
const cheerio = require("cheerio")

let pricesList = [{id: '111', title:"Simba", url: 'https://simbasleep.com/products/simba-hybrid-pro-mattress', path: '.inline-block.text-36'}]

exports.getPrices = () => {
  return pricesList;
}

exports.setPrices = (prices) => {

  const promicesArr = [];
  const newPricesArr = [];
  console.log(prices)
  JSON.parse(prices).map( priceObj => {
    
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
    console.log(newPricesArr);
    pricesList = newPricesArr;
  })
  
}
