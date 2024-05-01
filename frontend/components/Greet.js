import React from 'react'


export default function Greet({name}){
    
    const greet = name
    ? `Hello, ${name}!` : 'Sorry, I do not know you!'
    
    
    return(
        <div>
            <h2> {greet}</h2>
        </div>
    )
}