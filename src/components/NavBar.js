import React, { Component } from 'react';
import{ Navbar, Nav, NavDropdown, Container}  from "react-bootstrap";

class NavBar extends Component {
  render() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">U Konrada</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link href="/products">Produkty</Nav.Link>
                    <Nav.Link href="/wholesalers">Magazyny</Nav.Link>
                    <NavDropdown title="Informacje o firmie" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/informations/about_me">O mnie</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/informations/contact">Kontakt</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/login">Zaloguj</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
  }
}
export default NavBar;