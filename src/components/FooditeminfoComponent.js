import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderFooditem({fooditem}) {
    return (
        <div className='col-md-5 m-1'>
            <Card>
                <CardImg top src={fooditem.imagebasic} alt={fooditem.name} />
                <CardBody>
                    <CardText>{fooditem.description}</CardText>
                </CardBody>
            </Card>
        </div>
    )
}

function Fooditeminfo(props) {
    if (props.fooditem) {
        return (
            <div className="container">
                <div className="row">
                    <RenderFooditem fooditem={props.fooditem} />
                </div>
            </div>
        );
    }
    return <div />;
}

export default Fooditeminfo;