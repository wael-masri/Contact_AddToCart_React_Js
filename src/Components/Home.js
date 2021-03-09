import React ,{Fragment, useEffect,useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom';
const Home = () => {

const [ info , setInfo] = useState([])


//get data from json file    
useEffect (  () => {
axios.get('./Json/Datause.json').then( val => {

    setInfo(val.data.information)
   // console.log("from state",info);
})

},[])
 

const listOfInformation = () => {
return(<ul className='list-group'>
{
info.map(val => {
    return( <Fragment key={val.id}>

<li className='list-group-item' key={val.id} >
    Code : {val.id}
     Name : {val.name}
     <button className="btn btn-primary ml-3"><Link to={'/About/' + val.id} style={{color : 'white'}}>View</Link></button>

</li>
    </Fragment> 
    )
      
           
                        }
       )
}
       </ul>
      )   
    
                                }        



    

    
    
    
    
    return (
        <div>
            <h2> Home page</h2>
            <h3>List Persond :</h3>
            {listOfInformation()}
        </div>
    )
}

export default Home
