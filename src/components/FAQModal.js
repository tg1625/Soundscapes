import React, {Component} from 'react';
import {Container, Row, Col, Form, FormControl, Button, CardDeck, Card, Tab, ListGroup, Modal} from 'react-bootstrap';
import {Link, withRouter} from 'react-router-dom';


class FAQModal extends Component {
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
            <Button variant="primary" onClick={this.handleShow}>
                FAQ
              </Button>
        
              <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>FAQ</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Container>
                <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                    
                    <Row>
                    <Tab.Content>
                        <Tab.Pane eventKey="#link1">
                        <p>Bla vbla</p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="#link2">
                        <p>Bla vbla</p>
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

export default FAQModal;