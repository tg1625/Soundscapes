import React, {Component} from 'react';
import {Container, Row, Col, Form, FormControl, Button, CardDeck, Card, Tab, ListGroup, Modal, Nav} from 'react-bootstrap';
import {Link, withRouter} from 'react-router-dom';


class GlossaryModal extends Component {
    constructor(props){
        super(props);
        this.handleShow = this.handleShow.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.state = {
            show: false
        };
    }

    handleClose(){
        this.setState({show:false});
    }

    handleShow(){
        this.setState({show:true});
    }

    render() {
        return (
            <>
            <Button variant="link" onClick={this.handleShow}>
                Glossary
              </Button>
        
              <Modal show={this.state.show} onHide={this.handleClose} size="lg">
                <Modal.Header closeButton>
                  <Modal.Title>Glossary</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Container>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                            <Nav.Link eventKey="first">Eclipses</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="second">Soundscapes</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="third">Acoustic Indices</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        </Col>
                        <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <h3>What is an Eclipse?</h3>
                                <p>An eclipse takes place when one heavenly body such as a moon or planet moves into the shadow of another heavenly body. 
                                    There are two types of eclipses on Earth: an eclipse of the moon and an eclipse of the sun. 
                                    Data collected in this database is from solar eclipses</p>
                                <h5>What is a Solar Eclipse?</h5>
                                <p>Sometimes when the moon orbits Earth, it moves between the sun and Earth. When this happens, the moon blocks the light of the
                                     sun from reaching Earth. This causes an eclipse of the sun, or solar eclipse. During a solar eclipse,
                                      the moon casts a shadow onto Earth.</p>
                                <h5>What are the Phases of an Eclipse?</h5>
                                <ul>
                                    <li>First Contact</li>
                                    <li>Second Contact</li>
                                    <li>Totality</li>
                                    <li>Third Contact</li>
                                    <li>Fourth Contact</li>
                                </ul>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <h3>What are Soundscapes?</h3>
                                <p>A soundscape is a sound or combination of sounds that forms or arises from an immersive environment. 
                                    The study of soundscape is the subject of acoustic ecology or soundscape ecology. 
                                    Crucially, the term soundscape also includes the listener's perception of sounds heard as an environment: "how that environment is understood by those living within it"and therefore mediates their relations. The disruption of these acoustic environments results in noise pollution.</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <h3>What are Acoustic Indices?</h3>
                                <p>Acoustic Indices are the scientific method used to evalute and characterize soundscapes.
                                    There are many different indices, but only the following six are used in this database. 
                                </p>
                                <h5>Biophony Frequency</h5>
                                <p>The average frequency generated from biological sound</p>
                                <h5>Biophony Amplitude</h5>
                                <p>The average amplitude of biological sound</p>
                                <h5>Normalised Difference Soundscape Index(NDSI)</h5>
                                <p>The proportion of biophony to anthrophony</p>
                                <h5>Anthrophony</h5>
                                <p>All human-generated sounds (calculated as all sounds below 2 kHz)</p>
                                <h5>Entropy (H)</h5>
                                <p>Calculated as function of temporal energy dispersal and spectral energy dispersal</p>
                                <h5>Acoustic Evenness Index (AEI)</h5>
                                <p>Measures the equality/inequality of the distribution of sound power in different frequency ranges</p>
                            </Tab.Pane>
                        </Tab.Content>
                        </Col>
                    </Row>
                    </Tab.Container>
                </Container>
                </Modal.Body>
                <Modal.Footer>
                  <Button className="alt2" onClick={this.handleClose}>
                    Close
                    </Button>
                </Modal.Footer>
              </Modal>
            </>
        );
    }
}

export default GlossaryModal;