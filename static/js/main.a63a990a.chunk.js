(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},102:function(e,t,a){},103:function(e,t,a){},104:function(e,t,a){},112:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(11),i=a.n(l),r=(a(76),a(60)),c=a(61),s=a(69),u=a(62),m=a(70),d=a(15),h=(a(77),function(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),a=t[0],l=t[1],i=Object(n.useState)(""),r=Object(d.a)(i,2),c=r[0],s=r[1];return o.a.createElement(n.Fragment,null,o.a.createElement("div",{className:"col-full-width ".concat(a)},o.a.createElement("div",{className:"form"},o.a.createElement("h1",null,o.a.createElement("span",{className:"changedStyle"},"Do things")," The Right Way"),o.a.createElement("div",{className:"form-group-1"},o.a.createElement("div",{className:"newList btn-outline-warning ".concat(c),roll:"button",onClick:function(){l("transitionForColFullWidth"),s("hidden")}},o.a.createElement("i",{className:"fas fa-th-list"}),o.a.createElement("h5",{className:"font-weight-light "},"Start Planning"))))))}),p=(a(78),a(21)),f=a(32),g=function(e){var t=e.show,a=e.onChange,n=e.handleClose,l=e.saveModalNewValue;return o.a.createElement(f.a,{show:t},o.a.createElement(f.a.Header,{className:"modal-header text-white"},o.a.createElement(f.a.Title,null,"Edit Entry")),o.a.createElement(f.a.Body,null,o.a.createElement("input",{onChange:function(e){return a(e)},type:"text",className:"form-control inputForModal",placeholder:"Your edit in here","aria-label":"edit","aria-describedby":"edit an existing entry field"})),o.a.createElement(f.a.Footer,null,o.a.createElement(p.a,{id:"modalCancelButton",className:"btn text-white",onClick:function(e){return n(e)}},"Close"),o.a.createElement(p.a,{onClick:function(){return l()},id:"modalSaveButton",className:"btn bg-warning text-white"},"Save")))},v=a(23),E=a(48),b=(a(99),function(e){var t=e.onRouteChange,a=e.changeLogStateToFalse,l=e.isLogedIn,i=e.loadUser,r=e.user,c={name:"",email:"",container:[],joined:""};return l?o.a.createElement(n.Fragment,null,o.a.createElement("header",{className:"col"},o.a.createElement(v.a,{expand:"lg",className:"navbar-dark"},o.a.createElement(v.a.Brand,{href:"#home"},o.a.createElement("h1",{className:"navbar-brand"},o.a.createElement("span",{className:"changedStyle"},"Do things")," The Right Way")),o.a.createElement(v.a.Toggle,{"aria-controls":"basic-navbar-nav"}),o.a.createElement(v.a.Collapse,{id:"basic-navbar-nav"},o.a.createElement(E.a,{className:"mr-auto"},o.a.createElement("li",{className:"nav-item item1 ml-auto "},o.a.createElement("h5",{className:"welcome"}," Welcome ","".concat(r.name)),o.a.createElement("button",{type:"button",className:"saveExitButton btn btn-outline-secondary wraper",onClick:function(){fetch("https://limitless-atoll-58976.herokuapp.com/save",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:r.email,container:r.container})}).then((function(e){return e.json()}))}},o.a.createElement("h5",null,"Save")),o.a.createElement("button",{type:"button",className:"saveExitButton btn btn-outline-secondary wraper",onClick:function(){return fetch("https://limitless-atoll-58976.herokuapp.com/logout",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:r.email,container:r.container})}),t("login"),a(),void i(c)}},o.a.createElement("h5",null,"Log out")))))))):o.a.createElement(n.Fragment,null,o.a.createElement("header",{className:"col"},o.a.createElement(v.a,{expand:"lg",className:"navbar-dark"},o.a.createElement(v.a.Brand,{href:"#home",onClick:function(){return t("home")}},o.a.createElement("h1",{className:"navbar-brand"},o.a.createElement("span",{className:"changedStyle"},"Do things")," The Right Way")),o.a.createElement(v.a.Toggle,{"aria-controls":"basic-navbar-nav"}),o.a.createElement(v.a.Collapse,{id:"basic-navbar-nav"},o.a.createElement(E.a,{className:"mr-auto"},o.a.createElement("li",{className:"nav-item item1 ml-auto "},o.a.createElement("button",{type:"button",id:"buttonForAddingToDoList",className:"loginButton btn btn-outline-secondary wraper",onClick:function(){return t("login")}},o.a.createElement("h5",{className:"font-weight-light"},"Log In")),o.a.createElement("button",{type:"button",id:"buttonForAddingToDoList",className:"registerButton btn btn-outline-secondary wraper",onClick:function(){return t("register")}},o.a.createElement("h5",{className:"font-weight-light"},"Register"))))))))}),N=(a(100),a(101),function(e){var t=e.handleShow,a=e.save,n=e.label,l=e.modalInput,i=e.onClick,r=e.lineThrough,c=e.checkIcon,s=e.uncheckIcon,u=e.index,m=e.onInputChangeTheNumberOfItems,d=e.numberOfItems,h=e.deleteItem;return o.a.createElement("li",{className:"li-item"},o.a.createElement("div",{className:"list-component text-secondary"},o.a.createElement("div",{className:"check-list"},o.a.createElement("i",{className:"far fa-circle",style:{display:s},role:"button",onClick:i,"aria-hidden":"true"}),o.a.createElement("i",{className:"far fa-check-circle text-success",style:{display:c},role:"button",onClick:i,"aria-hidden":"true"}),o.a.createElement("p",{className:"p-text",style:{textDecoration:r}},a?n:l)),o.a.createElement("div",{className:"edit-list"},o.a.createElement("i",{id:n,className:"far fa-times-circle text-danger",role:"button",onClick:h,"aria-hidden":"true"}),o.a.createElement("i",{id:u,className:"far fa-edit text-info",role:"button",onClick:function(e){return t(e)},"aria-hidden":"true"}),o.a.createElement("input",{onChange:m,className:"quantity",type:"number","aria-label":"Insert a number",name:"quantity",min:"1",max:"20","aria-describedby":"number of items of the same kind",value:"".concat(d)}))))}),I=(a(102),a(36)),w=function(e){var t=e.onClick,a=e.label,l=e.deleteListButton,i=e.windowWidth;return o.a.createElement(n.Fragment,null,i<992?o.a.createElement(I.a,{className:"newListLi",onClick:t},a,o.a.createElement("i",{className:"far fa-trash-alt",role:"button",onClick:l})):o.a.createElement("li",{className:"newListLi"},o.a.createElement("button",{onClick:t,type:"button",className:"btn btn-outline-warning btn-lg btn-block capitalize button-color-orange"},a),o.a.createElement("i",{className:"far fa-trash-alt",role:"button",onClick:l})))},y=a(68),C=(a(103),a(5)),k=function(e){var t=e.onRouteChange,a=e.changeLogStateToTrue,l=e.loadUser,i=Object(n.useState)(!1),r=Object(d.a)(i,2),c=r[0],s=r[1],u=Object(n.useState)(""),m=Object(d.a)(u,2),h=m[0],f=m[1],g=Object(n.useState)(""),v=Object(d.a)(g,2),E=v[0],b=v[1];return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm-6 offset-sm-3"},o.a.createElement(C.a,{className:"login-form justify-content-center",noValidate:!0,validated:c,onSubmit:function(e){e.preventDefault(),!1===e.currentTarget.checkValidity()&&(e.preventDefault(),e.stopPropagation()),s(!0)}},o.a.createElement(C.a.Group,{controlId:"formBasicEmail"},o.a.createElement(C.a.Label,null,"Email address"),o.a.createElement(C.a.Control,{type:"email",placeholder:"Enter email",required:!0,onChange:function(e){f(e.target.value)}}),o.a.createElement(C.a.Control.Feedback,{type:"invalid"},"Please type an email address"),o.a.createElement(C.a.Control.Feedback,{type:"valid"},"Looks Good")),o.a.createElement(C.a.Group,{controlId:"formBasicPassword"},o.a.createElement(C.a.Label,null,"Password"),o.a.createElement(C.a.Control,{type:"password",placeholder:"Password",required:!0,onChange:function(e){b(e.target.value)}}),o.a.createElement(C.a.Control.Feedback,{type:"invalid"},"Please type your password"),o.a.createElement(C.a.Control.Feedback,{type:"valid"},"Looks Good")),o.a.createElement(p.a,{variant:"primary",type:"submit",onClick:function(e){fetch("https://limitless-atoll-58976.herokuapp.com/login",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:h,password:E})}).then((function(e){return e.json()})).then((function(e){if(e.id){var n=e.container.map((function(e){return JSON.parse(e)}));e.container=n,t("home"),a(),l(e)}else window.alert("Wrong Credentials")}))}},"Log In")))))},S=(a(104),function(e){var t=e.onRouteChange,a=e.loadUser,l=e.changeLogStateToTrue,i=Object(n.useState)(!1),r=Object(d.a)(i,2),c=r[0],s=r[1],u=Object(n.useState)(""),m=Object(d.a)(u,2),h=m[0],f=m[1],g=Object(n.useState)(""),v=Object(d.a)(g,2),E=v[0],b=v[1],N=Object(n.useState)(""),I=Object(d.a)(N,2),w=I[0],y=I[1];return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm-6 offset-sm-3"},o.a.createElement(C.a,{className:"register-form justify-content-center",noValidate:!0,validated:c,onSubmit:function(e){e.preventDefault(),!1===e.currentTarget.checkValidity()&&(e.preventDefault(),e.stopPropagation()),s(!0)}},o.a.createElement(C.a.Group,{controlId:"formBasicName"},o.a.createElement(C.a.Label,{className:"label"},"Name"),o.a.createElement(C.a.Control,{type:"text",placeholder:"Enter Name",required:!0,onChange:function(e){f(e.target.value)}}),o.a.createElement(C.a.Control.Feedback,{type:"invalid"},"Please type your name"),o.a.createElement(C.a.Control.Feedback,{type:"valid"},"Looks Good")),o.a.createElement(C.a.Group,{controlId:"formBasicEmail"},o.a.createElement(C.a.Label,null,"Email address"),o.a.createElement(C.a.Control,{type:"email",placeholder:"Enter email",required:!0,onChange:function(e){b(e.target.value)}}),o.a.createElement(C.a.Control.Feedback,{type:"invalid"},"Please type an email address"),o.a.createElement(C.a.Control.Feedback,{type:"valid"},"Looks Good")),o.a.createElement(C.a.Group,{controlId:"formBasicPassword"},o.a.createElement(C.a.Label,null,"Password"),o.a.createElement(C.a.Control,{type:"password",placeholder:"Password",required:!0,onChange:function(e){y(e.target.value)}}),o.a.createElement(C.a.Control.Feedback,{type:"invalid"},"Please type your password"),o.a.createElement(C.a.Control.Feedback,{type:"valid"},"Looks Good")),o.a.createElement(p.a,{variant:"primary",type:"submit",onClick:function(){fetch("https://limitless-atoll-58976.herokuapp.com/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:h,email:E,password:w})}).then((function(e){return e.json()})).then((function(e){e.name&&(a(e),t("home"),l())}))}},"Register")))))}),B=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).loadUser=function(t){e.setState({user:{name:t.name,email:t.email,container:t.container,joined:t.joined}}),t.container.length>0&&e.setActiveButtonIdAndName(0)},e.onRouteChange=function(t){e.setState({route:t}),"home"===e.state.route&&e.setState({activeButtonId:0,activeButtonName:""})},e.changeLogStateToFalse=function(){e.setState({isLogedIn:!1})},e.changeLogStateToTrue=function(){e.setState({isLogedIn:!0})},e.updateWindowDimensions=function(){e.setState({windowWidth:window.innerWidth})},e.onInputchange=function(t){e.setState({inputAddNewButton:t.target.value})},e.onInputChangeNewItem=function(t){e.setState({inputAddNewItem:t.target.value})},e.plusNewButton=function(t){if(t.preventDefault(),""!==e.state.inputAddNewButton){var a=e.state.user;a.container.push({id:e.state.inputAddNewButton,listItems:[]}),e.setState({user:a,inputAddNewButton:""})}},e.deleteListButton=function(t){var a=e.state.user;if(a.container.splice(t,1),a.container.length>0){var n=a.container[0].id;e.setState({activeButtonId:0,activeButtonName:n})}else e.setState({activeButtonName:""});e.setState({user:a})},e.setActiveButtonIdAndName=function(t){var a=e.state.user.container[t].id;e.setState({activeButtonId:t,activeButtonName:a})},e.addNewItem=function(t){if(t.preventDefault(),""!==e.state.inputAddNewItem&&""!==e.state.activeButtonName){var a=e.state.user;a.container[e.state.activeButtonId].listItems.push({item:e.state.inputAddNewItem,lineThrough:null,uncheckIcon:null,checkIcon:"none",numberOfItems:"1"}),e.setState({user:a,inputAddNewItem:""})}},e.deleteItem=function(t){var a=e.state.user;a.container[e.state.activeButtonId].listItems.splice(t,1),e.setState({user:a})},e.onInputChangeTheNumberOfItems=function(t,a){var n=e.state.user;n.container[e.state.activeButtonId].listItems[a].numberOfItems=t.target.value,e.setState({user:n})},e.setItemStyle=function(t){var a=e.state.user;null===a.container[e.state.activeButtonId].listItems[t].lineThrough&&"none"===a.container[e.state.activeButtonId].listItems[t].checkIcon?(a.container[e.state.activeButtonId].listItems[t].lineThrough="line-through",a.container[e.state.activeButtonId].listItems[t].uncheckIcon="none",a.container[e.state.activeButtonId].listItems[t].checkIcon=null):(a.container[e.state.activeButtonId].listItems[t].lineThrough=null,a.container[e.state.activeButtonId].listItems[t].checkIcon="none",a.container[e.state.activeButtonId].listItems[t].uncheckIcon=null),e.setState({user:a})},e.modalOnInputChange=function(t){e.setState({modalInput:t.target.value})},e.saveModalNewValue=function(){var t=e.state.user;t.container[e.state.activeButtonId].listItems[e.state.activeItemId].item=e.state.modalInput,e.setState({show:!1}),e.setState({user:t})},e.handleClose=function(){e.setState({show:!1}),e.setState({show:!1})},e.handleShow=function(t){e.setState({show:!0,save:!0,activeItemId:t.target.id})},e.state={route:"home",isLogedIn:!1,windowWidth:0,activeButtonId:0,activeButtonName:"",activeItemId:0,inputAddNewButton:"",inputAddNewItem:"",save:!0,modalInput:"",show:!1,user:{id:null,name:"",email:"",container:[],joined:""}},e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"render",value:function(){var e=this,t=this.state.user,a=null;0!==t.container.length&&(a=t.container.map((function(t,a){return o.a.createElement(w,{windowWidth:e.state.windowWidth,onClick:function(){return e.setActiveButtonIdAndName(a)},deleteListButton:function(){return e.deleteListButton(a)},key:"".concat(t).concat(a),label:t.id})})));var l=null;return 0!==t.container.length&&(l=t.container[this.state.activeButtonId].listItems.map((function(t,a){return o.a.createElement(N,{onClick:function(){return e.setItemStyle(a)},key:"".concat(t).concat(a),index:a,label:t.item,handleShow:function(t){return e.handleShow(t)},save:e.state.save,modalInput:e.state.modalInput,lineThrough:t.lineThrough,checkIcon:t.checkIcon,uncheckIcon:t.uncheckIcon,numberOfItems:t.numberOfItems,onInputChangeTheNumberOfItems:function(t){return e.onInputChangeTheNumberOfItems(t,a)},deleteItem:function(){return e.deleteItem(a)}})}))),o.a.createElement(n.Fragment,null,o.a.createElement(g,{show:this.state.show,onChange:function(t){return e.modalOnInputChange(t)},handleClose:function(){return e.handleClose()},saveModalNewValue:function(){return e.saveModalNewValue()}}),o.a.createElement(h,null),o.a.createElement("div",{className:"container-fluid border border-light"},o.a.createElement("div",{className:"row"},o.a.createElement(b,{onRouteChange:this.onRouteChange,changeLogStateToFalse:this.changeLogStateToFalse,isLogedIn:this.state.isLogedIn,loadUser:this.loadUser,user:this.state.user,setActiveButtonIdAndName:this.setActiveButtonIdAndName})),"login"===this.state.route?o.a.createElement(k,{onRouteChange:this.onRouteChange,loadUser:this.loadUser,changeLogStateToTrue:this.changeLogStateToTrue}):"home"===this.state.route?o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-4 listSummarySection"},o.a.createElement("form",{className:"form-inline formWraper",onSubmit:function(t){return e.plusNewButton(t)}},o.a.createElement("input",{onChange:this.onInputchange,value:this.state.inputAddNewButton,type:"text",id:"inputNewListItem",className:"form-control",placeholder:"Name Your List","aria-label":"Insert text","aria-describedby":"edit an existing entry field"}),o.a.createElement("button",{onClick:function(t){return e.plusNewButton(t)},type:"button",id:"plusButton",className:"btn-warning"},"+")),o.a.createElement("div",{className:"myListSummary-wraper"},o.a.createElement(y.a,{id:"dropdown-basic-button",className:"m-auto capitalize ".concat(e.state.windowWidth<992?null:"hidden"),title:"All Your Lists",variant:"Warning",size:"lg"},a),o.a.createElement("ul",{className:"myListSummary ".concat(e.state.windowWidth<992?"hidden":null)},a))),o.a.createElement("div",{className:"col-lg-8 list-content"},o.a.createElement("form",{className:"taskForm",onSubmit:function(t){return e.addNewItem(t)}},o.a.createElement("div",{className:"component1"},o.a.createElement("input",{onChange:this.onInputChangeNewItem,value:this.state.inputAddNewItem,type:"text",className:"form-control shadow input-new-line",placeholder:"New item","aria-label":"Insert text","aria-describedby":"edit an existing entry field"})),o.a.createElement("div",{onClick:function(t){return e.addNewItem(t)},className:"component2",role:"button"},o.a.createElement("i",{className:"far fa-plus-square","aria-hidden":"true"}),o.a.createElement("h5",{className:"addTask"},"Add new item"))),o.a.createElement("ul",{className:"todo-list"},o.a.createElement("h3",{className:"todo-name"},this.state.activeButtonName),l))):o.a.createElement(S,{onRouteChange:this.onRouteChange,loadUser:this.loadUser,changeLogStateToTrue:this.changeLogStateToTrue})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},71:function(e,t,a){e.exports=a(112)},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},99:function(e,t,a){}},[[71,1,2]]]);
//# sourceMappingURL=main.a63a990a.chunk.js.map