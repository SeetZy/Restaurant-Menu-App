/*
 * Library imports
 */
// ? https://www.npmjs.com/package/react-bootstrap
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

function NavigationBar() {
  return (
    <Navbar
      className="shadow"
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      fixed="top"
    >
      <Container>
        <Navbar.Brand href="/">
          <i className="fa-solid fa-utensils mr-2"></i>
          Restaurant-Menu-App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="/">Mājas</Nav.Link>
            <Nav.Link href="/menu">Ēdienkarte</Nav.Link>
            <Nav.Link href="/add-menu-items">Pievienot ēdienus</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar
