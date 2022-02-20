import React from 'react';
import "./index.css"
import {
    Container,
    Row,
    Col,
    Navbar,
    NavbarBrand,
    Nav,
    Collapse,
    NavLink,
    NavbarToggler,
    NavItem,
    NavbarText,
    Button,
} from 'reactstrap';
import logo from "../../assests/logo.png"


function WebNavbar() {

    return <>
        <section id='navbar'>

            <Container >
                <Row>
                    <Navbar 
                        className='navCenter'
                        expand="md"
                        light
                    >
                        <img src={logo} width={70}/>
                        <NavbarBrand className='navLogo' href="/">
                            ABHI.
                        </NavbarBrand>
                        <NavbarToggler onClick={function noRefCheck() { }} />
                        <Collapse navbar>
                        <div style={{margin:"auto",}}>
                            <Nav
                                className="me-auto"
                                navbar
                            >

                                <NavItem>
                                    <NavLink className='navItems' href="https://github.com/reactstrap/reactstrap">
                                        For You
                                    </NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink className='navItems' href="https://github.com/reactstrap/reactstrap">
                                        Business
                                    </NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink className='navItems' href="https://github.com/reactstrap/reactstrap">
                                        Learn
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='navItems' href="https://github.com/reactstrap/reactstrap">
                                        Careers
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='navItems' href="https://github.com/reactstrap/reactstrap">
                                        Team
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='navItems' href="https://github.com/reactstrap/reactstrap">
                                        Contact
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='navItems' href="https://github.com/reactstrap/reactstrap">
                                        Learn
                                    </NavLink>
                                </NavItem>

                            </Nav>
                        </div>

                        </Collapse>
                            <div style={{ marginLeft: "auto" }}>
                                <NavbarText className='navItems'>
                                 <Button className='navBtn'>Get us Abhi</Button>
                                </NavbarText>
                            </div>
                    </Navbar>
                </Row>
            </Container>

        </section>

    </>

}

export default WebNavbar;








