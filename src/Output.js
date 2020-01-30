import React from 'react';
import './main.css';
import Images from './Images';
import Main from './Main';
export default class Output extends React.Component{
 

    render(){
        return(
            <div >
                <div className="row col-md-2 col-sm-2 col-lg-2">
                    <Images />
                </div>
                <div className="col-md-10 col-sm-10 col-lg-10">
                <Main />
                </div>
                
            </div>
            
                 
                                

            
            

            // <div>
            //     {products.map((product, index)=>{
            //             return(
                            
            //                 <div className="container" key={index}>  
            //                     <div className="row">
            //                         <div className="col-md-2 col-sm-2 col-lg-2 s">
            //                             <img src={product.img} /> 
            //                         </div>
            //                         <div className="col-md-10 col-sm-10 col-lg-10 ">
            //                             <h4 className="title">Title&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: <i>{product.Title}</i></h4> 
            //                             <h5 className="id"><b>Id</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;{product.Id}</h5>
            //             <h5 className="maker"><b>Maker</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;{product.Maker}</h5>
            //                             <p className="Description"><b>Description: </b><i>{product.Description}</i></p>
            //                            <p><b>Url&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</b> <i>{product.Url}</i></p> 
            //                            <Click />
                                    
                                    
            //                         </div>
            //                     </div>
            //                 </div>
                              
            //             )
            //         })}
            //     </div>
            
        )
    }
}