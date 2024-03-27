import React, { useState } from "react";


function TestComp() {
    const [products, setproducts] = useState(
        [
            { id: 1, name: "FACEBOOK" },
            { id: 2, name: "WHATSAPP" },
            { id: 3, name: "EMAIL" },
        ]);

        const contact = ()=>{
          setproducts([...products,{ name:"Welcome To The page"}])
        }
    

    return (
        <div className="display">
            <h1>
                contact
                <div>{products.map(product =>
                    <div key={product.id}>
                        <span>{product.id} - {product.name}</span>
                    </div>
                )}
                </div>
                <button onClick={contact}>Choose</button>
            </h1>
        </div>
    )
}



export default TestComp