import { useState } from 'react';
import { pizzaCart as initialCart } from '../pizzas';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Cart = () => {
    const [cart, setCart] = useState(initialCart);

    const removePizza = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    const addPizza = (id) => {
        setCart(cart.map(item =>
            item.id === id ? { ...item, count: item.count + 1 } : item
        ));
    };

    const reducePizza = (id) => {
        setCart(prevCart => {
            const updatedCart = prevCart.map(item =>
                item.id === id
                    ? { ...item, count: Math.max(item.count - 1, 0) }
                    : item
            );
            return updatedCart.filter(item => item.count > 0);
        });
    };

    const totalQuantity = () => {
        return cart.reduce((total, item) => total + item.count, 0);
    };

    const totalPrice = () => {
        return cart.reduce((total, item) => total + item.price * item.count, 0);
    };

    return (
        <div>
            <h2>Carrito de Compras</h2>
            {cart.length === 0 ? (
                <p>El carrito está vacío</p>
            ) : (
                <div>
                    <ul>
                        {cart.map(item => (
                            <li key={item.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                                <img src={item.img} alt={item.name} style={{ width: '100px', marginRight: '15px' }} />
                                <div>
                                    <ListGroup variant="flush">
                                    <ListGroup.Item>Pizza {item.name}</ListGroup.Item>
                                    <ListGroup.Item>Precio: ${item.price}</ListGroup.Item>
                                    <ListGroup.Item>Cantidad: {item.count}</ListGroup.Item>
                                    </ListGroup>
                                    <Button variant="primary" onClick={() => addPizza(item.id)}>+</Button>
                                    <Button variant="secondary" className='m-1' onClick={() => reducePizza(item.id)}>-</Button>
                                    <Button variant="danger" onClick={() => removePizza(item.id)}>Eliminar</Button>
                                    <hr />
                                </div>
                            </li>
                        ))}
                    </ul>
                    <Card className='m-1'>
                        <Card.Title >Total Productos: {totalQuantity()}</Card.Title>
                        <Card.Title >Total Precio: ${totalPrice()}</Card.Title>
                        <Button className='m-1'>Pagar</Button>
                    </Card>
                </div>
            )}
        </div>
    );
};

export default Cart;