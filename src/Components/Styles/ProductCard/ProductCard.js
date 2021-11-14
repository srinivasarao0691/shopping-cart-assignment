import React from 'react';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card'
import Button from '../Button/Button.js';
import useWindowDimensions from '../../../Hooks/useWindowDimensions';
import { useDispatch } from 'react-redux';
import { upateCart } from '../../../Redux/actions/cart';
const ProductCardWrapper = styled.div`
    .card-title {
        padding : 1rem 1rem;
        font-weight : bold;
    }
    .card-body {
        background-color: rgba(0,0,0,.03);
    }
    .card-footer {
        background-color: transparent;
    }
    .price {
        margin-top : 10px
    }
`;
export default function ProductCard({ name, id, category, imageURL, price, description }) {
    const device = useWindowDimensions();
    const dispatch = useDispatch();
    return (
        <ProductCardWrapper>
            <Card>
                <Card.Title> {name} </Card.Title>
                <Card.Img variant="top" src={imageURL} />
                <Card.Body>
                    <Card.Text>{description}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    {
                        device == 'desktop' && <div className="row">
                            <div className="col-md-6"><p className="price">MRP Rs. {price} </p></div>
                            <div className="col-md-6"> <Button onClick={() => dispatch(upateCart(id, 'add'))}>Buy Now</Button></div>
                        </div>
                    }
                    {
                        device != 'desktop' && <div className="row">
                            <div className="col-xs-12"> <Button onClick={() => dispatch(upateCart(id, 'add'))}>Buy Now @ Rs. {price}</Button></div>
                        </div>
                    }
                </Card.Footer>
            </Card>
        </ProductCardWrapper>
    )
}