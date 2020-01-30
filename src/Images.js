import React from 'react';
import products from './products.json';
import './main.css';

export default class Main extends React.Component{
 

    render(){
        return(
            <div>
                {products.map((product, index)=>{
                        return(
                            
                            <div key={index}>  
                                
                                    <img src={product.img} alt="not found" /> 
                                    
                            </div>
                        )
                    })}
                </div>
            
        )
    }
}