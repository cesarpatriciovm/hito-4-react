import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const MyNavbar = () => {
    const total = 25000;
    const token = false;
    return (
        <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary ">
            <Container fluid>
                <Navbar.Brand href="#">Pizzería Mamma Mía!</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                {token?
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        <Nav.Link href="#action1">🍕 Home</Nav.Link>
                        <Nav.Link href="#action2">🔐 Login</Nav.Link>            
                        <Nav.Link href="#">🔐 Register</Nav.Link>
                    </Nav>
                    <Nav.Link style={{color:'white'}} href="#">🛒Total: ${total.toLocaleString()}</Nav.Link>
                </Navbar.Collapse>
                :
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        <Nav.Link href="#action1">🍕 Home</Nav.Link>
                        <Nav.Link href="#action2">🔒 Logout</Nav.Link>            
                        <Nav.Link href="#">🔓 Profile</Nav.Link>
                    </Nav>
                    <Nav.Link style={{color:'white'}} href="#">🛒Total: ${total.toLocaleString()}</Nav.Link>
                </Navbar.Collapse>
            }
            </Container>
        </Navbar>
    );
}

export default MyNavbar;