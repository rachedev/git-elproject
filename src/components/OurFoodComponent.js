import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderOurFoodItem({fooditem}) {
    return (
        <Card>
            <Link to={`/ourfood/${fooditem.id}`}>
                <CardImg width="100%" src={fooditem.image} alt={fooditem.name} />
                <CardImgOverlay>
                    <CardTitle>{fooditem.name}</CardTitle>
                </CardImgOverlay>
            </Link>
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
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Our Food</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>OUR FOOD</h2>
                    <hr />
                </div>
            </div>
            <div className="row">
                {fooditems}
            </div>
        </div>
    );    
}

export default OurFood;
