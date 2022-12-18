import React, { Component } from 'react';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Reservation from './ReservationComponent';
import {DISHES} from '../shared/dishes';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import DishDetail from './DishdetailComponent';
import {Routes, Route} from 'react-router-dom';


class Main extends Component{
  constructor(props){
    super(props);
    this.state = {
      dishes: DISHES,
      // selectedDish: null,
      // comments: COMMENTS,
      // promotions: PROMOTIONS,
      leaders: LEADERS
    };
  }

//   onDishSelect(dishId) {
//     this.setState({ selectedDish:dishId});
// }
    render(){
      // can declare function component inline or separate like here
      // I will likely always declare seperate because
      // I like everything to be super understandable
      // notice use of Arrow Function

      // const HomePage = () => {
      //     return(
      //       <Home/>
      //     );
      // }
      return (
        <div>
          <Header/>
          <Routes>
            {/* can't use 'component' since V6 - use 'element'}
            {/* <Route path="/home" Component={HomePage} /> */}
            <Route path="/home" element={<Home/>}/>
            <Route path="/reservation" element={<Reservation/>}/>
            {/* <Route path="/about" element={<About props={{selfie:"AllAboutMe"}}/>}/> */}
            <Route path="/about" element={<About props={{LEADERS}}/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/menu" element={<Menu/>}/> 
            {/* <Route path="/about" element={()=> <About leaders={this.state.leaders} />}/>  */}
            <Route index element={<Home/>}/>
          </Routes>
        <Footer/>
      </div>
      );
  }

}
export default Main;


