import React, {useState} from 'react';
import { useRouter } from 'next/router';
import { useAppContext } from '../../../context/state';

const Item = () => {
  const router = useRouter()
  const { id } = router.query;
  const {prices, updatePrice} = useAppContext();
  
  const curPrice = prices.filter(price => price.id == id);
  console.log(curPrice)
  if(curPrice.length == 0) return( <p>Item is removed</p>)
  const {title, url, path} = curPrice[0]; 
  const [newTitle, setTitle] = useState(title);
  const [newUrl, setUrl] = useState(url);
  const [newPath, setPath] = useState(path);


  const onSubmit = (e) => {
    e.preventDefault();
    updatePrice(id, newTitle, newUrl, newPath);
    router.push('/prices')
  }

  return (
    <div className="single-price-item-page">
      <div className="container">
        <h2>Title</h2>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input type="text" className="form-control" value={newTitle} onChange={(e) => setTitle(e.target.value) } required />
          </div>

          <div className="form-group">
            <label>URL</label>
            <input type="text" className="form-control" value={newUrl} onChange={(e) => setUrl(e.target.value) } required/>
          </div>

          <div className="form-group">
            <label>Path</label>
            <input type="text" className="form-control" value={newPath} onChange={(e) => setPath(e.target.value) } required/>
          </div>
          <button className='btn btn-primary' type="submit">Save</button>     
        </form>
      </div>
    </div>
  )
}

export default Item