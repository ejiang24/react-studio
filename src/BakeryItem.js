import React from 'react'

export default function BakeryItem(props) {
    const [count, setCount] = React.useState(0);
    
    return (
        <div className="menu-item">
            <h3>{props.name}</h3>
            <p>${props.price}</p>
            <p>{props.desc}</p>
            <img src={props.image}></img>

            <button onClick={() => {
                props.func(props.name, props.price);
                setCount(count => count + 1);
            }
                }>Add to Cart</button>
        </div>
        
    );
}