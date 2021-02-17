import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import OurFood from './components/OurFoodComponent';
import './App.css';
import { FOODITEMS } from './shared/fooditems';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fooditems: FOODITEMS
        };
    }

    render() {
        return (
            <div className="App">
                <Navbar dark color="danger">
                <div className="container">
                    <NavbarBrand href="/">El Presidente of Binondo</NavbarBrand>
                </div>
                </Navbar>
                <OurFood fooditems={this.state.fooditems} />
            </div>
        );
    }
}

export default App;
