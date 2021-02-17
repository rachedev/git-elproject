import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import OurFood from './components/OurFoodComponent';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar dark color="danger">
                <div className="container">
                    <NavbarBrand href="/">El Presidente of Binondo</NavbarBrand>
                </div>
                </Navbar>
                <OurFood />
            </div>
        );
    }
}

export default App;
