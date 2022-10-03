import React from 'react';

function CarroCompras(props) {
    const {cartItems, onAddCarrito, onRemoveCarrito, onRemoveItemCarrito} = props

    const total = cartItems.reduce((a,c) => a + c.price * c.cantidad, 0)
    return (  
        <div>
            <h2>Mi carrito</h2>
            <div>
                {cartItems.length === 0 && <div>Su carrito de compras está vacío</div>}
            </div>
            <div><h2>Total: $ {total.toFixed(2)}</h2></div>
            {cartItems.map((item) => (
                <div key={item.id}>
                    <div>{item.name}</div>
                    <img src={item.image} alt="" />
                    <div>
                        <button onClick={() =>onAddCarrito(item)}>+</button>
                        <button onClick={() =>onRemoveCarrito(item)}>-</button>

                        <button onClick={() => onRemoveItemCarrito(item)}>eliminar</button>
                    </div>
                    <div>
                        {item.cantidad} x $ {item.price}
                    </div>

                </div>
            ))}
        </div>
    );
}

export default CarroCompras;