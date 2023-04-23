import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../assets/about.png";

function About() {
    return (
        <Container fluid className="about-section">
            <Container>
                <Row style={{ justifyContent: "center", padding: "10px" }}>
                    <Col
                        md={7}
                        style={{
                            justifyContent: "center",
                            paddingBottom: "30px",
                        }}
                    >
                        <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                            Know Who <strong className="blue">I am</strong>
                        </h1>
                        <Aboutcard />
                    </Col>
                    <Col
                        md={5}
                        style={{ paddingTop: "120px", paddingBottom: "50px" }}
                        className="about-img"
                    >
                        <img src={laptopImg} alt="about" className="img-fluid" />
                    </Col>
                </Row>
                <h1 className="project-heading" style={{ paddingBottom: "30px" }}>
                    Professional <strong className="blue">Skillset </strong>
                </h1>

                <Techstack />
            </Container>
        </Container>
    );
}

export default About;
