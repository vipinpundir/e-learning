import React from 'react'
import "./Cart.css"
import { useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';


const Cart = () => {
  const CartItems = useSelector(state => state.cart);
  let itemNum = 0
  let cartNum = CartItems.length;

  let path = ""
  let btnDis = true
  if (cartNum>0){
    path="/payment"
    btnDis= false
  }


  return (

    <div className=' container Cart'>

      <header className='mt-2 mb-4'>
        <h1>Shopping Cart</h1>
      </header>
      <div className="flex row justify-content-around">
        <div className="col-md-6">
          {CartItems.map(item => (
            <div key={item.name}>
              <div className="disNone"> {itemNum += item.price}</div>
              <div class="cart-item">
                <img src={item.img} alt="Product-img" />
                <div class="item-details">
                  <h3>{item.name}</h3>
                  <p>Price:{item.price}</p>
                  <Button  variant="danger">Remove</Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div class="total col-md-3">
          <h3>Total</h3>
          <h3>Sub-total: {itemNum}</h3>
          <Link to={path} ><Button  disabled={btnDis}  variant="outline-success">Pay</Button> </Link>
        </div>
      </div>
    </div>

  )
}

export default Cart