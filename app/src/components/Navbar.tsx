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
      className="shadow bg-navbarfooter"
      collapseOnSelect
      expand="lg"
      variant="dark"
      fixed="top"
    >
      <Container>
        <Navbar.Brand href="/">
          <i className="fa-sharp fa-solid fa-egg mr-2"></i>
          Restaurant-Menu-App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="/" className="text-white">
              Mājas
            </Nav.Link>
            <Nav.Link href="/add-menu-items" className="text-white">
              Pievienot ēdienus
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar
