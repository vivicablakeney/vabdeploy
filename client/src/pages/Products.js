import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import '../Styles.css/card.css';

const Products = () => {
  const [Products, setProducts] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(150);
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [sortOrder, setSortOrder] = useState('asc');


  //The component uses the useState hook to create state variables to keep track of the current products, 
  //minimum and maximum prices, selected category??, and sort order. 
  //The setProducts function is used to update the Products state variable with the data fetched from a server using axios.
  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const res = await axios.get("http://localhost:8005/products");
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllProducts();
  }, [category, price]);
  const catgoryFilterHandler = (e) => {
    setCategory(e.target.value);
    console.log(e.target.value)
    }

  const handlePriceFilter = (e) => {
    const { name, value } = e.target;
    if (name === 'minPrice') {
      setMinPrice(value);
    } else if (name === 'maxPrice') {
      setMaxPrice(value);
    }
  };

  const handleSortOrder = (e) => {
    setSortOrder(e.target.value);
  };

  const filteredProducts = Products.filter(
    (product) => product.price >= minPrice && product.price <= maxPrice
  ).sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.price - b.price;
    } else if (sortOrder === 'desc') {
      return b.price - a.price;
    } else {
      return 0;
    }
  });

  return (
    <div>
      <h1>Shopping Time!
      </h1>
      <div className='filter-container'>
        <label htmlFor='sortOrder'>Sort Order:</label>
        <select name='sortOrder' id='sortOrder' value={sortOrder} onChange={handleSortOrder}>
          <option value='asc'>Lowest to Highest</option>
          <option value='desc'>Highest to Lowest</option>
        </select>
        <label htmlFor='minPrice'>Min Price:</label>
        <input type='number' name='minPrice' id='minPrice' value={minPrice} onChange={handlePriceFilter} />
        <label htmlFor='maxPrice'>Max Price:</label>
        <input type='number' name='maxPrice' id='maxPrice' value={maxPrice} onChange={handlePriceFilter} />
      </div>
      <div className="gridContainer">
        {filteredProducts.map((product) => (
          <div key={product.id} className="card">
            <img src={product.image_url} alt={product.title} className="productIMG" />
            <h2 className="productTitle">{product.title}</h2>
            <h3 className="productPrice">{product.price}</h3>
            <p className="productDescription">{product.description}</p>
            <button className="cardbutton">Add To Cart</button>
          </div>
        ))}
      </div>
      
      </div>)}
      export default Products;



// const Products = () => {
//   const [Products, setProducts] = useState([]);
//   const [minPrice, setMinPrice] = useState(0);
//   const [maxPrice, setMaxPrice] = useState(9999);
//   // const [sortOrder, setSortOrder] = useState('asc');

//   useEffect(() => {
//     const fetchAllProducts = async () => {
//       try {
//         const res = await axios.get("http://localhost:8005/products");
//         setProducts(res.data);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     fetchAllProducts();
//   }, []);
//   console.log(Products);

  
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const res = await axios.get('http://localhost:8005/products');
//         setProducts(res.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchProducts();
//   }, []);
//   const handlePriceFilter = (e) => {
//     const { name, value } = e.target;
//     if (name === 'minPrice') {
//       setMinPrice(value);
//     } else if (name === 'maxPrice') {
//       setMaxPrice(value);
//     }
//   };
//   const handleSortOrder = (e) => {
//     setSortOrder(e.target.value);
//   };
//   const filteredProducts = Products.filter(
//     (product) => product.price >= minPrice && product.price <= maxPrice
//   ).sort((a, b) => {
//     if (sortOrder === 'asc') {
//       return a.price - b.price;
//     } else if (sortOrder === 'desc') {
//       return b.price - a.price;
//     } else {
//       return 0;
//     }
//   });

//   return (
//     <div >
//       <h1>Shop</h1>
//       <div className='filter-container'>
//         <label htmlFor='sortOrder'>Sort Order:</label>
//         <select name='sortOrder' id='sortOrder' value={sortOrder} onChange={handleSortOrder}>
//           <option value='asc'>Lowest to Highest</option>
//           <option value='desc'>Highest to Lowest</option>
//         </select>
      
//       </div>
//       <div className="gridContainer">
//         {Products.map((products) => (
//           <div key={products.id} className="card">
//             <img
//               src={products.image_url}
//               alt={products.title}
//               className="productIMG" />
//               <h2 className="producTitle">{products.title}</h2>
//               <h3 className="productPrice">{products.price}</h3>
//               <p className="productDescription">{products.description}</p>
//               <button className="cardbutton">Add To Cart</button>
//             </div>
          
//         ))}
//         </div>
//       </div>

//   );
// };
// export default Products;

//import React from 'react';
// // import Products from '../components/Products1';
// import Filter from '../components/Filter';

// function Products() {
// return (
//   //   <div className="grid-container">
//   // <div className="card">
//   //   {/* add class to all product imgs */}
//   //   <img src="images/Kween.jpg" alt="Liquid Lipstick" style={{width: "100%"}} />
//   //   <h1>Kween Matte Liquid Lipstick</h1>
//   //   <p className="price">$12.99</p>
//   //   <p>Vibrant maroon stay all day lipstick, perfect for date night!</p>
//   //   <p><button>Add to Cart</button></p>
//   // </div>
//   // <div className="card">
//   //   <img src="images/leo.jpg" alt="Liquid Lipstick" style={{width: "100%"}} />
//   //   <h1>Leo Matte Liquid Lipstick</h1>
//   //   <p className="price">$12.99</p>
//   //   <p>Vibrant maroon stay all day lipstick, perfect for date night!</p>
//   //   <p><button>Add to Cart</button></p>
//   // </div>
//   // <div className="card">
//   //   <img src="images/bare.jpg" alt="Liquid Lipstick" style={{width: "100%"}} />
//   //   <h1>Bare Matte Liquid Lipstick</h1>
//   //   <p className="price">$12.99</p>
//   //   <p>Vibrant maroon stay all day lipstick, perfect for date night!</p>
//   //   <p><button>Add to Cart</button></p>
//   // </div>
//   // <div className="card">
//   //   <img src="images/stella.jpg" alt="Liquid Lipstick" style={{width: "100%"}} />
//   //   <h1>Stella Matte Liquid Lipstick</h1>
//   //   <p className="price">$12.99</p>
//   //   <p>Vibrant maroon stay all day lipstick, perfect for date night!</p>
//   //   <p><button>Add to Cart</button></p>
//   // </div>
//   // <div className="card">
//   //   <img src="images/scarlet.jpg" alt="Liquid Lipstick" style={{width: "100%"}} />
//   //   <h1> Scarlet Matte Liquid Listick</h1>
//   //   <p className="price">$12.99</p>
//   //   <p>Vibrant maroon stay all day lipstick, perfect for date night!</p>
//   //   <p><button>Add to Cart</button></p>
//   // </div>
//   // <div className="card">
//   //   <img src="images/nubia.jpg" alt="Liquid Lipstick" style={{width: "100%"}} />
//   //   <h1>Nubia Matte Liquid Listick</h1>
//   //   <p className="price">$12.99</p>
//   //   <p>Vibrant maroon stay all day lipstick, perfect for date night!</p>
//   //   <p><button>Add to Cart</button></p>
//   // </div>
//   // <div className="card">
//   //   <img src="images/venus.webp" alt="Liquid Lipstick" style={{width: "100%"}} />
//   //   <h1>Venus Matte Liquid Listick</h1>
//   //   <p className="price">$12.99</p>
//   //   <p>Vibrant maroon stay all day lipstick, perfect for date night!</p>
//   //   <p><button>Add to Cart</button></p>
//   //   </div>
//   //   <div className="card">
//   //   <img src="images/brat.webp" alt="Liquid Lipstick" style={{width: "100%"}} />
//   //   <h1>Venus Matte Liquid Listick</h1>
//   //   <p className="price">$12.99</p>
//   //   <p>Vibrant maroon stay all day lipstick, perfect for date night!</p>
//   //   <p><button>Add to Cart</button></p>
//   //   </div>
//   //   <div className="card">
//   //   <img src="images/naila.webp" alt="Liquid Lipstick" style={{width: "100%"}} />
//   //   <h1>Venus Matte Liquid Listick</h1>
//   //   <p className="price">$12.99</p>
//   //   <p>Vibrant maroon stay all day lipstick, perfect for date night!</p>
//   //   <p><button>Add to Cart</button></p>
//   //   </div>
//   //   <div className="card">
//   //   <img src="images/keychain.jpg" alt="lip gloss key chain" style={{width: "100%"}} />
//   //   <h1>Lip Gloss Keychain</h1>
//   //   <p className="price">$12.99</p>
//   //   <p>Never lose your lip gloss again with our convenient keychain!</p>
//   //   <p><button>Add to Cart</button></p>
//   //   </div>
//   //   <div className="card">
//   //   <img src="images/stack.webp" alt="liquid lipstick" style={{width: "100%"}} />
//   //   <h1>VAB Collection</h1>
//   //   <p className="price">$120.00</p>
//   //   <p>Vibrant maroon stay all day lipstick, perfect for date night!</p>
//   //   <p><button>Add to Cart</button></p>
//   //   </div>
//   //   <div className="card">
//   //   <img src="images/double.jpg" alt="Liquid Lipstick" style={{width: "100%"}} />
//   //   <h1>Two4One</h1>
//   //   <p className="price">$20.00</p>
//   //   <p>Vibrant maroon stay all day lipstick, perfect for date night!</p>
//   //   <p><button>Add to Cart</button></p>
//   //   </div>
// {/* <div>

// </div>
// <h1 className='heading'> our <span> products </span> </h1>

// </div>
// )
// }

// export default Products;
