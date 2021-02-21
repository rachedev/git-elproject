import React from 'react';
import { Card, CardImg, CardText, CardBody, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

function RenderFooditem({fooditem}) {
    return (
        <React.Fragment>
            <div className='col-md-5 ml-5 mr-5 mt-5 mb-5'>
                <Card>
                    <CardImg width="100%" src={fooditem.image} alt={fooditem.name} />
                    <CardBody>
                        <CardText>{fooditem.description}</CardText>
                    </CardBody>
                </Card>
            </div>
            <div className='col-md-5 mt-5 mb-5'>
                <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
                    <Card>
                        <CardImg top src={fooditem.imagebasic} alt={fooditem.name} />
                    </Card>
                </FadeTransform>

            </div>
        </React.Fragment>
    )
}

function Fooditeminfo(props) {
    if (props.fooditem) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb >
                            <BreadcrumbItem><Link to="/ourfood">Our Food</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.fooditem.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>{props.fooditem.name}</h2>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderFooditem fooditem={props.fooditem} />
                </div>
            </div>
        );
    }
    return <div />;
}

export default Fooditeminfo;