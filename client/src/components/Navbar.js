import { Component } from "react";
import React from "react";
import '../Styles.css/NavbarStyles.css';

class Navbar extends Component {
state = { navOpen: false };

render() {
return (
<nav>
<div className='logo'> <img src="images/logo1.png"></img></div>
<ul id="navbar" className={this.state.navOpen ? "active" : ""}>
<li>
<a className="active" href="/">Home</a>
</li>
{/* <li>
<a href="/services">Services</a>
</li> */}
<li>
<a href="/plans">Service</a>
</li>
<li>
<a href="/products">Shop</a>
</li>
<li>
<a href="/contact">Contact</a>
</li>
</ul>
</nav>
);
}
}

export default Navbar;
