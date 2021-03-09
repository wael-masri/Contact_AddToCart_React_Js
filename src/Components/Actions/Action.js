import React from 'react'
import {add_to_cart, clear_to_cart, remove_to_cart} from './Types';
//add
 export const addToCart = (productinfo , quantity) => {
   const action = {
       type:add_to_cart,
       productinfo,
       quantity,
       
   }
   console.log("from action add",action);
   return action
}


// remove
export const removeToCart = (index) => {
  const action = {
      type:remove_to_cart,
      index
      
  }
  console.log("from action remove",action);
  return action
}


// clear all
export const clearToCart = () => {
  const action = {
      type:clear_to_cart
      
      
  }
  console.log("from action clear",action);
  return action
}


