import Card from 'react-bootstrap/Card';
import imgHeader from '../assets/img/Header.jpg'

const Header = () => {
    return (
        <div className='card border border-0 rounded-0'>
            <Card className="bg-dark text-white text-center border border-0 rounded-0">
                <Card.Img src={imgHeader} alt="Card image"/>
                <Card.ImgOverlay>
                <Card.Title style={{paddingTop:'70px', fontSize:'40px'}}>¡Pizzería Mamma Mía!</Card.Title>
                <Card.Text>
                    ¡Tenemos las mejores pizzas que podrás encontrar!
                </Card.Text>
                </Card.ImgOverlay>
            </Card>
        </div>
    )
}

export default Header;