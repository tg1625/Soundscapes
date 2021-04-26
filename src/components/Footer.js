import React, {Component} from 'react';
import {Image, Container, Row, Col} from 'react-bootstrap';
import PropTypes from 'prop-types';

class Footer extends Component {
  constructor(props){
    super(props);
  }



  render() {
    return (
        <footer>
            <Container>
                <Row>
                    <Col md={4} style={{padding:"0px 60px"}}>
                        <Row><h3>Thanks to Our Partners</h3></Row>
                        <Row className="partners">
                            <Col><Image src="http://eclipsesoundscapes.org/sites/all/themes/eclipsesoundscapes/assets/images/Smithsonian_logo.png"/></Col>
                            <Col><Image src="http://eclipsesoundscapes.org/sites/all/themes/eclipsesoundscapes/assets/images/NSSEC_Logo_white.png"/></Col>
                            <Col><Image src="http://eclipsesoundscapes.org/sites/all/themes/eclipsesoundscapes/assets/images/National_Parkers_logo.png"/></Col>
                        </Row>

                    </Col>
                    <Col md={4} style={{padding:"0px 60px"}}>
                        <Row>
                            <Col>
                            <h3>Contact Us</h3>
                            <a href="mail-to:info@eclipsesoundscapes.org">info@eclipsesoundscapes.org</a><br/>
                            Eclipse Soundscapes Project <br/>
                            c/o Henry "Trae" Winter, MS 58 <br/>
                            Harvard-Smithsonian Center for Astrophysics <br/>
                            60 Garden Street, Cambridge, MA 02138 USA
                            </Col>
                        </Row>
                    </Col>
                    <Col md={4} style={{padding:"0px 60px"}}>
                        <Row>
                            <Col><h3>Follow Us</h3></Col>
                        </Row>
                        <Row>
                            <Col md={3}><Image src="http://eclipsesoundscapes.org/sites/all/themes/eclipsesoundscapes/assets/images/Twitter_Logo_White_On_Image.png"/></Col>
                            <Col md={3}><Image src="http://eclipsesoundscapes.org/sites/all/themes/eclipsesoundscapes/assets/images/FB_Logo_white_29.png"/></Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

        </footer>
    );
  }
}


export default Footer;