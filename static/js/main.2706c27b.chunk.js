(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},102:function(e,t,a){},103:function(e,t,a){},104:function(e,t,a){},112:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(11),r=a.n(l),i=(a(76),a(60)),c=a(61),s=a(69),u=a(62),m=a(70),d=a(15),h=(a(77),function(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(""),i=Object(d.a)(r,2),c=i[0],s=i[1];return o.a.createElement(n.Fragment,null,o.a.createElement("div",{className:"col-full-width ".concat(a)},o.a.createElement("div",{className:"form"},o.a.createElement("h1",null,o.a.createElement("span",{className:"changedStyle"},"Do things")," The Right Way"),o.a.createElement("div",{className:"form-group-1"},o.a.createElement("div",{className:"newList btn-outline-warning ".concat(c),roll:"button",onClick:function(){l("transitionForColFullWidth"),s("hidden")}},o.a.createElement("i",{className:"fas fa-th-list"}),o.a.createElement("h5",{className:"font-weight-light "},"Start Planning"))))))}),p=(a(78),a(21)),g=a(32),f=function(e){var t=e.show,a=e.onChange,n=e.handleClose,l=e.saveModalNewValue;return o.a.createElement(g.a,{show:t},o.a.createElement(g.a.Header,{className:"modal-header text-white"},o.a.createElement(g.a.Title,null,"Edit Entry")),o.a.createElement(g.a.Body,null,o.a.createElement("input",{onChange:function(e){return a(e)},type:"text",className:"form-control inputForModal",placeholder:"Your edit in here","aria-label":"edit","aria-describedby":"edit an existing entry field"})),o.a.createElement(g.a.Footer,null,o.a.createElement(p.a,{id:"modalCancelButton",className:"btn text-white",onClick:function(e){return n(e)}},"Close"),o.a.createElement(p.a,{onClick:function(){return l()},id:"modalSaveButton",className:"btn bg-warning text-white"},"Save")))},E=a(23),v=a(48),b=(a(99),function(e){var t=e.onRouteChange,a=e.changeLogStateToFalse,l=e.isLogedIn,r=e.loadUser,i=e.user,c={name:"",email:"",container:[],joined:""};return l?o.a.createElement(n.Fragment,null,o.a.createElement("header",{className:"col"},o.a.createElement(E.a,{expand:"lg",className:"navbar-dark"},o.a.createElement(E.a.Brand,{href:"#home"},o.a.createElement("h1",{className:"navbar-brand"},o.a.createElement("span",{className:"changedStyle"},"Do things")," The Right Way")),o.a.createElement(E.a.Toggle,{"aria-controls":"basic-navbar-nav"}),o.a.createElement(E.a.Collapse,{id:"basic-navbar-nav"},o.a.createElement(v.a,{className:"mr-auto"},o.a.createElement("li",{className:"nav-item item1 ml-auto "},o.a.createElement("h5",{className:"welcome"}," Welcome ","".concat(i.name)),o.a.createElement("button",{type:"button",id:"buttonForAddingToDoList",className:"saveExitButton btn btn-outline-secondary wraper",onClick:function(){return t("login"),a(),r(c),console.log(i.email),console.log(i.container),void fetch("http://localhost:4000/save&exit",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:i.email,container:i.container})}).then((function(e){return e.json()}))}},o.a.createElement("h5",null,"Save & Exit")))))))):o.a.createElement(n.Fragment,null,o.a.createElement("header",{className:"col"},o.a.createElement(E.a,{expand:"lg",className:"navbar-dark"},o.a.createElement(E.a.Brand,{href:"#home",onClick:function(){return t("home")}},o.a.createElement("h1",{className:"navbar-brand"},o.a.createElement("span",{className:"changedStyle"},"Do things")," The Right Way")),o.a.createElement(E.a.Toggle,{"aria-controls":"basic-navbar-nav"}),o.a.createElement(E.a.Collapse,{id:"basic-navbar-nav"},o.a.createElement(v.a,{className:"mr-auto"},o.a.createElement("li",{className:"nav-item item1 ml-auto "},o.a.createElement("button",{type:"button",id:"buttonForAddingToDoList",className:"loginButton btn btn-outline-secondary wraper",onClick:function(){return t("login")}},o.a.createElement("h5",{className:"font-weight-light"},"Log In")),o.a.createElement("button",{type:"button",id:"buttonForAddingToDoList",className:"registerButton btn btn-outline-secondary wraper",onClick:function(){return t("register")}},o.a.createElement("h5",{className:"font-weight-light"},"Register"))))))))}),w=(a(100),a(101),function(e){var t=e.handleShow,a=e.save,n=e.label,l=e.modalInput,r=e.onClick,i=e.lineThrough,c=e.checkIcon,s=e.uncheckIcon,u=e.index,m=e.display,d=e.deleteItem;return o.a.createElement("li",{className:"li-item",style:{display:m}},o.a.createElement("div",{className:"list-component text-secondary"},o.a.createElement("div",{className:"check-list"},o.a.createElement("i",{className:"far fa-circle",style:{display:s},role:"button",onClick:function(){return r()},"aria-hidden":"true"}),o.a.createElement("i",{className:"far fa-check-circle text-success",style:{display:c},role:"button",onClick:function(){return r()},"aria-hidden":"true"}),o.a.createElement("p",{className:"p-text",style:{textDecoration:i}},a?n:l)),o.a.createElement("div",{className:"edit-list"},o.a.createElement("i",{id:n,className:"far fa-times-circle text-danger",role:"button",onClick:d,"aria-hidden":"true"}),o.a.createElement("i",{id:u,className:"far fa-edit text-info",role:"button",onClick:function(e){return t(e)},"aria-hidden":"true"}),o.a.createElement("input",{className:"quantity",type:"number","aria-label":"Insert a number",name:"quantity",min:"1",max:"20","aria-describedby":"number of items of the same kind",placeholder:"1"}))))}),N=(a(102),a(36)),I=function(e){var t=e.onClick,a=e.label,l=e.deleteListButton,r=e.windowWidth;return o.a.createElement(n.Fragment,null,r<992?o.a.createElement(N.a,{className:"newListLi",onClick:t},a,o.a.createElement("i",{className:"far fa-trash-alt",role:"button",onClick:l})):o.a.createElement("li",{className:"newListLi"},o.a.createElement("button",{onClick:t,type:"button",className:"btn btn-outline-warning btn-lg btn-block capitalize button-color-orange"},a),o.a.createElement("i",{className:"far fa-trash-alt",role:"button",onClick:l})))},y=a(68),C=(a(103),a(5)),k=function(e){var t=e.onRouteChange,a=e.changeLogStateToTrue,l=e.loadUser,r=Object(n.useState)(!1),i=Object(d.a)(r,2),c=i[0],s=i[1],u=Object(n.useState)(""),m=Object(d.a)(u,2),h=m[0],g=m[1],f=Object(n.useState)(""),E=Object(d.a)(f,2),v=E[0],b=E[1];return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm-6 offset-sm-3"},o.a.createElement(C.a,{className:"login-form justify-content-center",noValidate:!0,validated:c,onSubmit:function(e){e.preventDefault(),!1===e.currentTarget.checkValidity()&&(e.preventDefault(),e.stopPropagation()),s(!0)}},o.a.createElement(C.a.Group,{controlId:"formBasicEmail"},o.a.createElement(C.a.Label,null,"Email address"),o.a.createElement(C.a.Control,{type:"email",placeholder:"Enter email",required:!0,onChange:function(e){g(e.target.value)}}),o.a.createElement(C.a.Control.Feedback,{type:"invalid"},"Please type an email address"),o.a.createElement(C.a.Control.Feedback,{type:"valid"},"Looks Good")),o.a.createElement(C.a.Group,{controlId:"formBasicPassword"},o.a.createElement(C.a.Label,null,"Password"),o.a.createElement(C.a.Control,{type:"password",placeholder:"Password",required:!0,onChange:function(e){b(e.target.value)}}),o.a.createElement(C.a.Control.Feedback,{type:"invalid"},"Please type your password"),o.a.createElement(C.a.Control.Feedback,{type:"valid"},"Looks Good")),o.a.createElement(p.a,{variant:"primary",type:"submit",onClick:function(e){fetch("http://localhost:4000/login",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:h,password:v})}).then((function(e){return e.json()})).then((function(e){if(console.log(e),e.id){var n=e.container.map((function(e){return JSON.parse(e)}));e.container=n,console.log(e),t("home"),a(),l(e)}else window.alert("Wrong Credentials")}))}},"Log In")))))},S=(a(104),function(e){var t=e.onRouteChange,a=e.loadUser,l=e.changeLogStateToTrue,r=Object(n.useState)(!1),i=Object(d.a)(r,2),c=i[0],s=i[1],u=Object(n.useState)(""),m=Object(d.a)(u,2),h=m[0],g=m[1],f=Object(n.useState)(""),E=Object(d.a)(f,2),v=E[0],b=E[1],w=Object(n.useState)(""),N=Object(d.a)(w,2),I=N[0],y=N[1];return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm-6 offset-sm-3"},o.a.createElement(C.a,{className:"register-form justify-content-center",noValidate:!0,validated:c,onSubmit:function(e){e.preventDefault(),!1===e.currentTarget.checkValidity()&&(e.preventDefault(),e.stopPropagation()),s(!0)}},o.a.createElement(C.a.Group,{controlId:"formBasicName"},o.a.createElement(C.a.Label,{className:"label"},"Name"),o.a.createElement(C.a.Control,{type:"text",placeholder:"Enter Name",required:!0,onChange:function(e){g(e.target.value)}}),o.a.createElement(C.a.Control.Feedback,{type:"invalid"},"Please type your name"),o.a.createElement(C.a.Control.Feedback,{type:"valid"},"Looks Good")),o.a.createElement(C.a.Group,{controlId:"formBasicEmail"},o.a.createElement(C.a.Label,null,"Email address"),o.a.createElement(C.a.Control,{type:"email",placeholder:"Enter email",required:!0,onChange:function(e){b(e.target.value)}}),o.a.createElement(C.a.Control.Feedback,{type:"invalid"},"Please type an email address"),o.a.createElement(C.a.Control.Feedback,{type:"valid"},"Looks Good")),o.a.createElement(C.a.Group,{controlId:"formBasicPassword"},o.a.createElement(C.a.Label,null,"Password"),o.a.createElement(C.a.Control,{type:"password",placeholder:"Password",required:!0,onChange:function(e){y(e.target.value)}}),o.a.createElement(C.a.Control.Feedback,{type:"invalid"},"Please type your password"),o.a.createElement(C.a.Control.Feedback,{type:"valid"},"Looks Good")),o.a.createElement(p.a,{variant:"primary",type:"submit",onClick:function(){fetch("http://localhost:4000/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:h,email:v,password:I})}).then((function(e){return e.json()})).then((function(e){e.name&&(a(e),t("home"),l())}))}},"Register")))))}),B=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).loadUser=function(t){e.setState({user:{name:t.name,email:t.email,container:t.container,joined:t.joined}})},e.onRouteChange=function(t){e.setState({route:t})},e.changeLogStateToFalse=function(){e.setState({isLogedIn:!1})},e.changeLogStateToTrue=function(){e.setState({isLogedIn:!0})},e.updateWindowDimensions=function(){e.setState({windowWidth:window.innerWidth})},e.onInputchange=function(t){e.setState({inputAddNewButton:t.target.value})},e.onInputChangeNewItem=function(t){e.setState({inputAddNewItem:t.target.value})},e.plusNewButton=function(t){if(t.preventDefault(),""!==e.state.inputAddNewButton){var a=e.state.user;a.container.push({id:e.state.inputAddNewButton,listItems:[]}),e.setState({user:a,inputAddNewButton:""})}},e.deleteListButton=function(t){var a=e.state.user;a.container.splice(t,1),e.setState({user:a})},e.setActiveButtonIdAndName=function(t){var a=e.state.user;console.log(a.container[t]);var n=a.container[t].id;e.setState({activeButtonId:t,activeButtonName:n})},e.addNewItem=function(t){if(t.preventDefault(),""!==e.state.inputAddNewItem){var a=e.state.user;a.container[e.state.activeButtonId].listItems.push({item:e.state.inputAddNewItem,lineThrough:null,uncheckIcon:null,checkIcon:"none"}),e.setState({user:a,inputAddNewItem:""})}},e.deleteItem=function(t){var a=e.state.user;a.container[e.state.activeButtonId].listItems.splice(t,1),e.setState({user:a})},e.setItemStyle=function(t){var a=e.state.user;null===a.container[e.state.activeButtonId].listItems[t].lineThrough&&"none"===a.container[e.state.activeButtonId].listItems[t].checkIcon?(a.container[e.state.activeButtonId].listItems[t].lineThrough="line-through",a.container[e.state.activeButtonId].listItems[t].uncheckIcon="none",a.container[e.state.activeButtonId].listItems[t].checkIcon=null):(a.container[e.state.activeButtonId].listItems[t].lineThrough=null,a.container[e.state.activeButtonId].listItems[t].checkIcon="none",a.container[e.state.activeButtonId].listItems[t].uncheckIcon=null),e.setState({user:a})},e.modalOnInputChange=function(t){e.setState({modalInput:t.target.value})},e.saveModalNewValue=function(){var t=e.state.user;t.container[e.state.activeButtonId].listItems[e.state.activeItemId].item=e.state.modalInput,e.setState({show:!1}),e.setState({user:t})},e.handleClose=function(){e.setState({show:!1}),e.setState({show:!1})},e.handleShow=function(t){e.setState({show:!0,save:!0,activeItemId:t.target.id})},e.state={route:"home",isLogedIn:!1,windowWidth:0,activeButtonId:0,activeButtonName:"",activeItemId:0,inputAddNewButton:"",inputAddNewItem:"",save:!0,modalInput:"",show:!1,inputValuesNewItem:[],user:{name:"",email:"",container:[],joined:""}},e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"render",value:function(){var e=this,t=this.state.user,a=null;0!==t.container.length&&(a=t.container.map((function(t,a){return o.a.createElement(I,{windowWidth:e.state.windowWidth,onClick:function(){return e.setActiveButtonIdAndName(a)},deleteListButton:function(){return e.deleteListButton(a)},key:"".concat(t).concat(a),label:t.id})})));var l=null;return 0!==t.container.length&&(l=t.container[this.state.activeButtonId].listItems.map((function(t,a){return o.a.createElement(w,{onClick:function(){return e.setItemStyle(a)},key:"".concat(t).concat(a),index:a,label:t.item,handleShow:function(t){return e.handleShow(t)},save:e.state.save,modalInput:e.state.modalInput,lineThrough:t.lineThrough,checkIcon:t.checkIcon,uncheckIcon:t.uncheckIcon,display:t.display,deleteItem:function(){return e.deleteItem(a)}})}))),o.a.createElement(n.Fragment,null,o.a.createElement(f,{show:this.state.show,onChange:function(t){return e.modalOnInputChange(t)},handleClose:function(){return e.handleClose()},saveModalNewValue:function(){return e.saveModalNewValue()}}),o.a.createElement(h,null),o.a.createElement("div",{className:"container-fluid border border-light"},o.a.createElement("div",{className:"row"},o.a.createElement(b,{onRouteChange:this.onRouteChange,changeLogStateToFalse:this.changeLogStateToFalse,isLogedIn:this.state.isLogedIn,loadUser:this.loadUser,user:this.state.user})),"login"===this.state.route?o.a.createElement(k,{onRouteChange:this.onRouteChange,loadUser:this.loadUser,changeLogStateToTrue:this.changeLogStateToTrue}):"home"===this.state.route?o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-4 listSummarySection"},o.a.createElement("form",{className:"form-inline formWraper",onSubmit:function(t){return e.plusNewButton(t)}},o.a.createElement("input",{onChange:this.onInputchange,value:this.state.inputAddNewButton,type:"text",id:"inputNewListItem",className:"form-control",placeholder:"Name Your List","aria-label":"Insert text","aria-describedby":"edit an existing entry field"}),o.a.createElement("button",{onClick:function(t){return e.plusNewButton(t)},type:"button",id:"plusButton",className:"btn-warning"},"+")),o.a.createElement("div",{className:"myListSummary-wraper"},o.a.createElement(y.a,{id:"dropdown-basic-button",className:"m-auto capitalize ".concat(e.state.windowWidth<992?null:"hidden"),title:"All Your Lists",variant:"Warning",size:"lg"},a),o.a.createElement("ul",{className:"myListSummary ".concat(e.state.windowWidth<992?"hidden":null)},a))),o.a.createElement("div",{className:"col-lg-8 list-content"},o.a.createElement("form",{className:"taskForm",onSubmit:function(t){return e.addNewItem(t)}},o.a.createElement("div",{className:"component1"},o.a.createElement("input",{onChange:this.onInputChangeNewItem,value:this.state.inputAddNewItem,type:"text",className:"form-control shadow input-new-line",placeholder:"New item","aria-label":"Insert text","aria-describedby":"edit an existing entry field"})),o.a.createElement("div",{onClick:function(t){return e.addNewItem(t)},className:"component2",role:"button"},o.a.createElement("i",{className:"far fa-plus-square","aria-hidden":"true"}),o.a.createElement("h5",{className:"addTask"},"Add new item"))),o.a.createElement("ul",{className:"todo-list"},o.a.createElement("h3",{className:"todo-name"},this.state.activeButtonName),l))):o.a.createElement(S,{onRouteChange:this.onRouteChange,loadUser:this.loadUser,changeLogStateToTrue:this.changeLogStateToTrue})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},71:function(e,t,a){e.exports=a(112)},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},99:function(e,t,a){}},[[71,1,2]]]);
//# sourceMappingURL=main.2706c27b.chunk.js.map