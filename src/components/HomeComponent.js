import React from 'react';
import { Button, Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FadeTransform } from 'react-animation-components';

function RenderCard({item}) {
    return (
        <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );
}

function DeliverCard() {
    return (
        <Card>
            <CardImg src="/assets/images/rickshaw.jpg" alt="rickshaw" />
            <CardBody className= "text-center">
                <br />
                <CardTitle>We deliver!</CardTitle>
                <a role="button" className="btn btn-link" href="tel:+1234567890"><i className="fa fa-phone" /> 123-456-7890</a>
            </CardBody>
        </Card>
    );
}

function LocationsCard() {
    return (
        <Card>
            <CardImg src="/assets/images/locations.jpg" alt="restaurant locations" />
            <CardBody className= "text-center">
                <br />
                <CardTitle><Button color="danger"><Link to="/aboutus">Locations</Link></Button></CardTitle>
            </CardBody>
        </Card>
    );
}

function Home(props) {
    return (
        <FadeTransform
        in
        transformProps={{
            exitTransform: 'scale(0.5) translateY(50%)'
        }}>
        <div className="container">
            <div className="row mt-5">
                <div className="col-md m-1">
                    <RenderCard item={props.promotion1} />
                </div>
                <div className="col-md m-1">
                    <RenderCard item={props.promotion2} />
                </div>
                <div className="col-md m-1">
                    <RenderCard item={props.promotion3} />
                </div>
            </div>
            <div className="row mt-5 mb-5">
                <div className="col-md-1 m-1">
                </div>
                <div className="col-md-4 m-1">
                    <DeliverCard/>
                </div>
                <div className="col-md-1 m-1">
                </div>
                <div className="col-md-4 m-1">
                    <LocationsCard/>
                </div>
            </div>
        </div>
        </FadeTransform>
    );
}

export default Home;