import { useState } from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button,
} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className=''>
        <NavbarBrand href="#">Notes App</NavbarBrand>
        <Nav className=''>
          <NavItem>
            <NavLink href="#">
              <Button
                active
                color="light"
                size="sm"
              >
                Note List
              </Button>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">
              <Button
                active
                color="light"
                size="sm"
              >
                Add Note
              </Button>
            </NavLink>
          </NavItem>
        </Nav>
        <NavbarText>by Misiek</NavbarText>
      </Navbar>
    </div>
  );
}

export default NavBar;