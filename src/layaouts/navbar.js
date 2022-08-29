import { Navbar, Nav, Container} from 'react-bootstrap'
import { Outlet, Link } from 'react-router-dom'


const NavBarExample = () => {
  return (
    <>
    <Navbar className='navBG' variant='dark' expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
        Noticieros
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto mx-auto mb-2 mb-lg-0">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="actualidad">Actualidad</Nav.Link>
            <Nav.Link as={Link} to="economia">Economia</Nav.Link>
            <Nav.Link as={Link} to="deporte">Deportes</Nav.Link>
            <Nav.Link as={Link} to="sesion">
            <button type="button" class="btn btn-warning">
                <Link className="nav-link" to='sesion'>Iniciar Sesion</Link>
            </button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <section>
        <Outlet>

        </Outlet>
    </section>
    </>
)
}

export default NavBarExample