import React, {Component} from 'react';
import {Container, Row, Col, Form, FormControl, Button, CardDeck, Card, Tab, ListGroup} from 'react-bootstrap';
import {Link, withRouter} from 'react-router-dom';
// import FAQModal from '../components/TutorialModal';
import WelcomeAlert from '../components/WelcomeAlert';
import WelcomeModal from '../components/WelcomeModal'


class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render() {
        return (
        <Container>
            <WelcomeModal/>
            <Row>
                <Col>
                    <Row><WelcomeAlert/></Row>
                    <Row><h1>Eclipse Soundscapes</h1></Row>
                    <Row>This is a database of hundreds of audio recording from different places, dates, and times. </Row>
                    <Row>   
                        <Form inline>
                            <Form.Group>
                                <Form.Control type="text" placeholder="Location" className="mx-sm-2" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Date</Form.Label>
                                <Form.Control type="date" placeholder="Search" className="mx-sm-2" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Time</Form.Label>
                                <Form.Control type="time" placeholder="Search" className="mx-sm-2" />
                                
                            </Form.Group>
                            <Button  className="btn-outline-alt" variant="outline-warning">Search</Button>{" "}
                        </Form>
                    </Row>
                    <Row>
                    <Col>
                    <CardDeck>
                        <Card as={Link} to={{pathname: "/data"}}>
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1529788295308-1eace6f67388?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80" />
                            <Card.Body>
                            <Card.Title>Greenville Total Eclipse 2017</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Greenville County, South Carolina </Card.Subtitle>
                            <Card.Text>
                                Collection of acoustic data during the August 2017 total solar eclipse from eight sites in Greenville County along an urban development
                                gradient from downtown Greenville to the foothills of Blue Ridge
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted">Date: August 21st, 2017</small>
                            </Card.Footer>
                        </Card>
                        
                        <Card as={Link} to={{pathname: "/data"}}>
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1529788295308-1eace6f67388?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80" />
                            <Card.Body>
                            <Card.Title>Greenville Total Eclipse 2017</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Greenville County, South Carolina </Card.Subtitle>
                            <Card.Text>
                                Collection of acoustic data during the August 2017 total solar eclipse from eight sites in Greenville County along an urban development
                                gradient from downtown Greenville to the foothills of Blue Ridge
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted">Date: August 21st, 2017</small>
                            </Card.Footer>
                        </Card>
                        <Card as={Link} to={{pathname: "/data"}}>
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1529788295308-1eace6f67388?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80" />
                            <Card.Body>
                            <Card.Title>Greenville Total Eclipse 2017</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Greenville County, South Carolina </Card.Subtitle>
                            <Card.Text>
                                Collection of acoustic data during the August 2017 total solar eclipse from eight sites in Greenville County along an urban development
                                gradient from downtown Greenville to the foothills of Blue Ridge
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted">Date: August 21st, 2017</small>
                            </Card.Footer>
                        </Card>
                        </CardDeck>

                    </Col>
                    </Row>
                </Col> 
            </Row>  
            
        </Container>
        );
    }
}

export default Dashboard;