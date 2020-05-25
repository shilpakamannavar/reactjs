import React, { Component } from 'react';
import {Card, Button} from 'react-bootstrap';
import Price from './Price';
class Book extends Component {

    state = {
        
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {

                    this.state.Booklist.map(item => {
                        if (this.props.type == item.genre)
                            return <div> 
                                <Card style={{ width: '100%' }}>
                                    <Card.Img variant="top" src={item.bookImg} />
                                    <Card.Body>
                                        <Card.Title>{item.bookTitle}</Card.Title>
                                       <h6 style ={{"color" : "red"}}>{item.author}</h6>
                                        <Card.Text>
                                            {item.description}
                                        </Card.Text>
                                        
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                                <div>
                                    <Price  type={this.props.bookTitle} />
                                </div>
                            </div>

                    }
                    )
                }
            </div>

        );
    }
}

export default Book;