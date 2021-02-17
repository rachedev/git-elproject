import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import Fooditeminfo from './FooditeminfoComponent';
class OurFood extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFooditem: null
        };
    }

    onFooditemSelect(fooditem) {
        this.setState({selectedFooditem: fooditem});
    }

    render() {
        const fooditems = this.props.fooditems.map(fooditem => {
            return (
                <div key={fooditem.id} className="col-md-5 m-1">
                    <Card onClick={() => this.onFooditemSelect(fooditem)}>
                        <CardImg width="100%" src={fooditem.image} alt={fooditem.name} />
                        <CardImgOverlay>
                            <CardTitle>{fooditem.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {fooditems}
                </div>
                <Fooditeminfo fooditem={this.state.selectedFooditem} />
            </div>
        );
    }
}

export default OurFood;
