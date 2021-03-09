import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const Products = () => {

   
   
    const [ items , setItems] = useState([])

//get data from json file    
useEffect (  () => {
    axios.get('./Json/Datause.json').then( res => {
    
        setItems(res.data.items)
     //   console.log("from state",items);
    })
    
    },[])


















    //card item
    const cardItem = items.map(itemm => {
        return (
            <div className='col-md-4' key={itemm.id}>
            <div className="card" >
        <img src={itemm.img_link} className="card-img-top" alt="no image" />
        <div className="card-body">
        <h5 className="card-title">{itemm.title}</h5>
        <p className="card-text">Price : ${itemm.price}</p>
        <a href={"/Products/" + itemm.id} className="btn btn-primary">More Details</a>
        </div>
        </div>




                </div>
        )
    })
        
        

    



    //running
    return (
        
        <div className="container">
            <h2>products us</h2>
            <div className='row'>
               
                    {cardItem}
                
            </div>

        </div>
    )
}

export default Products
