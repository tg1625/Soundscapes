import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';

class FAQ extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render() {
        return (
        <Container style={{marginTop:"120px"}}>
            <Row>
                <Col><h1>Frequently Asked Questions</h1></Col>
            </Row>
            <Row>
                <Col>
                <h3>What is this project about?</h3>    
                <p>This project is trying to answer one main question: <strong>What impact does an eclipse have on ecosystems?. </strong>
                    In order to answer this question, the Eclipse Soundscapes: Citizen Science Project was born. The Citizen Science Experience will occur twice over the 5 years of this project: once for the 2023 annular eclipse, and then again for the total solar eclipse in 2024. Each citizen science experience will take place over a period of approximately 15-20 weeks before, during, and after an eclipse. Using a noncompetitive, gamification model as a guide, the experience has four levels that the citizen scientist can advance through, earning certificates and badges as they progress. At each level citizen scientists will gain the skills necessary to address the science question
                </p>
                <h3>What does it mean to be a Citizen Scientist?</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <h3>How can I participate in the project?</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <h3>What will you do with data collected during this project?</h3>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> 
            
                </Col>
            </Row>
            
                
        </Container>
        );
    }
}

export default FAQ;