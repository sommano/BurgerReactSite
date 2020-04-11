import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function Menu(props) {

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Directory</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Directory</h2>
                    <hr />
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12">
                    <div className="section_title text-center mb-80">
                        <h1>Burger Menu</h1>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6 col-md-6">
                    <div className="d-flex align-items-center ">
                        <div className="media">
                            <img className="d-flex mr-3 img-thumbnail" src="assets/images/burger-951896_640.jpg" alt="regular Burger" />
                        </div>
                        <div className="col-sm-4 order-sm-last col-md-3">
                            <h3 className="text-sm-center">Regular Burger</h3>
                            <p className="text-sm-center">Our classic beef patty on a bun .</p>
                            <p className="text-sm-center">$6.00</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="d-flex align-items-center ">
                        <div className="media">
                            <img className="d-flex mr-3 img-thumbnail" src="assets/images/burger-731298_640.jpg" alt="Bacon Burger" />
                        </div>
                        <div className="col-sm-4 order-sm-last col-md-3">
                            <h3 className="text-sm-center">Bacon Burger</h3>
                            <p className="text-sm-center">Beef and bacon Burger.</p>
                            <p className="text-sm-center">$8.00</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="d-flex align-items-center ">
                        <div className="media">
                            <img className="d-flex mr-3 img-thumbnail" src="assets/images/snack-2635035_640.jpg" alt="Cheese Burger" />
                        </div>
                        <div className="col-sm-4 order-sm-last col-md-3">
                            <h3 className="text-sm-center">Cheese Burger</h3>
                            <p className="text-sm-center">Cheese and beef patyy on a bun.</p>
                            <p className="text-sm-center">$7.00</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="d-flex align-items-center ">
                        <div className="media">
                            <img className="d-flex mr-3 img-thumbnail" src="assets/images/hamburger-and-fries-photo-2983101.jpg" alt="Double Burger" />
                        </div>
                        <div className="col-sm-4 order-sm-last col-md-3">
                            <h3 className="text-sm-center">DoubleStack Burger</h3>
                            <p className="text-sm-center">2 beef patty on a bun</p>
                            <p className="text-sm-center">$9.00</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="d-flex align-items-center ">
                        <div className="media">
                            <img className="d-flex mr-3 img-thumbnail" src="assets/images/burger-827309_640.jpg" alt="Chicken Burger" />
                        </div>
                        <div className="col-sm-4 order-sm-last col-md-3">
                            <h3 className="text-sm-center">Chicken Burger</h3>
                            <p className="text-sm-center">Chicken patty</p>
                            <p className="text-sm-center">$7.00</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 ">
                    <div className="d-flex align-items-center ">
                        <div className="media">
                            <img className="d-flex mr-3 img-thumbnail" src="assets/images/bowl-1842294_640.jpg" alt="Fries" />
                        </div>
                        <div className="col-sm-4 order-sm-last col-md-3">
                            <h3 className="text-sm-center">Fries</h3>
                            <p className="text-sm-center">Savory Fried Fresh Cut Potatoes.</p>
                            <p className="text-sm-center">$3.00</p>
                        </div>
                    </div>
                </div>             
            </div>
            
        </div>
    );
}

export default Menu;