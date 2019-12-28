import React,{useState} from "react";
import '../Item/Item.css'

const Item = ({ handleShow, 
                save, 
                label, 
                modalInput, 
                onClick , 
                lineThrough, 
                checkIcon,
                uncheckIcon,
                index,
                display,
                deleteItem}) => {


        

    return (
        <li className="li-item" style={{display}}>
            <div className="list-component text-secondary">
                <div className="check-list">
                <i className="far fa-circle" style ={{display:uncheckIcon}} role="button" onClick={onClick} aria-hidden="true"></i>
                <i className="far fa-check-circle text-success" style ={{display:checkIcon}} role="button" onClick={onClick} aria-hidden="true"></i>
                    <p className="p-text" style={{textDecoration: lineThrough}}>
                        {
                            !save ? modalInput : label
                        }
                    </p>
                </div>
                <div className="edit-list">
                    <i id={label} className="far fa-times-circle text-danger"  role="button" onClick={deleteItem} aria-hidden="true"></i>
                    <i id={index} className="far fa-edit text-info" role="button" onClick={(event)=>handleShow(event)} aria-hidden="true"></i>
                    <input className="quantity" type="number" aria-label="Insert a number" name="quantity" min="1" max="20" aria-describedby="number of items of the same kind" placeholder="1" />
                </div>
            </div>
        </li>
    )
}

export default Item;