import React  ,{ Component } from 'react';

//import Menu from './components/MenuComponent';
//import TravelMenu from './components/TravelComponent';
//import MenuCard from './MenuCardComponent';
 
import {Navbar, NavbarBrand } from 'reactstrap';
//import Tutor from './components/TutorComponent';
import {DishDetail} from './DishdetailComponent';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import {Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Contact from './ContactComponet';
import {connect } from 'react-redux';


import { Media } from 'reactstrap';
import About from './AboutComponent';
import { addComment, fetchDishes, dishesLoading } from './redux/ActionCreators';
import { actions } from 'react-redux-form';

const mapStateToProps=state=>
{
  return { 
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
  
}

const mapDispatchToProps=(dispatch)=>(
  {
    addComment: (dishId,rating,author, comment)=>dispatch(addComment(dishId,rating,author, comment)),
     fetchDishes : () => {dispatch(fetchDishes())}
  }
);



//function App() {
 class Main extends Component {
  constructor(props) {
    super(props);
    // Move to Reducer.js for redux
    // this.state = {
    //   dishes: DISHES,
    //   comments: COMMENTS,
    //   promotions: PROMOTIONS,
    //   leaders: LEADERS
    //  // selectedDish: null
    // };
  }

componentDidMount()
{
  this.props.fetchDishes();
}




render() {
  const HomePage = ()=> {
  return(
    <Home dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
    dishesLoading={this.props.dishes.isLoading}
    dishesErrMess={this.props.dishes.errMess}
    promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
    leader={this.props.leaders.filter((leader) => leader.featured)[0]}     />
  );
  }

const DishWithId=({match})=>{
  console.log("!!!!Inside DishWithId");
return(
   <DishDetail dish={this.props.dishes.dishes.filter((dish)=>dish.id===parseInt(match.params.dishId,10))[0]} 
   isLoading={this.props.dishes.isLoading}
   errmess={this.props.dishes.errMess}
   comment={this.props.comments.filter((comment)=>comment.dishId===parseInt(match.params.dishId,10))} 
// comment={this.props.comments.filter((comment) => comment.featured)[0]}
addComment={this.props.addComment}
 /> 

);
}


const RenderLeader=({match})=>
{
  return(
<About leader={this.props.leaders.filter((leader)=>leader.id===parseInt(match.params.leaderId,4)) } />
  );

}


  return (
    <div>
 
   <Header />
<Switch>
<Route path="/home" component={HomePage} />
<Route exact path="/menu" component={()=><Menu dishes={this.props.dishes} /> } /> 
<Route path="/menu/:dishId" component={DishWithId} />
<Route exact path="/contactus" component={Contact} />
  <Route exact path="/aboutus" component={()=><About leaders={this.props.leaders} /> } />
  <Route path="/aboutus/:leaderId" component={RenderLeader} />
{/* component={()=><About dishes={this.state.leaders} /> } /> */}
<Redirect to ="/home" />
  </Switch>
 <Footer /> 
  </div>
);

}
}
 export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main)); // caling Redux using react


