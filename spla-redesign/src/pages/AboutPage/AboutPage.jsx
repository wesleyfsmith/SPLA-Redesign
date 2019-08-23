import React from "react";
import "./AboutPage.css";
import Header from "../../components/Header/Header";
import { Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';

const AboutPage = props => {
  return (
    <div>
      <Header />
      <Row className="justify-content-center">
        <img
          src="https://images.squarespace-cdn.com/content/v1/582dc9ea6a4963e5091cd8cd/1540778235218-O9SDTRKNU045F4EMARMM/ke17ZwdGBToddI8pDm48kKw5NAZlB0H694uMtIURqZlZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIwoxAL7n0AQMhmiInkcGR2CVm0BxdOWm2sWxONo0KfpcKMshLAGzx4R3EDFOm1kBS/safeparkingla_stock1.jpg?format=500w"
          alt="Safe Parking LA"
          className="home-story-img"
        />
        <div className="aboutSpla-container">
          <ul

            className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active ">
              <button
                style={{
                  color: "rgb(240, 130, 34)",
                  fontWeight: "900",
                  backgroundColor: "rgba(240,130,34,0.3)"
                }}
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarTogglerAbout"
                aria-controls="navbarTogglerAbout"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                About Safe Parking LA
            </button>
              <div className="collapse navbar-collapse " id="navbarTogglerAbout"
              >
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0 ">
                  <li className="nav-item active">Our Process</li>
                  <li className="nav-item active">In The News</li>
                  <li className="nav-item active">Events</li>
                  <li className="nav-item active">Partner with Us</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <Col xs={12} className="home-story">
          <h3>About Safe Parking LA</h3>
          <p className="story">
            Our mission is simple, we want to provide safe parking options for
            people experiencing homelessness in their vehicles. In Los Angeles
            County, there are over 15,700 persons living in 9100 vehicles (cars,
            vans, campers, and R.V.s) each night, per the L.A. County Homeless
            Count performed in January 2018. These vehicle dwellers represent
            over 25% of the population of people experiencing homelessness in LA
            County.
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default AboutPage;
