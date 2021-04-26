import React, {Component} from 'react';
import {Container, Row, Col, Form, FormControl, Button, CardDeck, Card, Tab, ListGroup, Modal} from 'react-bootstrap';
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
                <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                    <Row>
                    <Tab.Content>
                        <Tab.Pane eventKey="#link1">
                            <h3>How to analyze the sounscapes</h3>
                            <p>Soundscape data is sorted into six different acoustic indeces. You can select which index data
                                to view using the tabs at the top of the screen. 
                            </p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="#link2">
                        <h3>How to listen to the recording</h3>
                            <p>Once you've selected the index,  
                            </p>
                        </Tab.Pane>
                    </Tab.Content>
                    </Row>
                    <Row>
                    <ListGroup horizontal>
                        <ListGroup.Item action href="#link1">
                        1
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link2">
                        2
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link3">
                        3
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link4">
                        4
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link5">
                        5
                        </ListGroup.Item>
                    </ListGroup>
                    </Row>
 
                </Tab.Container>
                </Container>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={this.handleClose}>
                    Close
                    </Button>
                </Modal.Footer>
              </Modal>
            </>
        );
    }
}

export default GlossaryModal;