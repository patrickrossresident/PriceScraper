require('isomorphic-fetch');
const dotenv = require('dotenv');
const Koa = require('koa');
const koaBody = require('koa-body');
const Router = require('koa-router');
const next = require('next');
const { default: createShopifyAuth } = require('@shopify/koa-shopify-auth');
const { verifyRequest } = require('@shopify/koa-shopify-auth');
const session = require('koa-session');
const http = require('http');
const https = require('https');
const axios = require('axios').default;
const cheerio = require("cheerio")
const fs = require('fs');
const { default: enforceHttps } = require('koa-sslify');
const schedule = require('node-schedule');


dotenv.config();

const port = parseInt(process.env.PORT, 10) || 5000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const { SHOPIFY_API_SECRET_KEY, SHOPIFY_API_KEY, domain } = process.env;

let pricesList = JSON.parse( fs.readFileSync('competitors.json') )
let token = '';

const getPrices = () => {
  return pricesList;
}

const updateMetafields = (priceList) =>{
  if(!priceList.length) {
    return
  }
  priceList.map(price => {
      const body = {
        "metafield": {
          "namespace": "competitors",
          "key": price.title, 
          "value": `${price.value},${Date.now()}`,
          "value_type": "string"
        }
      }
      console.log(token)
      axios({
        method: 'post',
        url: `https://${SHOPIFY_API_KEY}:${SHOPIFY_API_SECRET_KEY}@${domain}.myshopify.com/admin/api/2021-01/metafields.json`,
        data: JSON.stringify(body),
        headers:{
          "Content-type": "application/json",
          'X-Shopify-Access-Token': token
        }
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  })
}
const updateCompetitorsFile = (newPricesArr) => {
  var jsonContent = JSON.stringify(newPricesArr);
  console.log(jsonContent);
  
  fs.writeFile("competitors.json", jsonContent, 'utf8', function (err) {
      if (err) {
          console.log("An error occured while writing JSON Object to File.");
          return console.log(err);
      }
  
      console.log("JSON file has been saved.");
  });
}
const scrapePrices = async (competitors) => {
  const promicesArr = [];
  const newPricesArr = [];

  competitors.map( priceObj => {
    const scapePrice = fetch(priceObj.url)
    .then((responce) => {
      return responce.text()
    })
    .then((html) => {

      let $ = cheerio.load(html);
      
      let price = $(priceObj.path).prepend().text();
      newPricesArr.push({
        ...priceObj,
        value: price.trim() || '0'
      })
    })
    .catch(() => {
      newPricesArr.push({
        ...priceObj,
        value:'0'
      })

    })
    
    
    promicesArr.push(scapePrice);
  });

  await Promise.allSettled(promicesArr).then((response) => {
    pricesList = newPricesArr;
    updateCompetitorsFile(newPricesArr);
    //updateMetafields(newPricesArr);

  })
}

schedule.scheduleJob('59 * * * *', () =>{
  scrapePrices(pricesList);
})



app.prepare().then(() => {
  const server = new Koa();
  server.use(session({ secure: true, sameSite: 'none' }, server));

  server.keys = [SHOPIFY_API_SECRET_KEY];

  server.use(koaBody());

  const router = new Router({
    prefix: '/metafields'
  });

  
  router.get('/get', (ctx, next) => {
    ctx.response.status = 201;
    ctx.body = JSON.stringify(getPrices());
    next();
  })

  router.post('/', async (ctx, next) => {
    const competitors = JSON.parse(ctx.request.body);

    await scrapePrices(competitors);
    
    ctx.body = JSON.stringify(getPrices(competitors));
    
    
  });

  server.use(router.routes());

  server.use(async (ctx) => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
    ctx.res.statusCode = 200;
    return
  });

  
  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });;





});




