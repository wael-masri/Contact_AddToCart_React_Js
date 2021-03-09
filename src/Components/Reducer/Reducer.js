import React from 'react'
import { add_to_cart, clear_to_cart, remove_to_cart } from '../Actions/Types';
// import { bake_cookie , read_cookie} from 'sfcookies';
const initialState = {
    cart: [
        { 

            product: {
                "id" : 1 ,
                "title" : "Airbus 1212",
                "description" : "This is first product ",
                "price" : 200,
                "img_link" : "/Images/g2.jpg"
            },
            quantity: 1






        }
    
    ]
 };       

const Reducer = (state=initialState,action) => {
    //add to cart
    // state=read_cookie("added");
    if(action.type == add_to_cart){
        console.log("from reducer own");
     
        let  new_state ={ cart : [
              ...state.cart,{
              product : action.productinfo,
              quantity : action.quantity
              
              }
          ]
        }
       console.log("reducer add",new_state);
    //    bake_cookie("added",new_state);
      return new_state ; 
   
    }
     
    //remove from cart
    else if(action.type == remove_to_cart){
        const item_remove = action.index
        //console.log("from reducer tow",action.index);
        const new_state = {...state};
        delete new_state.cart[item_remove];
        console.log("from reducer remove",new_state);
        // bake_cookie("added",new_state);
        return new_state;
     
   
    }
    // clear all from cart
    else if(action.type == clear_to_cart){
       
       
        const new_state = {...state};
        new_state.cart = [];
        console.log("from reducer clear",new_state);
        // bake_cookie("added",new_state);
        return new_state;
     
   
    }
    else{

      return state;

    }


   
}

export default Reducer;
