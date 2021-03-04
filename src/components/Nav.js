import React from 'react';
import Link from 'next/link';



const Nav = () => {
  return(
    <nav className="nav">
     <ul>
       <li>
       <Link href="/ ">
          home
        </Link>
       </li>
       <li>
       <Link href="/prices">
          Your Competitor Prices
        </Link>
       </li>
     </ul>
    </nav>
  )
}

export default Nav;