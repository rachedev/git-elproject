import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FadeTransform } from 'react-animation-components';

function RenderOurFoodItem({fooditem}) {
    return (
        <FadeTransform
            in
            transformProps={{
                exitTransform: 'scale(0.5) translateY(50%)'
            }}>
        <Card>
            <Link to={`/ourfood/${fooditem.id}`}>
                <CardImg width="100%" src={fooditem.image} alt={fooditem.name} />
                <CardImgOverlay>
                    <CardTitle>{fooditem.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
        </FadeTransform>
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
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Our Food</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>OUR FOOD</h2>
                    <hr />
                </div>
            </div>
            <div className="row mt-5 mb-5">
                {fooditems}
            </div>
        </div>
    );    
}

export default OurFood;
