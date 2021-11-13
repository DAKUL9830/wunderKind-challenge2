
import './App.css';
import  React,{Component}from 'react';
import {PopupboxManager,PopupboxContainer } from 'react-popupbox';
import "react-popupbox/dist/react-popupbox.css";




class App extends Component {
  state = {
    products: [
      {title: 'RED', count: 0, price: 100},
      {title: 'BLUE', count: 0, price: 200},
      {title: 'GREEN', count: 0, price: 300},
      {title: 'BLACK', count: 0, price: 400},
    
    ]
  }
  
  onChange = (index, val) => {
    this.setState({
      products: this.state.products.map((product, i) => (
        i === index ? {...product, count: val} : product
      ))
    })
  }

  render () {
    return (
   
      <div>
        
       <div className='core'>
         <h2>Add the amount of products,that you prefer to buy</h2>
        <ProductList products={this.state.products} onChange={this.onChange} />
        <button id ='red' onClick={openPopupboxRed}>RED</button>
        <button  id="blue" onClick={openPopupboxBlue}>BLUE</button>
        <button  id="green" onClick={openPopupboxGreen}>GREEN</button>
        <div className="but"><button>BLACK</button>
        <span className="hover">Unfortunately, we don't have that color today</span></div>
       
        <Total products={this.state.products} />
        <DiscountPrice products={this.state.products} />

        </div>
        <PopupboxContainer {...popupboxConfigRed} />
        <PopupboxContainer {...popupboxConfigBlue} />
        <PopupboxContainer {...popupboxConfigGreen} />
        
        
      
        
      </div>
    )
  }
};

const openPopupboxRed=()=>{
  const content=(
  <>
   
    <p>Get this red product for 85 dollars with discount 15%</p>
    <a className="hyper-link" onClick={()=>window.open("https://www.kohls.com/checkout/shopping_cart.jsp")}><button>GO TO THE CART</button></a>

   
  </>
  )
  PopupboxManager.open({content})
}
const openPopupboxBlue=()=>{
  const content=(
  <>
   
    <p>Get this blue product for 170 dollars with discount 15%</p>
    <a className="hyper-link" onClick={()=>window.open("https://www.kohls.com/checkout/shopping_cart.jsp")}><button>GO TO THE CART</button></a>
   
  </>
  )
  PopupboxManager.open({content})
}
const openPopupboxGreen=()=>{
  const content=(
  <>
   
    <p>Get this green product for 255 dollars with discount 15%</p>
    <a className="hyper-link" onClick={()=>window.open("https://www.kohls.com/checkout/shopping_cart.jsp")}><button>GO TO THE CART</button></a>
   
  </>
  )
  PopupboxManager.open({content})
}

const popupboxConfigRed={
  titleBar:{
      enable:true,
      text:"ON SALE"
  },
  fadeIn:true,
  fadeInSpeed:500
}
const popupboxConfigBlue={
  titleBar:{
      enable:true,
      text:"ON SALE"
  },
  fadeIn:true,
  fadeInSpeed:500
}
const popupboxConfigGreen={
  titleBar:{
      enable:true,
      text:"ON SALE"
  },
  fadeIn:true,
  fadeInSpeed:500
}

const ProductList = ({ products, onChange }) => (
  <ul>
    {products.map((product, i) => (
      <li key={i}>
        {product.title}
        <input 
          type="text" 
          value={product.count}
          onChange={e => onChange(i, parseInt(e.target.value) || 0)}
        />
      </li>
    ))}
  </ul>
);

const Total = ({ products }) => (
  <h3>
    Price: 
    {products.reduce((sum, i) => (
      sum += i.count * i.price
    ), 0)}
  </h3>


)
const DiscountPrice = ({ products }) => (
  <h3>
    Price with Discount: 
    {products.reduce((sum, i) => (
      sum += (i.count * i.price)*0.85
    ), 0)}
  </h3>
 

)

export default App;
