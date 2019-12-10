import React, { Component, Fragment } from 'react';
import StartPage from '../../components/StartPage/StartPage';
import Modalpopup from '../../components/Modalpopup/Modalpopup';
import Navigation from '../../components/Navigation/Navigation';
import '../App/App.css';
import Item from "../../components/Item/Item";
import ButtonName from "../../components/ButtonName/ButtonName";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Login from '../../components/Login/Login';
import Register from '../../components/Register/Register';

class App extends Component {
  constructor() {
    super();
    this.state = {
      route:'home',
      windowWidth: 0,
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
        // {
        //   id: "",
        //   listItems: [
        //     {
        //       item: itemvalue,
        //       lineThrough: null,
        //       uncheckIcon: null,
        //       checkIcon: "none",
        //       display: ""
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

  updateWindowDimensions = () => {
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
  plusNewButton = (event) => {
    event.preventDefault();
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
  addNewItem = (event) => {
    event.preventDefault();
    if (this.state.inputAddNewItem === "") {
      return
    }

    const container = [...this.state.container];
    container[this.state.activeButtonId]
      .listItems
      .push({
        item: this.state.inputAddNewItem,
        lineThrough: null,
        uncheckIcon: null,
        checkIcon: "none",
        display: "",
      });

    this.setState({
      container: container,
      inputAddNewItem: ""
    })

  }

  // Delete item functionality by clicking the Delete Icon
  deleteItem = (index) => {
    const container = [...this.state.container];

    container[this.state.activeButtonId].listItems[index].display = "none";
    this.setState({ container: container });
  }


  // Sets the visibility of "check" and "unchecked" icons in the item li
  setItemStyle = (index) => {
    const container = [...this.state.container];

    if (container[this.state.activeButtonId].listItems[index].lineThrough === null && container[this.state.activeButtonId].listItems[index].checkIcon === "none") {
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
      activeItemId: event.target.id
    });
  }
  // ====================================

  onRouteChange = (route) => {
    // if(route==="home" || this.state.route==="register" ){
    //   this.setState({ route: "login" });
    // }
    // else if(this.state.route==="home" || this.state.route==="login" ){
    //   this.setState({ route: "register" });
    // }

    this.setState({route:route});
  }







  render() {

    // Sets the moment when the "dropdownButton" is visible according to the size of the window
    const dropdownButtonVisibility = () => {
      if (this.state.windowWidth < 992) {
        return null;
      }
      else {
        return "hidden"
      }
    }
    // Sets the moment when the "ul" is visible according to the size of the window
    const ulVisibility = () => {
      if (this.state.windowWidth < 992) {
        return "hidden"
      }
      else {
        return null
      }
    }





    // Returns the ButtonName component
    let buttonsToBeRender = null;
    buttonsToBeRender = (this.state.container.map((value, index) => {
      return (<ButtonName
        windowWidth={this.state.windowWidth}
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
          handleShow={(event) => this.handleShow(event)}
          save={this.state.save}
          modalInput={this.state.modalInput}
          lineThrough={value.lineThrough}
          checkIcon={value.checkIcon}
          uncheckIcon={value.uncheckIcon}
          display={value.display}
          deleteItem={() => this.deleteItem(index)} />)
      }))
    }


    return (
      <Fragment>
        <Modalpopup show={this.state.show} 
                    onChange = {(event)=>this.modalOnInputChange(event)} 
                    handleClose = {()=>this.handleClose()}
                    saveModalNewValue ={()=>this.saveModalNewValue()}/>
        < StartPage />

        <div className="container-fluid border border-light">
          <div className="row">
            <Navigation onRouteChange={this.onRouteChange} />
          </div>{/*End Of Row*/}
          


        { this.state.route ==="login" 
            ? <Login />
            : this.state.route === "home" ?
                <div className="row">
                <div className="col-lg-4 listSummarySection">
                  <form className="form-inline formWraper" onSubmit ={(event) => this.plusNewButton(event)}>
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
                      onClick={(event) => this.plusNewButton(event)}
                      type="button"
                      id="plusButton"
                      className="btn-warning">+</button>
                  </form>

                  <div className="myListSummary-wraper">
                    <DropdownButton
                      id="dropdown-basic-button"
                      className={` m-auto capitalize ${dropdownButtonVisibility()}`}
                      title="All Your Lists"
                      variant="Warning"
                      size="lg">
                      {buttonsToBeRender}
                    </DropdownButton>

                    <ul className={`myListSummary ${ulVisibility()}`}>
                      {buttonsToBeRender}
                    </ul>
                  </div>
                </div>{/*End Of Col-lg-4*/}

                <div className="col-lg-8 list-content">
                  <form className="taskForm" onSubmit ={(event) => this.addNewItem(event)}>
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
                      onClick={(event) => this.addNewItem(event)}
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
                </div>{/*End Of Col*/}
              </div>/*End Of Row*/
              
              : <Register />
              

        }
         
        </div>{/*End Of Container Fluid*/}
      </Fragment >

    );
  }
}

export default App;
