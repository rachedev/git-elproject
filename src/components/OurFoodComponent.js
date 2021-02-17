import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

function RenderOurFoodItem({fooditem}) {
    return (
        <Card>
            <CardImg width="100%" src={fooditem.image} alt={fooditem.name} />
            <CardImgOverlay>
                <CardTitle>{fooditem.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}

function OurFood(props) {

    const fooditems = props.fooditems.map(fooditem => {
        return (
            <div key={fooditem.id} className="col-md-5 m-1">
                <RenderOurFoodItem fooditem={fooditem} />               
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

export default OurFood;
