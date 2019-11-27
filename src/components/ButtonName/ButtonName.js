import React from 'react';
import './ButtonName.css';


const ButtonName = ({label,onClick}) => {
    

    return (
             <li  className="newListLi" >
                 <button  onClick={onClick} type="button" className="btn btn-outline-warning btn-lg btn-block capitalize button-color-orange ">{label}</button>
            </li>
         
    );

}

export default ButtonName;

