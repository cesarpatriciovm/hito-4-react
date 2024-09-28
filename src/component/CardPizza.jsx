import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const CardPizza = (props) => {    
    return (
        <div className='d-inline-flex ms-5'>
            <Card style={{ width: '20rem', margin: '20px'}}>
            <Card.Img variant="top" src={props.img} />
            <Card.Body>
                <Card.Title style={{padding: '10px'}}>Pizza {props.name}</Card.Title>
                <Card.Subtitle style={{textAlign: 'center',fontWeight: 'lighter'}}>Ingredientes: </Card.Subtitle>
                <Card.Text style={{fontSize: '14px', paddingTop:'15px', textAlign:'center', fontWeight: 'lighter'}}>
                {props.ingredients.map((ingredient, i) => (
                <li style={{listStyle: 'none'}} key={i}>🍕{ingredient}</li>
                ))}
                </Card.Text>
                <Card.Text style={{textAlign: 'center'}}>Precio: {props.price.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}</Card.Text>                
                <Button variant="primary" className='p-2 ms-5'>Ver más 👀</Button>
                <Button variant="succes" className='border border-2 p-2 m-2'>Añadir 🛒</Button>
            </Card.Body>
            </Card>        
        </div>
    );
};

export default CardPizza;

