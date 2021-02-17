import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

class OurFood extends Component {
    
    render() {
        const fooditems = this.props.fooditems.map(fooditem => {
            return (
                <div key={fooditem.id} className="col-md-5 m-1">
                    <Card onClick={() => this.props.onClick(fooditem.id)}>
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
            </div>
        );
    }
}

export default OurFood;
