import React, { Component } from 'react';
import OurFood from './OurFoodComponent';
import Fooditeminfo from './FooditeminfoComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { FOODITEMS } from '../shared/fooditems';
import { LOCATIONS } from '../shared/locations';
import { PROMOTIONS } from '../shared/promotions';
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

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/ourfood' render={() => <OurFood fooditems={this.state.fooditems} />} />
                    <Route exact path='/contactus' component={Contact} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;
