import React, {useState} from 'react';
import classNames from 'classnames';
import { useAppContext } from '../context/state';

const AddPrice = () => {

  const {addPrice} = useAppContext();
  
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [path, setPath] = useState('');
  const [visible, setVisibility] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    addPrice(title, url, path);
    setTitle('');
    setUrl('');
    setPath('');
    setVisibility(false)
  }
  const btnClasses = classNames('btn', 'btn-secondary', 'trigger', { 'hidden': visible })
  const blockClasses = classNames('add-price', { 'hidden': !visible })

  return (
    <div className="add-price-wrap ">
       <button className={btnClasses} type="submit" onClick={ () => {setVisibility(true)} } >Add New</button>  
      <div className={blockClasses}>
        <h2>Create New Price</h2>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value) } required />
          </div>

          <div className="form-group">
            <label>URL</label>
            <input type="text" className="form-control" value={url} onChange={(e) => setUrl(e.target.value) } required/>
          </div>

          <div className="form-group">
            <label>Path</label>
            <input type="text" className="form-control" value={path} onChange={(e) => setPath(e.target.value) } required/>
          </div>
          <button className='btn btn-primary' type="submit">Save</button>     
        </form>
      </div>
    </div>
  )
}

export default AddPrice;