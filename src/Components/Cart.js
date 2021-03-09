import react from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux';
import {removeToCart , clearToCart} from './Actions/Action';
const Cart = (props) => {

   
  
    //card item
    const cardItem = props.cartItems.map((values,index)=> {
       
       
        return (
            <div className='col-md-3' key={values.product.id}>
            <div className="card" >
        <img src={values.product.img_link} className="card-img-top" alt="no image" />
        <div className="card-body">
        <h5 className="card-title">{values.product.title}</h5>
        <p className="card-text">Price : ${values.product.price}</p>
        <p className="card-text">Quantity : {values.quantity}</p>
        <p className="card-text">Total : ${values.product.price}</p>
        <button 
        className="btn btn-danger"
        onClick={ () => props.removeToCart(index)}>
        <i  className='fas ico'>&#xf217;</i>
            Delete</button>
        </div>
        </div>




                </div>
        )
       
       
    })
        
        

    



    //running
    return (
        
        <div className="container">
            <h2>Cart page</h2>
            <div className='row'>
               
                    {cardItem}
              
                
            </div>
            <br />
            <br />
    
            <h3>Total : ${props.total}</h3>
                <button className='btn-block btn btn-primary'
                onClick={props.clearToCart}>Place Order</button>
                <br />
            <br />
        </div>
    )
}

export default connect( (state) => {
    return{
        cartItems: state.cart,
        total: state.cart.reduce((total, item) => total + item.quantity * item.product.price, 0),
    }
},{removeToCart , clearToCart})(Cart)