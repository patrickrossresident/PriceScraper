require('isomorphic-fetch');
const dotenv = require('dotenv');
const Koa = require('koa');
const koaBody = require('koa-body');
const Router = require('koa-router');
//const https = require('https')
const next = require('next');
const { default: createShopifyAuth } = require('@shopify/koa-shopify-auth');
const { verifyRequest } = require('@shopify/koa-shopify-auth');
const session = require('koa-session');

const axios = require('axios').default;
const cheerio = require("cheerio")



dotenv.config();

const port = parseInt(process.env.PORT, 10) || 5000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const { SHOPIFY_API_SECRET_KEY, SHOPIFY_API_KEY } = process.env;

let pricesList = [{id: '111', title:"Simba", url: 'https://simbasleep.com/products/simba-hybrid-pro-mattress', path: '.inline-block.text-36'}]
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
        url: `https://${SHOPIFY_API_KEY}:${SHOPIFY_API_SECRET_KEY}@nectarstaging.myshopify.com/admin/api/2021-01/metafields.json`,
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
    updateMetafields(newPricesArr);

  })
}


setInterval(()=>{
  let currentTime = new Date;
  currentTime = currentTime.getHours();
  if(currentTime == 0){  
    scrapePrices(pricesList)
  }
}, 120000)



app.prepare().then(() => {
  const server = new Koa();
  server.use(session({ secure: true, sameSite: 'none' }, server));

  server.keys = [SHOPIFY_API_SECRET_KEY];

  server.use(koaBody());

  const router = new Router({
    prefix: '/metafields'
  });
/** */
  
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

  server.use(
    createShopifyAuth({
      apiKey: SHOPIFY_API_KEY,
      secret: SHOPIFY_API_SECRET_KEY,
      scopes: ['write_products'],
      afterAuth(ctx) {
        const { shop, accessToken } = ctx.session;
        token = accessToken;
        console.log(accessToken)
        ctx.redirect('/');
      },
    }),
  );

  server.use(verifyRequest());
  
  server.use(async (ctx) => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
    ctx.res.statusCode = 200;
    return
  });

  

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });




});




