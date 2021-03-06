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
      route: 'home',
      isLogedIn: false,
      windowWidth: 0,
      activeButtonId: 0,
      activeButtonName: '',
      activeItemId: 0,
      inputAddNewButton: '',
      inputAddNewItem: '',
      save: true,
      modalInput: '',
      show: false,
      user: {
        id: null,
        name: '',
        email: '',
        container: [
          // {
          //   id: "",
          //   listItems: [
          //     {
          //       item: itemvalue,
          //       lineThrough: null,
          //       uncheckIcon: null,
          //       checkIcon: "none",
          //       numberOfItems:'1',
          //       display: ""
          //     }
          //   ]
          // } 
        ],
        joined: ''
      }
    };
  }


  loadUser = (user) => {
    this.setState({
      user: {
        name: user.name,
        email: user.email,
        container: user.container,
        joined: user.joined
      }
    });
    //The "activeButtonId" and "activeButtonName" are set automaticaly to the values from container[0] when the user is loaded
    // if the container is not empty
    if (user.container.length > 0) {
      this.setActiveButtonIdAndName(0);
    }

  }

  onRouteChange = (route) => {
    this.setState({ route: route });
    if (this.state.route === 'home') {
      this.setState({
        activeButtonId: 0,
        activeButtonName: ''
      });
    }
  }

  changeLogStateToFalse = () => {
    this.setState({ isLogedIn: false });
  }
  changeLogStateToTrue = () => {
    this.setState({ isLogedIn: true });
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

  // Adds new List Button
  plusNewButton = (event) => {
    event.preventDefault();
    if (this.state.inputAddNewButton === "") {
      return
    }

    let user = this.state.user;
    user.container.push({ id: this.state.inputAddNewButton, listItems: [] });

    this.setState({
      user: user,
      inputAddNewButton: ""
    })
  }

  // Delete List Button by clicking the Garbage Bin Icon 
  deleteListButton = (index) => {
    let user = this.state.user;
    user.container.splice(index, 1);
    //After deleting a List button - the "activeButtonId" and "activeButtonName" are set to the values from the first element in the container[]
    if (user.container.length > 0) {
      const activeButtonName = user.container[0].id;
      this.setState({
        activeButtonId: 0,
        activeButtonName: activeButtonName
      });
    }
    else {
      this.setState({
        activeButtonName: ""
      });
    }

    this.setState({
      user: user,
    });
  }


  // Sets new Button Id and Name
  setActiveButtonIdAndName = (index) => {
    let user = this.state.user;
    const buttonName = user.container[index].id;
    this.setState({ activeButtonId: index, activeButtonName: buttonName })
  }

  // The functionality of the Save button near the list Title
  saveListButtonFunctionalities = () => {
    fetch('https://limitless-atoll-58976.herokuapp.com/save', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: this.state.user.email,
        container: this.state.user.container
      })
    })
      .then(response => response.json());
  }


  // Adds new Item to the created list
  addNewItem = (event) => {
    event.preventDefault();
    if (this.state.inputAddNewItem === "" || this.state.activeButtonName === "") {
      return
    }
    let user = this.state.user;
    user.container[this.state.activeButtonId]
      .listItems
      .push({
        item: this.state.inputAddNewItem,
        lineThrough: null,
        uncheckIcon: null,
        checkIcon: "none",
        numberOfItems: '1'
      });

    this.setState({
      user: user,
      inputAddNewItem: ""
    })
  }



  // Delete item functionality by clicking the Delete Icon for the Items
  deleteItem = (index) => {
    let user = this.state.user;
    user.container[this.state.activeButtonId].listItems.splice(index, 1);
    this.setState({ user: user });
  }
  // sets the number of Items  of the same kind from the List
  onInputChangeTheNumberOfItems = (event, index) => {
    let user = this.state.user;
    user.container[this.state.activeButtonId].listItems[index].numberOfItems = event.target.value;
    this.setState({ user: user });
  }



  // Sets the visibility of "check" and "unchecked" icons in the item li
  setItemStyle = (index) => {
    let user = this.state.user;

    if (user.container[this.state.activeButtonId].listItems[index].lineThrough === null && user.container[this.state.activeButtonId].listItems[index].checkIcon === "none") {
      user.container[this.state.activeButtonId].listItems[index].lineThrough = "line-through";
      user.container[this.state.activeButtonId].listItems[index].uncheckIcon = "none";
      user.container[this.state.activeButtonId].listItems[index].checkIcon = null;
    } else {
      user.container[this.state.activeButtonId].listItems[index].lineThrough = null;
      user.container[this.state.activeButtonId].listItems[index].checkIcon = "none";
      user.container[this.state.activeButtonId].listItems[index].uncheckIcon = null;
    }
    this.setState({ user: user })
  }



  //==========MODAL FUNCTIONALITY====================

  modalOnInputChange = (event) => {
    this.setState({ modalInput: event.target.value });
  }

  saveModalNewValue = () => {
    // const container = [...this.state.container];
    let user = this.state.user;
    user.container[this.state.activeButtonId].listItems[this.state.activeItemId].item = this.state.modalInput;

    this.setState({ show: false });
    // this.setState({ container: container });
    this.setState({ user: user });
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
    let user = this.state.user;
    let buttonsToBeRender = null;
    if (user.container.length !== 0) {
      buttonsToBeRender = (user.container.map((value, index) => {
        return (<ButtonName
          windowWidth={this.state.windowWidth}
          onClick={() => this.setActiveButtonIdAndName(index)}
          deleteListButton={() => this.deleteListButton(index)}
          key={`${value}${index}`}
          label={value.id}
        />)
      }))
    }


    // Returns the Item component
    let itemToBeRender = null;
    if (user.container.length !== 0) {
      itemToBeRender = (user.container[this.state.activeButtonId].listItems.map((value, index) => {
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
          numberOfItems={value.numberOfItems}
          onInputChangeTheNumberOfItems={(event) => this.onInputChangeTheNumberOfItems(event, index)}
          deleteItem={() => this.deleteItem(index)} />)
      }))
    }


    return (
      <Fragment>
        <Modalpopup show={this.state.show}
          onChange={(event) => this.modalOnInputChange(event)}
          handleClose={() => this.handleClose()}
          saveModalNewValue={() => this.saveModalNewValue()} />
        <StartPage />

        <div className="container-fluid border border-light">
          <div className="row">
            <Navigation onRouteChange={this.onRouteChange}
              changeLogStateToFalse={this.changeLogStateToFalse}
              isLogedIn={this.state.isLogedIn}
              loadUser={this.loadUser}
              user={this.state.user}
              setActiveButtonIdAndName={this.setActiveButtonIdAndName} />
          </div>{/*End Of Row*/}

          {this.state.route === "login"
            ? <Login onRouteChange={this.onRouteChange} loadUser={this.loadUser} changeLogStateToTrue={this.changeLogStateToTrue} />
            : this.state.route === "home" ?
              <div className="row">
                <div className="col-lg-4 listSummarySection">
                  <form className="form-inline formWraper" onSubmit={(event) => this.plusNewButton(event)}>
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
                      className={`m-auto capitalize ${dropdownButtonVisibility()}`}
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
                  <form className="taskForm" onSubmit={(event) => this.addNewItem(event)}>
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

                    {
                      this.state.activeButtonName !== '' ?
                        <div className="list-title-wraper">
                          <div>
                            <h3 className="todo-name">{this.state.activeButtonName}</h3>
                          </div>
                          {
                            this.state.isLogedIn  ?
                              <div>
                                <i className="fas fa-save saveExitButton" role="button" onClick={this.saveListButtonFunctionalities}>
                                  <span className="tooltiptext">Save</span>
                                </i>
                              </div>
                              : null
                          }

                        </div>
                        : null
                    }

                    {itemToBeRender}

                  </ul>
                </div>{/*End Of Col*/}
              </div>/*End Of Row*/

              : <Register onRouteChange={this.onRouteChange} loadUser={this.loadUser} changeLogStateToTrue={this.changeLogStateToTrue} />
          }
        </div>{/*End Of Container Fluid*/}
      </Fragment >
    );
  }
}

export default App;
