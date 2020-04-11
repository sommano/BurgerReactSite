import React, { Component } from 'react';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Location from './LocationComponent';
import Footer from './FooterComponent';
import About from './AboutComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {

        const HomePage = () => {
            return (
                <Home />
            );
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/location' component={Location} />
                    <Route exact path='/menu' component={Menu} />
                    <Route exact path='/aboutus' component={About} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;