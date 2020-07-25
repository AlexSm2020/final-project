import React, { Component } from 'react';
import {
    Jumbotron, Container, Row, Col, Card, Button, CardImg, CardTitle, CardText, CardColumns,
    CardSubtitle, CardBody } from 'reactstrap';
import Stepper from 'react-stepper-horizontal'


class SingleApplication extends Component {

    constructor (props) {
        super (props)
        this.state = {
            applicationData: props.applicationData
        }
    }

render () {
    return (
        <div>
            <Jumbotron fluid>
                <Container fluid>
                    <div>
                        <h2 className="display-3">Application Title 
                            <div className="companyLocationDiv">
                                <small className="companyName">Google</small>
                                <small className="companyLocation">Mountain View, California</small>
                            </div>
                        </h2>
                        {/* <p>Company: </p>
                        <p>Location: </p>    */}
                    </div>
                    <div>
                        <Stepper steps={[{ title: 'Submitted Application' }, { title: 'Interview' }, { title: 'Assessment' }, { title: 'Offered' }, { title: 'Accepted Offer' }]} activeStep={2} />
                    </div>
                </Container>
            </Jumbotron>
            <Container fluid>
                <Row xs="2">
                    {/* Point of Contact Info and Last Communication Section */}
                    <Col xs="7">Column 1</Col>
                    {/* Interest column and Notes Column */}
                    <Col xs="5">
                        <Row style={{marginRight:"100px"}}>
                            <Col xs="6">
                                <Button>View Job Ad</Button>
                            </Col>
                            <Col xs="6">
                                <Card>
                                    <CardBody>
                                        <CardTitle>Interest</CardTitle>
                                        <CardText>High</CardText>
                                        <Button>Edit Interest</Button>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        <Row style={{marginRight: "100px"}}>
                            <Col xs="12">
                                <Card>
                                    <CardBody>
                                        <CardTitle>Card title</CardTitle>
                                        <CardSubtitle>Card subtitle</CardSubtitle>
                                        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                                        <Button>Button</Button>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}




}

export default SingleApplication;