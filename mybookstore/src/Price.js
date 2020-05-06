import React, { Component } from 'react'


class Price extends Component {

    state =
        {
            "priceList": [
                {

                    "bookTitle": "The Invisible Man",
                    "price": "14$"

                },
                {

                    "bookTitle": "Journey to the Center of the Earth",
                    "price": "18$"

                },
                {

                    "bookTitle": "The Theory Of Everything",
                    "bookImg": "./images/fiction/2.jpg"

                },
                {

                    "bookTitle": "Homo Deus, The History Of Tomorrow",
                    "price": "32$"
                },
                {

                    "bookTitle": "To Kill a MockingBird",
                    "price": "43$"
                },
                {

                    "bookTitle": "Nineteen Eighty Four, 1984",
                    "price": "63$"
                },
                {

                    "bookTitle": "Pride and Prejudice",
                    "price": "25$"
                },
                {
                    "bookTitle": "Charlottes Web",
                    "bookImg": "32$"
                },
                {

                    "bookTitle": "Charlie and the Chocolate Factory",
                    "price": "52$"
                },
                {

                    "bookTitle": "The Hobbit",
                    "price": "54$"
                },
                {

                    "bookTitle": "The Wind in the Willows",
                    "price": ".87$"
                },
                {

                    "bookTitle": "Great Expectations",
                    "price": "52$"
                },
                {
                    "bookTitle": "Hamlet",
                    "price": "19$"
                },
                {

                    "bookTitle": "Merchant of Venice",
                    "price": "30$"

                }
            ]
        }


    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                {
                    this.state.priceList.map(item  => {
                        if(this.props.bookTitle == item.bookTitle){
                            return <div>
                                 <h6 style ={{"color" : "red"}}>{item.price}</h6>
                            </div>
                        }
                    }

                    )
                }
            </div>
        );
    }
}

export default Price;