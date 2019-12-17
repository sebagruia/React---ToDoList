import React, { Fragment } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Navigation.css';

const Navigation = ({onRouteChange,changeLogStateToFalse, isLogedIn, userName,loadUser}) => {
const initialUser = {
    // id:user.id,
    name: '',
    email:'',
    container: [],
    joined: ''
}
const logOutFunctionalities = ()=>{
    onRouteChange('login');
    changeLogStateToFalse();
    loadUser(initialUser);

}

    if(!isLogedIn){
        return (
            <Fragment>
                <header className="col">
                    <Navbar expand="lg" className="navbar-dark">
                        <Navbar.Brand href="#home" onClick={()=>onRouteChange('home')}>
                            <h1 className="navbar-brand"><span className="changedStyle">Do things</span> The Right Way</h1>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <li className="nav-item item1 ml-auto ">
                                    <button type="button" id="buttonForAddingToDoList" className="btn btn-outline-secondary wraper" onClick={()=>onRouteChange('login')}>
                                        <h5 className="font-weight-light">Log In</h5>
                                    </button>
                                    <button type="button" id="buttonForAddingToDoList" className="btn btn-outline-secondary wraper" onClick={()=>onRouteChange('register')}>
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

    else{
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
                                    <h5>Welcome {`${userName}`}</h5>
                                    <button type="button" id="buttonForAddingToDoList" className="btn btn-outline-secondary wraper" onClick={()=>logOutFunctionalities()}>
                                        <h5 className="font-weight-light">Log Out</h5>
                                    </button>
                                </li>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </header>
            </Fragment>
    
        );
    }

}

export default Navigation;