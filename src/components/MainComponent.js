import React, { Component } from 'react';
import OurFood from './OurFoodComponent';
import Fooditeminfo from './FooditeminfoComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { FOODITEMS } from '../shared/fooditems';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fooditems: FOODITEMS,
            selectedFooditem: null
        };
    }

    onFooditemSelect(fooditemId) {
        this.setState({selectedFooditem: fooditemId});
    }

    render() {
        return (
            <div>
                <Header />
                <OurFood fooditems={this.state.fooditems} onClick ={fooditemId => this.onFooditemSelect(fooditemId)}/>
                <Fooditeminfo fooditem={this.state.fooditems.filter(fooditem => fooditem.id === this.state.selectedFooditem)[0]} />
                <Footer />
            </div>
        );
    }
}

export default Main;
