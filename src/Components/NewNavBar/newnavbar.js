import React, { useState } from 'react';
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
  NavbarText
} from 'reactstrap';


export class NewNavBar extends React.Component{

    render(){
        return (
            <div className="newnavbar">
                 <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                crossorigin="anonymous"
            />
            
            
                <Navbar color="light" light expand="md" sticky="top" position="fixed">
                    <NavbarBrand href="/">SHIRLEY</NavbarBrand>
                    {/* <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar> */}
                    <Nav className="mr-auto" class="navbar" navbar>
                        <NavItem>
                        <NavLink href="/components/">ABOUT ME</NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink href="https://github.com/ShirleyOfHuang">GITHUB</NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink href="/projects/">PROJECTS</NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink href="travels">TRAVEL</NavLink>
                        </NavItem>
                        {/* <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Options
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                            Option 1
                            </DropdownItem>
                            <DropdownItem>
                            Option 2
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                            Reset
                            </DropdownItem>
                        </DropdownMenu>
                        </UncontrolledDropdown> */}
                    </Nav>
                    <NavbarText>get to know me</NavbarText>
                    {/* </Collapse> */}
                </Navbar>
                </div>
               
              
        )
    }
}


export default NewNavBar;