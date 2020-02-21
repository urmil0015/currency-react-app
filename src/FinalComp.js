import React from 'react'

function FinalComp(props){
    console.log(props.country == null)
    console.log(props.rate  == null)
    console.log(props.final  == null)
    console.log(Object.getOwnPropertyNames(props).length)
    
    if(props.country != null && props.rate  != null && props.final  != null)
    {
    return(
    <div>
        <h3>Currency you selected: {props.country}</h3>
        <h3>Conversion rate is: {props.rate} </h3>
        <h3>And the value based on your given price is: {props.final}</h3>
    </div>    
    )
    } else {
        return(
        
            <h1></h1>
            
        )
    }
}

export default FinalComp