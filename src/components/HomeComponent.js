import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function Home(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md m-1">
                    <Card>
                        <CardImg src="/assets/images/advertisement-advertising-architecture-background-617230.jpg" alt="Brick Wall" />
                        <CardBody>
                            <CardTitle><h3>Welcome to Burger Restaurant</h3></CardTitle>
                            <CardText>Home of Burgers and Fries.</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-md m-1">
                    <Card>
                        <CardImg src="/assets/images/brick-wall-1834784_640.jpg" alt="Brick Wall" />
                        <CardBody>
                            <CardTitle><h3>Cozy Atmosphere</h3></CardTitle>
                            <CardText>Chill out and eat.</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-md m-1">
                    <Card>
                        <CardImg src="/assets/images/burgers-1839090_640.jpg" alt="Food" />
                        <CardBody>
                            <CardTitle><h3>Flame grilled and Home Cooked</h3></CardTitle>
                            <CardText>Made by Mom and Pop Chefs</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-md m-1">
                    <Card>
                        <CardImg src="/assets/images/food-1081707_640.jpg" alt="Brick Wall" />
                        <CardBody>
                            <CardTitle><h3>Family Friendly</h3></CardTitle>
                            <CardText>Sit down and eat with the whole Family.</CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>        
    );
}

export default Home;   