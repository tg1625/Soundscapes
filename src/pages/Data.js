import React, {Component} from 'react';
import {Container, Row, Col, Form, Button, ButtonGroup, Image, ListGroup, Tabs, Tab} from 'react-bootstrap';
import AnnotationForm from '../components/AnnotationForm';

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            time: 0,
            per: 0
        }
    }

    updateLine(){
        var vid = document.getElementById("sound");
        console.log("Percent is", vid.currentTime/vid.duration * 100);
        this.setState({per: vid.currentTime/vid.duration * 100})
        this.setState({time: vid.currentTime});
    }

    componentDidMount(){
        this.timerID = setInterval(
            () => this.updateLine(),
            1000
          ); 
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        return (
        <Container fluid>
            <Row>
                <Col md={1}></Col>
                <Col md={2} className="dataDesc" > 
                    <h1>Greenville Total Eclipse 2017</h1>
                    <ListGroup variant="flush">
                        <ListGroup.Item as="h5">Location: Greenville County</ListGroup.Item>
                        <ListGroup.Item as="h5">Sites: 8</ListGroup.Item>
                        <ListGroup.Item as="h5">Data: August 21st, 2017</ListGroup.Item>
                        <ListGroup.Item as="h5">Time: 12:00pm - 17:00pm</ListGroup.Item>
                        <ListGroup.Item><h5>Summary</h5>
                                Collection of acoustic data during the August 2017 total solar eclipse from eight sites in Greenville County along an urban development
                                gradient from downtown Greenville to the foothills of Blue Ridge<br/><br/>
                                <p>Credit: <a href="https://www.tandfonline.com/doi/full/10.1080/14888386.2020.1715834">Jacob E Gerber, Dakota Howard, and John E. Quinn</a></p>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={5} className="audioData"  style={{marginTop:"50px"}}>
                <Row>
                    
                    <Tabs defaultActiveKey="home" id="graphData">
                        <Tab eventKey="home" title="Biophony Frequency">
                            <Row><h3>Biophony Frequency</h3></Row>
                            <Row><p>the average frequency generated from biological sound</p></Row>
                            <Row className="graphControls">
                            <Form inline>
                                <Form.Group>
                                    <Form.Label htmlFor="inputPassword6">Site: {" "}</Form.Label>
                                    <Form.Control
                                        as="select"
                                        className="mr-sm-2"
                                        id="inlineFormCustomSelect"
                                        custom
                                    >
                                        <option value="0">All</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="3">4</option>
                                        <option value="3">5</option>
                                        <option value="3">6</option>
                                        <option value="3">7</option>
                                        <option value="3">8</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label htmlFor="inputPassword6">Eclipse Phase: {" "}</Form.Label>
                                    <Form.Control
                                        as="select"
                                        className="mr-sm-2"
                                        id="inlineFormCustomSelect"
                                        custom
                                    >
                                        <option value="0">Choose...</option>
                                        <option value="1">Before Eclipse</option>
                                        <option value="2">First Contact</option>
                                        <option value="3">Second Contact</option>
                                        <option value="3">Totality</option>
                                        <option value="3">Third Contact</option>
                                        <option value="3">Fourth Contact</option>
                                        <option value="3">After Eclipse</option>
                                    </Form.Control>
                                </Form.Group>
                            </Form>
                            </Row>
                            <Row className="graph">
                                <span className="line" style={{marginLeft:`calc(${this.state.per}% + 97px)`}}></span>
                                <Image 
                                    alt="Graph of Biophony DFata, credit to "
                                    src="https://www.tandfonline.com/na101/home/literatum/publisher/tandf/journals/content/tbid20/2020/tbid20.v021.i01/14888386.2020.1715834/20200617/images/large/tbid_a_1715834_f0003_oc.jpeg"/>
                            </Row>
                            <Row>
                                <audio id="sound" controls>
                                <source src="https://nas-national-prod.s3.amazonaws.com/se2-1a-songs_of_spring.mp3" type="audio/mpeg"/>
                                Your browser does not support the audio element.
                                </audio>
                            </Row>
                        </Tab>
                        <Tab eventKey="profile" title="Biophony Amplitude">
                            <Row><h3>Biophony Amplitude</h3></Row>
                            <Row><p>the average amplitude generated from biological sound</p></Row>
                        </Tab>
                        <Tab eventKey="contact" title="Normalised Difference Soundscape Index" disabled>
                            <p>thuibgs</p>
                        </Tab>
                        <Tab eventKey="contact" title="Anthrophony" disabled>
                            <p>thuibgs</p>
                        </Tab>
                        <Tab eventKey="contact" title="Entropy (H)" disabled>
                            <p>thuibgs</p>
                        </Tab>
                        <Tab eventKey="contact" title="Acoustic Evenness Index" disabled>
                            <p>thuibgs</p>
                        </Tab>
                    </Tabs>
                    </Row>
                </Col>
                <Col md={3} className="notebook">
                    <h1>Annotations</h1>
                    <AnnotationForm time={this.state.time}/>
                </Col>
            </Row> 
            
        </Container>
        );
    }
}

export default Dashboard;