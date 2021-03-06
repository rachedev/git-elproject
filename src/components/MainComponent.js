import React, { Component } from 'react';
import OurFood from './OurFoodComponent';
import Fooditeminfo from './FooditeminfoComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { FOODITEMS } from '../shared/fooditems';
import { LOCATIONS } from '../shared/locations';
import { PROMOTIONS } from '../shared/promotions';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fooditems: FOODITEMS,
            locations: LOCATIONS,
            promotions: PROMOTIONS
        };
    }

    render() {

        const HomePage = () => {
            return (
                <Home
                    const promotion1={this.state.promotions.filter(promotion => promotion.id===0)[0]}
                    const promotion2={this.state.promotions.filter(promotion => promotion.id===1)[0]}
                    const promotion3={this.state.promotions.filter(promotion => promotion.id===2)[0]}
                />
            );
        };

        const FooditemWithId = ({match}) => {
            return (
                <Fooditeminfo 
                    fooditem={this.state.fooditems.filter(fooditem => fooditem.id === +match.params.fooditemId)[0]}
                />
            );
        };

        return (
            <div>
                <Header />
                <Route render={({location}) => (
                    <TransitionGroup>
                        <CSSTransition
                            key={location.key}
                            timeout={300}
                            classNames="page"
                        >
                            <Switch>
                                <Route path='/home' component={HomePage} />
                                <Route exact path='/ourfood' render={() => <OurFood fooditems={this.state.fooditems} />} />
                                <Route path='/ourfood/:fooditemId' component={FooditemWithId} />
                                <Route exact path='/aboutus' render={() => <About locations={this.state.locations} />} />
                                <Route exact path='/contactus' component={Contact} />
                                <Redirect to='/home' />
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>
                )} />
                <Footer />
            </div>
        );
    }
}

export default Main;
