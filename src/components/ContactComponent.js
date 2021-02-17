import React from 'react';

function Contact(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2>Contact Us</h2>
                    <hr />
                </div>
            </div>

            <div className="row row-content align-items-center">
                <div className="col-sm-4">
                    <h5>CORPORATE HEADQUARTERS</h5>
                    <address>
                        Food Avenue<br />
                        Las Pinas<br />
                        Metro Manila
                    </address>
                </div>
                <div className="col">
                    <a role="button" className="btn btn-link" href="tel:+1234567890"><i className="fa fa-phone" /> 123-456-7890</a><br />
                    <a role="button" className="btn btn-link" href="mailto:fakeemail@fakeemail.co"><i className="fa fa-envelope-o" /> emailadd@somewhere.co</a>
                </div>
            </div>
        </div>
    );
}

export default Contact;
