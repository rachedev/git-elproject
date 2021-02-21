import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

function RenderLocation({location}) {
    if (location) {
        return (
            

            <React.Fragment>
                <Media object src={location.image} alt={location.name} width="300"/>
                <Media body className= "ml-5 mb-4">
                    <Media heading>
                        {location.name}
                    </Media>
                    {location.description}
                </Media>
            </React.Fragment>
        )
    }
    return <div />;
}

function About(props) {

    const locations = props.locations.map(location => {
        return (
            <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
            <React.Fragment>
                <Media tag="li" key={location.id}>
                    <RenderLocation location={location}/>
                </Media>
                <br />
            </React.Fragment>
            </FadeTransform>
        );
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>About Us</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>ABOUT US</h2>
                    <hr />
                </div>
            </div>
            <div className="row row-content">
                <div className="col">
                    <h3>Our Mission</h3>
                    <p>El Presidente of Binondo stands for quality and convenience. Our mission is to cater to the dynamic demands of the new breed of diners who want freshly prepared, fast, and delicious food without having to go all the way to Manila's Chinatown in Binondo.</p>
                    <p>Conveniently located in Glorietta 4 and ADB, satisfy your cravings for Chinese food with our signature dishes.</p>
                    <p>Our menu offers a wide selection for individuals, families, or large groups, ranging from rice toppings, combo meals, packed lunches, or party packs to answer all the food needs of our valued guests. So whether it be your daily meals, special celebrations, and parties, let us take care of you.</p>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h3>Locations</h3>
                </div>
                <div className="col mt-4">
                    <Media list>
                        {locations}
                    </Media>
                </div>
            </div>
        </div>
    );
}

export default About;