import React, {Component} from 'react';
import {Button, Alert} from 'react-bootstrap';
import {Link, withRouter} from 'react-router-dom';


class  WelcomeAlert extends Component {
    constructor(props){
        super(props);
        this.setShow = this.setShow.bind(this)
        this.state = {
            show: true
        };
    }

    setShow(state){
        this.setState({show:state});
    }


    render() {
        if (this.state.show) {
            return (
              <Alert className="alt" onClose={() => this.setShow(false)} dismissible>
                <Alert.Heading>Welcome to Eclipse Soundscapes: Citizen Science Project!</Alert.Heading>
                <p>
                  Click on any of the project cards below to start exploring soundscapes. 
                To learn more about eclipse soundscapes, or how to navigate this project, open up your field guide on the bottom right</p>
              </Alert>
            );
          }
          return (<></>);
    }
}

export default WelcomeAlert;