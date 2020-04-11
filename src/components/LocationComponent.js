import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Input, Col, FormFeedback } from 'reactstrap';

class Location extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Location</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>Location</h2>
                        <hr />
                        <h3>1000 Burger Street - Houston, Texas 77449</h3>
                    </div>
                </div>

                <div className="row row-content align-items-center">
                    <div class="row row-content">
                        <div className="col-sm-6">
                            <img className="d-flex mr-3 img-thumbnail" src="assets/images/location.jpg" alt="map" />
                        </div>
                        <div class="col-sm-6">
                            <h3>Directions</h3>
                            <p>We are located in Houston, Texas off I-10 west on 1000 Burger Street</p>
                        </div>        
                    </div>  
                </div>

            </div>           
        );
    }
}

export default Location;