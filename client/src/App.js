import { BrowserRouter, Routes, Route } from "react-router-dom";
// import React from "react";
import ReactDOM from "react-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Plans from "./pages/Plans";
import Products from "./pages/Products";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       {/* <Router> */}
//       <BrowswerRouter>

//         <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           {/* <Route exact path="/" element={<Home />} /> */}
//           <Route path="/plans" element={<Plans />} />
//           <Route path="/products" element={<Products />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       {/* </Router> */}
//       </BrowswerRouter>
//       <Footer />
//     </div>
//   )
// }

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="plans" element={<Plans />} />
          <Route path="products" element={<Products />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

