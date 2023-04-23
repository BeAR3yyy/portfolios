import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Projects() {
    return (
        <Container fluid className="project-section">
            <Container>
                <h1 className="project-heading">
                    My Recent <strong className="blue">Works </strong>
                </h1>

                <Row style={{ justifyContent: "center", paddingBottom: "200px" }}>
                    <Col md={4} className="project-card">
                        To be updated...
                    </Col>

                    <Col md={4} className="project-card">
                        To be updated...
                    </Col>

                    <Col md={4} className="project-card">
                        To be updated...
                    </Col>

                    <Col md={4} className="project-card">
                        To be updated...
                    </Col>

                    <Col md={4} className="project-card">
                        To be updated...
                    </Col>

                    <Col md={4} className="project-card">
                        To be updated...
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;
