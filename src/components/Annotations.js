import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Accordion, Card, ListGroup} from 'react-bootstrap';


class Annotations extends Component{
    render(){
        return(
            <ListGroup variant="flush">
                {this.props.notes && this.props.notes.sort((firstItem, secondItem) => firstItem.time - secondItem.time).map((c, i) =>
                    <ListGroup.Item>{c.time}s: {c.note}</ListGroup.Item>
                    )
                    }
            </ListGroup>
                    

        ); 
    }
}

Annotations.propTypes = {

    notes: PropTypes.array
}

export default Annotations;