import React, { Component } from 'react';
import Book from './Book';
import {Alert} from 'react-bootstrap';
class BookCategory extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className = "master"> 
                <Alert variant="success">
                <Alert.Heading>{this.props.type}</Alert.Heading>
                
            </Alert>
            <Book type={this.props.type} />
               
            </div>
        );

    }
}

export default BookCategory;