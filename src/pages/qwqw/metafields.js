
const dotenv = require('dotenv');
console.log(dotenv)
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '100kb',
    },
  },
}

const handler = (req, res) => {
  console.log(req.body)
  res.status(200).json({status: 'ok'})
};
export default handler;