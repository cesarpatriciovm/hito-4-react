import { useEffect, useState } from "react"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Pizza = () => {
    const [pizza, setPizza] = useState([])
    const getPizza = async () => {
        const res = await fetch ('http://localhost:5000/api/pizzas/p001')
        const pizza = await res.json()
        setPizza(pizza)

    }
    useEffect(() => {
        getPizza()
    }, [])

    return (
        <div className='d-inline-flex ms-5'>
            <Card style={{ width: '20rem', margin: '20px'}}>
            <Card.Img variant="top" src={pizza.img} />
            <Card.Body>
                <Card.Title style={{padding: '10px'}}>Pizza {pizza.name}</Card.Title>
                <Card.Subtitle style={{textAlign: 'center',fontWeight: 'lighter'}}>Ingredientes: </Card.Subtitle>
                <Card.Text style={{fontSize: '14px', paddingTop:'15px', textAlign:'center', fontWeight: 'lighter'}}>
                {pizza.ingredients.map((ingredient) => {
                    return <li style={{listStyle: 'none'}} key={ingredient}>🍕{ingredient}</li>
                })}
                </Card.Text>
                <Card.Text style={{textAlign: 'center'}}>Precio: {pizza.price.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}</Card.Text> 
                <Card.Text style={{textAlign: 'center'}}>Descripción: {pizza.desc}</Card.Text>               
                <Button variant="succes" className='border border-2'>Añadir 🛒</Button>
            </Card.Body>
            </Card>        
        </div>
    )
}

export default Pizza