import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import { useState } from 'react';
import CartList from './components/CartList';

function App() {

  const [product, setProduct] = useState([
    {
      url: 'https://m.media-amazon.com/images/I/416JeZoF8tL._SY445_SX342_.jpg',
      name: 'The Alchemist',
      category: 'Books',
      seller: 'AMZ Seller',
      price: 800
    },
    {
      url: 'https://m.media-amazon.com/images/I/41C-012Es8L._SY445_SX342_.jpg',
      name: 'Atomic Habits',
      category: 'Books',
      seller: 'AMZ Seller',
      price: 900
    },
    {
      url: 'https://m.media-amazon.com/images/I/51mN3bY0JjL._SY445_SX342_.jpg',
      name: 'The Subtle Art of Not Giving a F*ck',
      category: 'Books',
      seller: 'AMZ Seller',
      price: 1000
    },
    {
      url: 'https://m.media-amazon.com/images/I/51X4eBEqyqL._SY445_SX342_.jpg',
      name: 'It Ends With Us',
      category: 'Books',
      seller: 'AMZ Seller',
      price: 1500
    },
  ])

const[cart, setCart] = useState([])
const [showCart, setShowCart] = useState(false)

const addToCart = (data) =>{
  setCart([...cart, { ...data , quantity:1} ])
}
const handleShow=(value)=>{
  setShowCart(value)
}

  return (
    <div>
      <Header count={cart.length} 
        handleShow={handleShow}></Header>
      {
        showCart ?
        <CartList cart={cart} ></CartList> : 
        <ProductList product={product} addToCart={addToCart}></ProductList>
      }
      
      
      
    </div>
      
  );
}

export default App;
