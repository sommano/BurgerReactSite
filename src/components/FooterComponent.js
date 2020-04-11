import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <footer className="site-footer">
            <div class="container">
                <div class="row">             
                    <div class="col-xl-4 col-md-6 col-lg-4 text-center">
                        <ul class="list-unstyled">
                            <li><Link to='/home'>Home</Link></li>
                            <li><Link to='/menu'>Menu</Link></li>
                            <li><Link to='/location'>Location</Link></li>
                            <li><Link to='/aboutus'>About</Link></li>

                        </ul>
                    </div>
                    <div class="col-xl-4 col-md-6 col-lg-4 text-center">
                        <ul class="list-unstyled">
                            <h3>Hours</h3>
                            <h5>Monday – Thursday  11:00AM – 9:00PM </h5>
                            <h5>Friday & Saturday  11:00AM – 10:00PM</h5>
                            <h5>Sunday    11:00AM –7:00PM</h5>
                            <a role="button" class="btn btn-link" href="tel:+1-555-555-5555"><i class="fa fa-phone"></i> 1-555-555-5555</a><br />
                            <a role="button" class="btn btn-link" href="mailto:burger@burger.com"><i class="fa fa-envelope-o"></i> burger@burger.com</a>
                        </ul>
                    </div>
                    <div class="col-xl-4 col-md-6 col-lg-4 text-center">
                        <a class="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i class="fa fa-instagram"></i></a>
                        <a class="btn btn-social-icon btn-facebook" href="http://facebook.com/"><i class="fa fa-facebook"></i></a>
                        <a class="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i class="fa fa-twitter"></i></a>
                        <a class="btn btn-social-icon btn-google" href="http://youtube.com/"><i class="fa fa-youtube"></i></a>
                    </div>           
                </div>
            <div class="col-xl-12">
                <p class="text-center">Burger Restaurant - 1000 Burger Street - Houston, Texas 77449</p>
            </div>
        </div>    

        </footer>
    )
}

export default Footer;