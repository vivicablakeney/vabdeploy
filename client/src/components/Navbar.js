// // import { Component } from "react";
// import React from "react";
// import { BrowserRouter, Route, Link } from "react-router-dom";
// import { Link } from "react-router-dom";
// import "../Styles.css/NavbarStyles.css";

// class Navbar () {
//   state = { navOpen: false };

//   render() {
//     return (
//       <nav>
//         <div className="logo">
//           {" "}
//           <img src="images/logo1.png" alt="logo"></img>
//         </div>
//         <ul id="navbar" className={this.state.navOpen ? "active" : ""}>
//           <li>
//             <Link className="active" to ="/">
//               Home
//             </Link>
//           </li>
//           <li>
//           <Link to="/plans">Plans</Link>
//         </li>
//           <li>
//             <Link to="/products">Shop</Link>
//           </li>
//           <li>
//             <Link to="/contact">Contact</Link>
//           </li>
//         </ul>
//       </nav>
//     );
//   }
// }

// export default Navbar;

import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "../Styles.css/NavbarStyles.css";

class Navbar extends Component {
  state = { navOpen: false };

  render() {
    return (
      <nav>
        <div className="logo">
          <img src="images/logo1.png" alt="logo" />
        </div>
        <ul id="navbar" className={this.state.navOpen ? "active" : ""}>
          <li>
            <Link className="active" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/plans">Plans</Link>
          </li>
          <li>
            <Link to="/products">Shop</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
