import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import aboutPic from "./components/images/about.svg";
import manoj from "./components/images/manoj.jpeg";
import aakash from "./components/images/aakash.jpeg";
import mukilan from "./components/images/mukilan.jpg";
import ranjith from "./components/images/ranjith.jpg";
import { useState } from "react";
import "./styles/about.css";
import brand_logo from "./components/images/brand_logo.gif";

export default function About() {
  const members = [
    { name: "AAKASH G S", img: aakash },
    { name: "MUKILAN S", img: mukilan },
    { name: "MANOJ KUMAR S", img: manoj },
    { name: "RANJITH", img: ranjith },
  ];
  const images = {
    "AAKASH G S": aakash,
    "MANOJ KUMAR S": manoj,
    "MUKILAN S": mukilan,
    RANJITH: ranjith,
    brand: brand_logo,
  };

  const [active, setActive] = useState("About");
  const memberdetails = [
    {
      name: "AAKASH G S",
      role: "Backend & Frontend developer",
      github: "https://github.com/Aakash-2000",
      gmail: "aakashganesh13@gmail.com",
    },

    {
      name: "MANOJ KUMAR S",
      role: "Backend & Frontend developer",
      github: "https://github.com/MANOJ-KUMAR-2000",
      gmail: "smk11500@gmail.com",
    },

    {
      name: "MUKILAN S",
      role: "Backend & Frontend developer",
      github: "https://github.com/MUKILAN-2003",
      gmail: "mukilan069@gmail.com",
    },
    {
      name: "RANJITH",
      role: "Backend & Frontend developer",
      github: "https://github.com/Randy-001",
      gmail: "ranjithvel2001@gmail.com",
    },
  ];
  //f7f8f8;
  return (
    <div>
      <Row style={{ width: "100%", margin: "0" }}>
        <Col lg={8} sm={12} style={{ overflow: "hidden" }}>
          <Container id="left-body">
            <Row>
              <Col lg={12} sm={12}>
                <img src={aboutPic} id="about-img" alt="about_vector_img" />
              </Col>
            </Row>
            <Row id="about-row-2">
              <Col lg={4} sm={12}>
                <h3 id="about-h3">
                  Join with us <br />
                  to make big difference
                </h3>
              </Col>
              <Col lg={8} sm={12}>
                <p id="about-p">
                  Building websites and applications for taking client's
                  business to next level is our ambition. We simplify this
                  process with our talents.
                </p>
              </Col>
            </Row>
            <Row>
              <Col lg={12} sm={12} id="blockquote-col">
                <blockquote>
                  <q>
                    When the going gets tough, put one foot in front of the
                    other and just keep going. Don’t give up.
                  </q>
                </blockquote>
              </Col>
            </Row>
            <Row>
              <h4 id="about-left-h-6">Team Members</h4>
              <hr id="about-hr" />
            </Row>
            <Row>
              <Container id="card-left-about">
                <Row>
                  {members.map((ele) => {
                    return (
                      <Col lg={6} sm={12}>
                        <Card id="card-size">
                          <Card.Img
                            variant="top"
                            id="about-card-img"
                            src={ele.img}
                          />
                          <Card.Body id="about-card-body">
                            <Card.Title>{ele.name}</Card.Title>

                            <button
                              id="card-about-icon-btn"
                              onClick={() => {
                                setActive(ele.name);
                                window.location.href = "/about#right-col";
                              }}
                            >
                              <i
                                className="fas fa-angle-right"
                                id="card-about-icon"
                              ></i>
                            </button>
                          </Card.Body>
                        </Card>
                      </Col>
                    );
                  })}
                </Row>
              </Container>
            </Row>
          </Container>
        </Col>
        <Col lg={4} sm={12} id="right-col">
          <Container>
            {active === "About" ? (
              <Row>
                <Col lg={12} id="about-right-col">
                  <img
                    id="team-member-img"
                    src={images["brand"]}
                    alt="brand_name"
                  />
                  <h4 id="about-right-title">Tech Creed</h4>
                  <ul id="about-ul">
                    <li>
                      <p className="location_para">
                        <i className="fa fa-map-marker" id="map-icon"></i> Tamil
                        Nadu, India
                      </p>
                    </li>
                  </ul>
                  <div id="about-contact-btn-container">
                    <button id="about-contact-btn">Contact us</button>
                  </div>
                </Col>
              </Row>
            ) : (
              memberdetails.map((ele) => {
                if (ele.name === active) {
                  return (
                    <Row>
                      <Col id="team-right-col" lg={12}>
                        <ul id="team-ul">
                          <li>
                            <img
                              id="team-member-img"
                              src={images[ele.name]}
                              alt="team_member_img"
                            />
                          </li>
                          <li>
                            <h4 style={{ textAlign: "center" }}>{ele.name}</h4>
                          </li>
                          <li>{ele.role}</li>

                          <li>
                            <a
                              href={ele.github}
                              style={{ textDecoration: "none" }}
                            >
                              <i id="github-link" className="fab fa-github"></i>
                              <span style={{ color: "whitesmoke" }}>
                                {ele.name}
                              </span>
                            </a>
                          </li>
                          <li>
                            <p>
                              <i
                                id="github-link"
                                className="fa fa-envelope"
                              ></i>
                              {ele.gmail}
                            </p>
                          </li>
                        </ul>
                      </Col>
                    </Row>
                  );
                } else {
                  return null;
                }
              })
            )}
          </Container>
        </Col>
      </Row>
    </div>
  );
}
