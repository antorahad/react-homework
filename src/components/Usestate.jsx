import { useState } from "react"

export default function Usestate ({product}){
    const [count, setCount] = useState(0);

    const addCart = () => {
        const newQuantity = count + 1;
        setCount(newQuantity); 
    }
    return(
        <>
            <div className="test-card">
                <h3>{product.name}</h3>
                <p>Price: {product.price} TK</p>
                <p>Quantity: {count}</p>
                <button onClick={addCart}>Add To Cart</button>
            </div>
        </>
    )
}