import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Form, Button} from 'react-bootstrap';
import Annotations from './Annotations';

class AnnotationForm extends Component{
    constructor(props) {
        super(props)
        this.state = {
            time: 0,
            notes: [
                {"time": "0", "note": "Frequency decrease in Site 2"},
                {"time": "821", "note": "Site 4 Peak after totality"}
            ]
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        console.log(event.target.comment.value);
        this.setState({notes: [...this.state.notes, {"time": Math.floor(this.state.time), "note":event.target.comment.value}]  });
        event.target.comment.value = ""
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.time != this.props.time){
            this.setState({time: this.props.time});
            console.log("Time is", this.props.time);
        }  
    }

    render(){
        return(
            <>
            <Annotations notes={this.state.notes}/>
            <br/>
            <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="comment">
                <Form.Label srOnly>
                    Add Annotation
                </Form.Label>
                    <Form.Control size="sm" type="text" placeholder="Add an Annotation"></Form.Control>
                </Form.Group>
                <Button type="submit" className="alt2" block>
                    Submit
                </Button>
            </Form>
            
            </>
        ); 
    }
}

export default AnnotationForm;