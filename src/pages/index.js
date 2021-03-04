
import React from 'react'; 
import Link from 'next/link' 
const Index = () => (
  <div className="homepage">
    <h4 className="text-center">Welcome To Resident Price Scraper</h4>
    <Link href="/prices">
      <button  className="btn btn-primary" > 
        See Prices
      </button>
    </Link>
  </div>
);

export default Index;