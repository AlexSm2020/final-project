import React, { Component } from 'react';
import { Jumbotron, Container } from 'reactstrap';
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
        </div>
    )
}




}

export default SingleApplication;