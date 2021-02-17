import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Fooditeminfo extends Component {
    renderFooditem(fooditem) {
        return (
            <div className='col-md-5 m-1'>
                <Card>
                    <CardImg top src={fooditem.imagebasic} alt={fooditem.name} />
                    <CardBody>
                        <CardTitle>{fooditem.name}</CardTitle>
                        <CardText>{fooditem.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }

    render() {
        if (this.props.fooditem) {
            return (
                <div className="container">
                    <div className="row">
                        {this.renderFooditem(this.props.fooditem)}
                    </div>
                </div>
            );
        }
        return <div />;
    }
}

export default Fooditeminfo;