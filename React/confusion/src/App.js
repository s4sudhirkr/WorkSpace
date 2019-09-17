import React  ,{ Component } from 'react';
 import './App.css';
//import Menu from './components/MenuComponent';
//import TravelMenu from './components/TravelComponent';
import Main from './components/maincomponent';
import {Navbar, NavbarBrand } from 'reactstrap';
import Home from './components/Homepage';
import MenuCard from './components/MenuCardComponent';
import Menu from './components/MenuComponent';
//import MenuCard from './components/MenuCardComponent';
 //import { DISHES } from './shared/dishes';
//import {Navbar, NavbarBrand } from 'reactstrap';
//import Tutor from './components/TutorComponent';
//import DishDetail from './components/DishdetailComponent';
import {  BrowserRouter } from 'react-router-dom';

class App extends Component {
  // constructor(props) {
  //   super(props);
    
  //}



  render() {
    return (
      <BrowserRouter>
      <div>
        {/* <Home  /> */}
      <Main  />
      </div>
      </BrowserRouter>

      );
  }
   }
   export default App;





//function App() {
//  class App extends Component {




// render() {
//   return (
//     <div><Main  /></div>
//     );
// }
//  }
//  export default App;

 {/* <Navbar dark color="secondary">
   <div className="container">
   <NavbarBrand href="/">React</NavbarBrand>   
   </div>
   </Navbar> */}
   {/* <DishDetail  dishes={this.state.dishes} /> */}
  {/* <TravelMenu /> */}
    {/* <MenuCard dishes={this.state.dishes} />   */}
    {/* <div ><Tutor /> </div> */}














// function App1() {
//   render() {
//   return (
//     // <div className="App">
//     <div >
//  <Navbar dark color="secondary">
//    <div className="container">
//    <NavbarBrand href="/">Travel </NavbarBrand>   
 
//    </div>
//    </Navbar>
   
//     {/* <MenuCard dishes={this.state.dishes} />  */}
//    <TravelMenu /> 

// {/* 
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1 className="App-title">Welcome to React</h1>
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}


//     </div>
//   );
// }
// }



 


