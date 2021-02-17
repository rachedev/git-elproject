import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import OurFood from './OurFoodComponent';
import Fooditeminfo from './FooditeminfoComponent';
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
                <Navbar dark color="danger">
                <div className="container">
                    <NavbarBrand href="/">El Presidente of Binondo</NavbarBrand>
                </div>
                </Navbar>
                <OurFood fooditems={this.state.fooditems} onClick ={fooditemId => this.onFooditemSelect(fooditemId)}/>
                <Fooditeminfo fooditem={this.state.fooditems.filter(fooditem => fooditem.id === this.state.selectedFooditem)[0]} />
            </div>
        );
    }
}

export default Main;
