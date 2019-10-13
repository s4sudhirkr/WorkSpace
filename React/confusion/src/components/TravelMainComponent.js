import React, { Component } from 'react';
//import Menu from './components/MenuComponent';
import TravelMenu from './TravelComponent';
import Main from './maincomponent';
import { Navbar, NavbarBrand } from 'reactstrap';
import Home from './Homepage';
import MenuCard from './MenuCardComponent';
import Menu from './MenuComponent';
//import MenuCard from './components/MenuCardComponent';
import { TRAVEL  } from '../shared/travel';
import { LEADERS  } from '../shared/leaders';
import { Route, Switch, BrowserRouter,Redirect } from 'react-router-dom';
import Header from './HeaderComponent';
import TravelHome from './Travel/HomePageComponent';
import CardPage from './Travel/CradComponent';
import Example from './Travel/CarouselComponent';
import Footer from './FooterComponent';
import About from './AboutComponent';
import Contact from './ContactComponet';
import TravelDetails from '.././components/Travel/TravelDetailsComponent';

class TravelMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dish: TRAVEL,
      leader : LEADERS

    }
  }



  render() {
    const HomePage = () => {
      return (
        <CardPage dishes={this.state.dish} />
      );
    }

    return (
      <BrowserRouter>
        <div>
        
          <Header />


          < Switch>
            <Route path="/home" component={HomePage} />
            <Route exact path="/menu" component={() => <Menu dishes={this.state.dish} />} />
            {/* <Route path="/menu/:dishId" component={DishWithId} /> */}
            <Route exact path="/contactus" component={Contact} />
            <Route exact path="/aboutus" component={() => <About leaders={this.state.leader} />} />
            {/* <Route path="/aboutus/:leaderId" component={RenderLeader} /> */}
            component={()=><About dishes={this.state.leaders} /> }
            <Route exact path="/traveldetails" component={()=><TravelDetails leaders={this.state.leader[0]} />} />
            <Redirect to="/home" />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter >

    );
  }
}
export default TravelMain;










