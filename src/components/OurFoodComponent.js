import React, { Component } from 'react';

class OurFood extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fooditems: [
                {
                    id: 0,
                    name: 'Mami',
                    image: 'assets/images/mamibasic.jpg',
                    choices: 4,
                    description: "hot noodle soup with vegetables and the addition of meat or wonton dumplings"
                },
                {
                  id: 1,
                  name: 'Congee',
                  image: 'assets/images/congeebasic.jpg',
                  choices: 4,
                  description: "warm thick, white rice porridge with meat, fish, and/or century egg"
                },
                {
                    id: 2,
                    name: 'Noodles',
                    image: 'assets/images/noodlesbasic.jpg',
                    choices: 4,
                    description: "hunger-satisfying noodle dish with meat and vegetables"
                },
                {
                    id: 3,
                    name: "Binondo\'s Best",
                    image: 'assets/images/bbestbasic.jpg',
                    choices: 5,
                    description: "savory meat, seafood, or vegetable dish that perfectly accompanies rice"
                },
                {
                    id: 4,
                    name: "Combo Meals",
                    image: 'assets/images/combobasic.jpg',
                    choices: 4,
                    description: "sumptuous combination of our food offerings"
                },
            ],
        };
    }

    render() {
        const ourfood = this.state.fooditems.map(fooditem => {
            return (
                <div key={fooditem.id} className="col-12">
                    <img src={fooditem.image} alt={fooditem.name}  class="img-fluid w-50 h-auto"/>
                    <h2>{fooditem.name}</h2>
                    <p>{fooditem.description}</p>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {ourfood}
                </div>
            </div>
        );
    }
}

export default OurFood;
