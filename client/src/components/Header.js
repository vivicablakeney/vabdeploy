import React from 'react'
import {Link} from 'react-router-dom';


function Header() {
return (
<header className='header'>
<div className='logo'>  </div>
<div className='navbar'>
<div className='icons'>
<div className='fas fa-bars' id='menu-btn'></div>
<a href="#" className='fas fa-shopping-cart'></a>
<div className='fas fa-user' id='login-btn'></div>
</div>


 
    
<Link to= '/'>Home </Link>
<Link to= '/contact'> Contact </Link>
<Link to= '/plans'> Plans </Link>
<Link to= '/services'> Services</Link>
<Link to= '/shop'> Shop </Link>
</div>

</header>
)
}

export default Header
