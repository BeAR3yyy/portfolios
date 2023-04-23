import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../assets/avataaars.jpeg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={8} className="home-about-description">
                        <h1 style={{ fontSize: "2.6em" }}>
                            LET ME <span className="blue"> INTRODUCE </span> MYSELF
                        </h1>
                        <br />
                        <br />
                        <p className="home-about-body">
                            I am a <b className="blue">Full Stack developer </b>
                            who likes to craft solid and scalable frontend products with great
                            user experience.
                            <br />
                            <br />
                            Like a Jedi with a lightsaber, I wield the power of{" "}
                            <b className="blue">Javascript, React, Css, Git, Flask and FastAPI in Python</b> and
                            more with ease. Though I may not be fully fluent, I approach my
                            work with a relaxed and natural style, always striving for
                            excellence.
                            <br />
                            <br />
                            When I'm not coding, you can find me at the&nbsp;
                            <i>
                                <b className="blue">special performance of indie band</b>. Or, if the weather isn't
                                cooperating, you might find me curled up on the couch with a
                                good book or<b className="blue"> online games</b> .
                            </i>
                            <br />
                            <br />I am a contributor to <b className="blue">OpenSource </b>
                            projects on GitHub one of them have become
                            <i>
                                <b className="blue"> trending globally repository</b>.
                            </i>
                            &nbsp; I participate in the development and maintenance of these
                            projects by submitting code, fixing bugs, and suggesting
                            improvements.
                        </p>
                    </Col>
                    <Col md={4} className="myAvtar">
                        <Tilt>
                            <img src={myImg} className="img-fluid rounded-circle" alt="avatar" />
                        </Tilt>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="home-about-social">
                        <h1>FIND ME ON</h1>
                        <ul className="home-about-social-links">
                            <li className="social-icons">
                                <a
                                    href="https://github.com/BeAR3yyy"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiFillGithub />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.linkedin.com/in/eddy-tan-57874619a/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <FaLinkedinIn />
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
export default Home2;
