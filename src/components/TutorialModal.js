import React, {Component} from 'react';
import {Container, Row, Button, Tab, ListGroup, Modal, Image} from 'react-bootstrap';
import datanav from "../assets/datanav.jpg";


class TutorialModal extends Component {
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
                Tutorial
              </Button>
        
              <Modal 
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Tutorial</Modal.Title>
                </Modal.Header>
                <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                <Modal.Body>
                <Container>
                
                    <Row>
                    <Tab.Content>
                        <Tab.Pane eventKey="#link1">
                        <h3>How to analyze soundscape data</h3>
                            <p>Soundscape data is sorted into six different acoustic indices. You can select which index data
                                to view using the tabs at the top of the screen. 
                            </p>
                            <Image src={datanav}/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="#link2">
                            <h3>Viewing the data</h3>
                                <p>
                                    After you've selected an index, you will be given both the audio recording, and the graph of the index data. 
                                    Select the play button to start playing the recording. The line on the graph will move with the recording 
                                    to indicate where the graph correlates with the audio
                                </p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="#link3">
                            <h3>Filtering the Data </h3>
                            <p>You can select which site's data to view using the Site dropdown menu above the graph.
                                You can also use the Eclipse Phase dropdown menu to jump to a specific point in time of the recording  
                            </p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="#link4">
                            <h3>Annotations </h3>
                            <p>Annotations can be found to the right of the graph. Annotations consist of a time in the recording, and the note for that time.
                                If you hear something interesting in a recording, add an annotation by writing in the form at the bottom!   
                            </p>
                        </Tab.Pane>
                    </Tab.Content>
                    </Row>
                </Container>
                </Modal.Body>
                <Modal.Footer className="pagination">
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
                        <Button className="alt2" onClick={this.handleClose}>
                                Close
                        </Button>
                        {/* 
                        <ListGroup.Item action href="#link5">
                        5
                        </ListGroup.Item> */}
                    </ListGroup>
                 
                </Modal.Footer>
                </Tab.Container>
              </Modal>
            </>
        );
    }
}

export default TutorialModal;