import React from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import myntra from '../src/images/myntra.webp';
import sports from '../src/images/sports.webp';
import saree from '../src/images/saree.webp';
import slider from '../src/images/slider.jpg';
import './Product.css'
import { BrowserRouter as Router, Switch, Route }
  from "react-router-dom";
import Product from './Product';
import Checkout from './Checkout';
import Clothingstore from './Clothingstore';
import './Clothingstore.css'








import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/header">

            <Header />


            <Carousel>
              <Carousel.Item interval={1000}>
                <img
                  className="app_image"
                  src={myntra}
                  alt="First slide"
                />
                <Carousel.Caption>

                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={500}>
                <img
                  className="app_image"
                  src={saree}
                  alt="Second slide"
                />
                <Carousel.Caption>

                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="app_image"
                  src={slider}
                  alt="Third slide"
                />
                <Carousel.Caption>

                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="app_image"
                  src={sports}
                  alt="Third slide"
                />
                <Carousel.Caption>

                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            <div className="footer">
              <h1></h1>
            </div>
            <Route path="/Checkout">
              <Checkout />
            </Route>






          </Route>
          <Route path="/Home">
            <Header />
            <Home />
          </Route>
          <Route path="/product">

            <Header />
            <Product />

          </Route>
          <Route path="/Clothingstore">
            <Header/>
            <Clothingstore />

          </Route>



        </Switch>






      </div>
    </Router>



  );

}

export default App;
