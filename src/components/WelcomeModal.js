import React, {Component} from 'react';
import {Container, Row, Image, Button, CardDeck, Card, Tab, ListGroup, Modal} from 'react-bootstrap';
import {Link, withRouter} from 'react-router-dom';


class WelcomeModal extends Component {
    constructor(props){
        super(props);
        this.handleShow = this.handleShow.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.state = {
            show: true
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
            {/* <Button variant="primary" onClick={this.handleShow}>
                FAQ
              </Button>
         */}
              <Modal show={this.state.show} onHide={this.handleClose}
              aria-labelledby="contained-modal-title-vcenter" style={{marginTop: "300px;"}}>
                <Modal.Header closeButton>
                  <Modal.Title>Welcome to Eclipse Soundscapes!</Modal.Title>
                </Modal.Header>
                <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                <Modal.Body>
                <Container>
                
                    <Row>
                    <Tab.Content>
                        <Tab.Pane eventKey="#link1">
                            <Image src="https://gray-kwtx-prod.cdn.arcpublishing.com/resizer/LsdlAfUV662Ho2mlzhi-HG0kVuY=/1200x675/smart/cloudfront-us-east-1.images.arcpublishing.com/gray/NFUYCBJTIVLEBCKZ57WLISUJF4.jpg"/>
                            <p><br/>Solar eclipses are awe-inspiring astronomical events where the moon obscures the sun. Much has been said about the visual spectacle of an eclipse, but
                            little is known about how eclipses sound. We need your help to find out how eclipses affect soundscapes! 
                            </p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="#link2">
                            <h3>What are soundscapes?</h3>
                            <p>A soundscape is a sound or combination of sounds that forms or arises from an immersive environment. 
                                The study of soundscape is the subject of acoustic ecology or soundscape ecology. 
                                Crucially, the term soundscape also includes the listener's perception of sounds heard as an environment: "how that environment is understood by those living within it"and therefore mediates their relations. The disruption of these acoustic environments results in noise pollution.</p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="#link3">
                            <h3>Start Sciencing! </h3>
                            <p>Anyone can help analyze these soundscapes. Just click on any of the 
                                project cards to get started!If you need any help click the notebook icon on the bottom right side of your screen or
                                hit CTRL+K to open your field guide.
                            </p>
                            <Button variant="success" onClick={this.handleClose}>
                                Start Exploring
                            </Button>
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
                        {/* <ListGroup.Item action href="#link4">
                        4
                        </ListGroup.Item>
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

export default WelcomeModal;