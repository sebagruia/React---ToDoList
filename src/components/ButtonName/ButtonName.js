import React, { Fragment } from 'react';
import './ButtonName.css';
import DropdownItem from 'react-bootstrap/DropdownItem';


const ButtonName = ({ onClick, label, deleteListButton, windowWidth, index }) => {

    const liItem = () => {

        if (windowWidth < 992) {
            return (
                <DropdownItem className="newListLi" onClick={onClick}>{label}<i className="far fa-trash-alt" role="button" onClick={deleteListButton}></i></DropdownItem>
            );
        }
        else {
            return (
                <li className="newListLi"  >
                    <button onClick={onClick} type="button" className="btn btn-outline-warning btn-lg btn-block capitalize button-color-orange">{label}</button>
                    <i className="far fa-trash-alt" role="button" onClick={deleteListButton}></i>
                </li >

            );
        }
    }

    
    return (
        <Fragment>
            {liItem()}
        </Fragment>
    );

}
export default ButtonName;

