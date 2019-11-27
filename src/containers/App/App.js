import React, { Component, Fragment } from 'react';
import StartPage from '../../components/StartPage/StartPage';
import Modal from 'react-bootstrap/Modal';
import Navigation from '../../components/Navigation/Navigation';
import Button from 'react-bootstrap/Button';
import '../App/App.css';
import Item from "../../components/Item/Item";
import ButtonName from "../../components/ButtonName/ButtonName";

class App extends Component {
  constructor() {
    super();
    // this.todoList = React.createRef();
    this.state = {
      windowWidth:0,
      dropDownButton:"hidden",
      activeButtonId: 0,
      activeButtonName: '',
      activeItemId: 0,
      inputAddNewButton: '',
      inputAddNewItem: '',
      save: true,
      modalInput: '',
      show: false,
      inputValuesNewItem: [],
      container: [
      //   { id:"",   
      //     listItems: [
      //     {
      //       item: itemvalue,
      //       lineThrough: null / line - through,
      //       vizibility: true
      //     }
      //   ]
      // } 
      ],
  };
}


// Checking Window innerWidth

componentDidMount() {
  this.updateWindowDimensions();
  window.addEventListener('resize', this.updateWindowDimensions);
}


componentWillUnmount() {
  window.removeEventListener('resize', this.updateWindowDimensions);
}

updateWindowDimensions = ()=>{
  this.setState({ windowWidth: window.innerWidth });
}




// Adds name for the BUTTON
onInputchange = (event) => {
  this.setState({ inputAddNewButton: event.target.value });

}

onInputChangeNewItem = (event) => {
  this.setState({ inputAddNewItem: event.target.value });
}

// Adds new Button
plusNewButton = () => {
  if (this.state.inputAddNewButton === "") {
    return
  }

  const container = [...this.state.container];
  container.push({ id: this.state.inputAddNewButton, listItems: [] });

  this.setState({
    container: container,
    inputAddNewButton: ""
  })
}

// Sets new Button Id and Name
setActiveButtonIdAndName = (index) => {
  const buttonName = this.state.container[index].id;

  this.setState({ activeButtonId: index, activeButtonName: buttonName })

}

// Adds new Item to the created list
addNewItem = () => {
  if (this.state.inputAddNewItem === "") {
    return
  }

  const container = [...this.state.container];
  container[this.state.activeButtonId]
    .listItems
    .push({ item: this.state.inputAddNewItem, 
            lineThrough: null,
            uncheckIcon:null, 
            checkIcon:"none",
            display:"",
          });

  this.setState({
    container: container,
    inputAddNewItem: ""
  })

}

// Delete item functionality by clicking the Delete Icon
deleteItem = (index)=>{
  const container = [...this.state.container];
   
    container[this.state.activeButtonId].listItems[index].display = "none";
    this.setState({container:container});
}


// Sets the visibility of "check" and "unchecked" icons in the item
setItemStyle = (index) => {
  const container = [...this.state.container];

  if (container[this.state.activeButtonId].listItems[index].lineThrough === null && container[this.state.activeButtonId].listItems[index].checkIcon === "none" ) {
    container[this.state.activeButtonId].listItems[index].lineThrough = "line-through";
    container[this.state.activeButtonId].listItems[index].uncheckIcon = "none";
    container[this.state.activeButtonId].listItems[index].checkIcon = null;
  } else {
    container[this.state.activeButtonId].listItems[index].lineThrough = null;
    container[this.state.activeButtonId].listItems[index].checkIcon = "none";
    container[this.state.activeButtonId].listItems[index].uncheckIcon = null;
  }
  this.setState({ container: container })
}

// Modal Functionality=======================

modalOnInputChange = (event) => {
  this.setState({ modalInput: event.target.value });
}

saveModalNewValue = () => {
  const container = [...this.state.container];
  container[this.state.activeButtonId].listItems[this.state.activeItemId].item = this.state.modalInput;

  this.setState({ show: false });
  this.setState({ container: container });
}

handleClose = () => {
  this.setState({ show: false });
  this.setState({ show: false });

}

handleShow = (event) => {
  this.setState({ 
    show: true, 
    save: true,
    activeItemId:event.target.id
  });
}
// ====================================



render() {

  // Sets the moment when the dropdownButton is visible according to the size of the window
  const dropDownButtonVisibility = ()=>{
    if(this.state.windowWidth<992){
      return  null;
    }
    else{
      return  "hidden";
    }
  }

// Returns the ButtonName component
  let buttonsToBeRender = null;
  buttonsToBeRender = (this.state.container.map((value, index) => {
    return (<ButtonName
      onClick={() => this.setActiveButtonIdAndName(index)}
      key={`${value}${index}`}
      label={value.id}
    />)
  }))

// Returns the Item component
  let itemToBeRender = null;
  if (this.state.container.length !== 0) {
    itemToBeRender = (this.state.container[this.state.activeButtonId].listItems.map((value, index) => {
      return (<Item
        onClick={() => this.setItemStyle(index)}
        key={`${value}${index}`}
        index={index}
        label={value.item}
        handleShow={(event)=>this.handleShow(event)}
        save={this.state.save}
        modalInput={this.state.modalInput}
        lineThrough={value.lineThrough}
        checkIcon = {value.checkIcon} 
        uncheckIcon = {value.uncheckIcon}
        display = {value.display}
        deleteItem = {()=>this.deleteItem(index)}/>)
    }))
  }


  return (
    <Fragment>
      {/*Bootstrap Modal*/}
      < Modal show={this.state.show} className="modal-sm ">
        <Modal.Header className="modal-header text-white">
          <Modal.Title>Edit Entry</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <input
            onChange={this.modalOnInputChange}
            type="text"
            className="form-control inputForModal"
            placeholder="Your edit in here"
            aria-label="edit"
            aria-describedby="edit an existing entry field" />
        </Modal.Body>

        <Modal.Footer>
          <Button
            id="modalCancelButton"
            className="btn text-white"
            onClick={(event) => this.handleClose(event)}>Close</Button>
          <Button
            onClick={() => this.saveModalNewValue()}
            id="modalSaveButton"
            className="btn bg-warning text-white">Save</Button>
        </Modal.Footer>
      </Modal >
      {/*Modal*/}

      < StartPage />

      <div className="container-fluid border border-light">
        <div className="row">
          <Navigation />
        </div>
        {/*End Of Row*/}

        <div className="row">
          <div className="col-lg-4 listSummarySection">
            <form className="form-inline formWraper">
              <input
                onChange={this.onInputchange}
                value={this.state.inputAddNewButton}
                type="text"
                id="inputNewListItem"
                className="form-control"
                placeholder="Name Your List"
                aria-label="Insert text"
                aria-describedby="edit an existing entry field" />
              <button
                onClick={() => this.plusNewButton()}
                type="button"
                id="plusButton"
                className="btn-warning">+</button>
            </form>

            <div className="myListSummary-wraper">
              <button
                type="button"
                id="dropdownMenuButton"
                className={`btn btn-outline-warning dropdown-toggle btn-lg btn-block capitalize ${dropDownButtonVisibility()}`}
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">All Your Lists</button>
              <ul id="myListSummaryReact" className="myListSummary">

                {buttonsToBeRender}

              </ul>
            </div>
          </div>{/*End Of Col-lg-4*/}
          <div className="col-lg-8 list-content">
            <form className="taskForm">
              <div className="component1">
                <input
                  onChange={this.onInputChangeNewItem}
                  value={this.state.inputAddNewItem}
                  type="text"
                  className="form-control shadow input-new-line"
                  placeholder="New item"
                  aria-label="Insert text"
                  aria-describedby="edit an existing entry field" />
              </div>
              <div
                onClick={() => this.addNewItem()}
                className="component2"
                role="button">
                <i className="far fa-plus-square" aria-hidden="true"></i>
                <h5 className="addTask">Add new item</h5>
              </div>
            </form>
            <ul className="todo-list">
              <h3 className="todo-name">{this.state.activeButtonName}</h3>

              {itemToBeRender}

            </ul>

          </div>
        </div>
        {/*End Of Row*/}
      </div>{/*End Of Container Fluid*/}
    </Fragment >

  );
}
}

export default App;
