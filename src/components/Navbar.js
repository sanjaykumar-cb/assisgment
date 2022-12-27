import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import '../App.css'


function Navbar() {

    return (
        <>

            <div className='styles'>
                <Container>
                    <Nav >
                        <Nav.Link href="for">For </Nav.Link>
                        <Nav.Link href="if">if else</Nav.Link>
                        <Nav.Link href="switch">Switch</Nav.Link>
                        <Nav.Link href="recursion">Recursion</Nav.Link>
                        <Nav.Link href="binary">Binary search tree</Nav.Link>
                        <Nav.Link href="closure">Closure</Nav.Link>
                        <Nav.Link href="get">Get ElementBy Id</Nav.Link>
                        <Nav.Link href="/prime">PrimeNumber</Nav.Link>
                        <Nav.Link href='while'>While</Nav.Link>
                    </Nav>
                </Container>
            </div>
        </>
    );
}

export default Navbar;