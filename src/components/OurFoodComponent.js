import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

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

    renderSelectedFooditem(fooditem) {
        if (fooditem) {
            return (
                <Card>
                    <CardImg top src={fooditem.imagebasic} alt={fooditem.name} />
                    <CardBody>
                        <CardTitle>{fooditem.name}</CardTitle>
                        <CardText>{fooditem.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        return <div />;
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
                <div className="row">
                    <div className="col-md-5 m-1">
                        {this.renderSelectedFooditem(this.state.selectedFooditem)}
                    </div>
                </div>
            </div>
        );
    }
}

export default OurFood;
