import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux';
const Carticon = (props) => {

  
    return (
        <div>
            <Link to='/Cart'>
            <i  className='fas ico'>&#xf217;</i>
            <span className='badge badge-danger'>{props.totalQuantity}</span>
            </Link>
        </div>
    )
}

export default connect( (state) => {
    return { totalQuantity: state.cart.reduce((total, item) => total + parseInt(item.quantity) , 0)}
},null)(Carticon);
