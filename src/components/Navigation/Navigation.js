import React, { Fragment } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Navigation.css';

const Navigation = ({onRouteChange}) => {

    const onLogInButton = ()=>{
        onRouteChange('login');
    }
    const onRegisterButton = ()=>{
        onRouteChange('register');
    }


    return (
        <Fragment>
            <header className="col">
                <Navbar expand="lg" className="navbar-dark">
                    <Navbar.Brand href="#home">
                        <h1 className="navbar-brand"><span className="changedStyle">Do things</span> The Right Way</h1>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <li className="nav-item item1 ml-auto ">
                                <button type="button" id="buttonForAddingToDoList" className="btn btn-outline-secondary wraper" onClick={()=>onLogInButton()}>
                                    <h5 className="font-weight-light">Log In</h5>
                                </button>
                                <button type="button" id="buttonForAddingToDoList" className="btn btn-outline-secondary wraper" onClick={()=>onRegisterButton()}>
                                    <h5 className="font-weight-light">Register</h5>
                                </button>
                            </li>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

            </header>

        </Fragment>

    );
}

export default Navigation;