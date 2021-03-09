import React,{useState ,useEffect} from "react";
import {getById} from "../Json/Functions";
import {connect} from 'react-redux';
import {addToCart} from './Actions/Action';



const Product = (props) => {
   const [ item , setitem] = useState({
    loading: true,
    quantity :1,
    products: {}
   })
    




    
    
 const id = props.match.params.id_item;
    useEffect (  () => {
       

        getById(parseInt(id))
            .then(product => {
                setitem({...item,
                    products : product,
                    loading: false
                });
           } )
        
    },[])



//valuue of qty
const handlchange =(e) => {
    const value =e.target.value
    
    if(value > 0){
        setitem({
            ...item,
            quantity : e.target.value
        })
}



}
    

        const product2 = item.products;
 
        var Qty = item.quantity;
     
     
        var istrue = false ;
        const added = (product2,quantity) => {
           props.cartItemscheck.map(item2 => {
                if( item2.product.title === product2.title ){
                     istrue = true ;
                } 
                
                
          })
          if(istrue){
              console.log("not added");
          }else{
            console.log(" added");
            props.addToCart(product2,quantity);  
            istrue = false ;
          }
        
       }
       
        return (
            <div>
                <div className={'row'}>
                    <div className="col-6">
                        <img src={product2.img_link} width={'100%'}/>
                    </div>
                    <div className="col-6">
                    <h1>{product2.title}</h1>

                        <p>Price: {product2.price}$</p>

                        <p>{product2.description}</p>

                        <br/><br/>

                        <input type="number" 
                        value={Qty}
                        onChange={handlchange} />
                        
                        <br /><br />
                        <p>total : ${product2.price * Qty}</p>
                        <button 
                        className="btn btn-primary"
                        onClick={() => added(product2,item.quantity)}>
                            Add to Cart
                        </button>
                        {/* () => props.addToCart(product2,item.quantity) */}
                    </div>
                </div>
            </div>
        );
    
}
export default connect(
    (state) => {
        return{
            cartItemscheck: state.cart
        }
    },{addToCart})(Product);