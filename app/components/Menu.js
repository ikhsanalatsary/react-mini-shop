import React from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem, FormGroup, FormControl } from 'react-bootstrap';
import { Link, IndexLink } from 'react-router';

const styles = {
  textDecoration: 'none',
  textTransform: 'uppercase',
  fontWeight: 800,
  fontSize: 20 + 'px',
  color: '#08489D'
}

const Menu = (props) => {
  return (
    <Navbar fixedTop>
      <Navbar.Header>
        <Navbar.Brand>
          <a style={styles} href='#'>
            React Mini Shop
          </a>
        </Navbar.Brand>
      </Navbar.Header>
      <Navbar.Form pullLeft>
        <FormGroup>
          <FormControl type="text" placeholder="Search" onKeyPress={props.onSearch}/>
        </FormGroup>
      </Navbar.Form>
      <Nav pullRight>
        <NavItem eventKey={1} href="#cart">
          <button>
            <i className="ion-bag"></i>
          </button>
        </NavItem>
        <NavDropdown eventKey={3} title="" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1} href='#category/phone'>Phone</MenuItem>
          <MenuItem eventKey={3.2} href='#category/accessories'>Accessories</MenuItem>
          <MenuItem eventKey={3.3} href='#category/pad'>Pad</MenuItem>
        </NavDropdown>
      </Nav>
    </Navbar>
  );
}
export default Menu;
