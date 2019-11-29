import React, { Fragment } from 'react';
import './ButtonName.css';
import DropdownItem from 'react-bootstrap/DropdownItem';


const ButtonName = ({ onClick, label, windowWidth }) => {

    const liItem = () => {

        if (windowWidth < 992) {
            return (
                <DropdownItem className="newListLi" onClick={onClick}>{label}</DropdownItem>
            );
        }
        else {
            return (
                <li className="newListLi"  >
                    <button onClick={onClick} type="button" className="btn btn-outline-warning btn-lg btn-block capitalize button-color-orange">{label}</button>
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
