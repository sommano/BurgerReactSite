import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';


function About(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>About Us</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>About Us</h2>
                    <hr />
                </div>
            </div>
            <div className="row row-content">
                <div class="col-sm-6">
                    <img class="d-flex mr-3 img-thumbnail" src="assets/images/burger-and-bacon-sandwich-2983099.jpg" alt="Burger" />
                </div>
                <div className="col-sm-6">
                    <h3>Tasty Burger Since 1990</h3>
                    <p>We started out just cooking burgers in the back of our yard. My grandpa the great Jim Brown started cooking in the old days and passed down our family recipe to my father James Brown. That burger torch has now been passed to me and I will continue to cook to satisfy our customers. I been flipping burger since my grandpa taught me cooking at the young age of 12. There isnt any burger that can defeat me.</p>
                    <Card className="bg-light mt-3">
                        <CardBody>
                            <blockquote className="blockquote">
                                <p className="mb-0">I flip and sear burgers from midday til nite. All to ensure that customers never go hungary.</p>
                                <footer className="blockquote-footer">John Brown - Chief Chef of Burgers,{' '}
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>                
                </div>
            </div>

            <div className="row">
                <div className="col-4">
                    <img className="d-flex mr-3 img-thumbnail" src="assets/images/bowl-1842294_640.jpg" alt="Burger1" />
                </div>   
                <div className="col-4">
                    <img class="d-flex mr-3 img-thumbnail" src="assets/images/snack-2635035_640.jpg" alt="Burger2" />
                </div>   
                <div className="col-4">
                    <img className="d-flex mr-3 img-thumbnail" src="assets/images/table-in-vintage-restaurant-6267.jpg" alt="Burger3" />
                </div>   
            </div>
            <div className="row">
                <div className="col-4">
                    <img className="d-flex mr-3 img-thumbnail" src="assets/images/potatoe-1161819_640.jpg" alt="Burger4" />
                </div>   
                <div className="col-4">
                    <img class="d-flex mr-3 img-thumbnail" src="assets/images/burger-951896_640.jpg" alt="Burger5" />
                </div>   
                <div className="col-4">
                    <img className="d-flex mr-3 img-thumbnail" src="assets/images/fried-735004_640.jpg" alt="Burger6" />
                </div>   
            </div>
            <div className="row">
                <div className="col-4">
                    <img className="d-flex mr-3 img-thumbnail" src="assets/images/snack-2635035_640.jpg" alt="Burger7" />
                </div>   
                <div className="col-4">
                    <img class="d-flex mr-3 img-thumbnail" src="assets/images/hamburger-and-fries-photo-2983101.jpg" alt="Burger8" />
                </div>   
                <div className="col-4">
                    <img className="d-flex mr-3 img-thumbnail" src="assets/images/ham-burger-with-vegetables-1639557.jpg" alt="Burger9" />
                </div>   
            </div>
        </div>
    );
}

export default About;