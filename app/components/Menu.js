import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Button, FormGroup, FormControl } from 'react-bootstrap';
import { Link, IndexLink } from 'react-router';

const Menu = () => {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">React Mini Shop</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem eventKey={1} href='#/about'>
          About
        </NavItem>
        <NavItem eventKey={2} href="#/examples">
          Examples
        </NavItem>
        <NavDropdown eventKey={3} title="Category" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Action</MenuItem>
          <MenuItem eventKey={3.2}>Another action</MenuItem>
          <MenuItem eventKey={3.3}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.3}>Separated link</MenuItem>
        </NavDropdown>
      </Nav>
      <Navbar.Form>
        <FormGroup>
          <FormControl type="text" placeholder="Search" />
        </FormGroup>
        {' '}
        <Button type="submit">Submit</Button>
      </Navbar.Form>
    </Navbar>
  );
}
export default Menu;
