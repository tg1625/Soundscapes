import React, {Component} from 'react';
import {Container, Row, Col, Form, Button, ButtonGroup, Image, ListGroup} from 'react-bootstrap';


class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            per: 0
        }
    }

    updateLine(){
        var vid = document.getElementById("sound");
        console.log("Time is", vid.currentTime);
        console.log("Percent is", vid.currentTime/vid.duration * 100);
        this.setState({per: vid.currentTime/vid.duration * 100})
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
        <Container>
            <Row style={{marginTop:"150px"}}>
                <Col md={4} className="dataDesc">
                    <h1>Greenville Total Eclipse 2017</h1>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Location: Greenville County</ListGroup.Item>
                        <ListGroup.Item>Data: August 21st, 2017</ListGroup.Item>
                        <ListGroup.Item>Time: 12:00pm - 17:00pm</ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={8} className="audioData">
                <Row>
                    <ButtonGroup aria-label="Basic example">
                        <Button variant="secondary">Biophony Frequency</Button>
                        <Button variant="secondary">Biophony Amplitude</Button>
                        <Button variant="secondary">Normalised Difference Soundscape Index</Button>
                        <Button variant="secondary">Anthrophony</Button>
                        <Button variant="secondary">Entropy (H)</Button>
                        <Button variant="secondary">Acoustic Evenness Index</Button>
                    </ButtonGroup>
                    </Row>
                    <h3>Biophony Frequency</h3>
                    <p>the average frequency generated from biological sound</p>
                    
                    <Row className="graph">
                        <span className="line" style={{marginLeft:`${this.state.per}%`}}></span>
                        <Image src="https://www.tandfonline.com/na101/home/literatum/publisher/tandf/journals/content/tbid20/2020/tbid20.v021.i01/14888386.2020.1715834/20200617/images/large/tbid_a_1715834_f0003_oc.jpeg"/>
                    </Row>
                    <Row>
                        <audio id="sound" controls>
                        <source src="https://nas-national-prod.s3.amazonaws.com/se2-1a-songs_of_spring.mp3" type="audio/mpeg"/>
                        Your browser does not support the audio element.
                        </audio>
                    </Row>
                    
                </Col>
            </Row> 
            
        </Container>
        );
    }
}

export default Dashboard;