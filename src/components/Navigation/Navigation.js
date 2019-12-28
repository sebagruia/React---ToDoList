import React, { Fragment } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Navigation.css';

const Navigation = ({onRouteChange,changeLogStateToFalse, isLogedIn,loadUser,user}) => {
const initialUser = {
    name: '',
    email:'',
    container: [],
    joined: ''
}
const saveButtonFunctionalities = ()=>{
    // onRouteChange('login');
    // changeLogStateToFalse();
    // loadUser(initialUser);
    fetch('https://limitless-atoll-58976.herokuapp.com/save',{
        method:'put',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
            email:user.email,
            container:user.container
        })
    })
    .then(response=>response.json());
}
const LogOutButtonFunctionalities = ()=>{
    onRouteChange('login');
    changeLogStateToFalse();
    loadUser(initialUser);
    fetch('https://limitless-atoll-58976.herokuapp.com/logout',{
        method:'put',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
            email:user.email,
            container:user.container
        })
    })
    .then(response=>response.json());
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
                                    <button type="button" id="buttonForAddingToDoList" className="loginButton btn btn-outline-secondary wraper" onClick={()=>onRouteChange('login')}>
                                        <h5 className="font-weight-light">Log In</h5>
                                    </button>
                                    <button type="button" id="buttonForAddingToDoList" className="registerButton btn btn-outline-secondary wraper" onClick={()=>onRouteChange('register')}>
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
                                    <h5 className="welcome"> Welcome {`${user.name}`}</h5>
                                    <button type="button" className="saveExitButton btn btn-outline-secondary wraper" onClick={()=>saveButtonFunctionalities()}>
                                        <h5>Save</h5>
                                    </button>
                                    <button type="button" className="saveExitButton btn btn-outline-secondary wraper" onClick={()=>LogOutButtonFunctionalities()}>
                                        <h5>Log out</h5>
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