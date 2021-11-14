import React from 'react';
import { ListGroup } from 'react-bootstrap';
import styled from 'styled-components';
const ListWrapper = styled.div`
    background-color: rgba(0,0,0,.03);
    min-height: 100vh;
    height : 100vh;
    .list-group-item {
        border-bottom: 1px solid #4d4d4d;
        background-color: transparent;
        text-align: left;
        color: #4d4d4d;
        &:hover {
            background-color: grey;
            cursor: pointer;
            color: white;
        }
    }
`;
export default function List({ categories, handleProduct }) {
    return (
        <ListWrapper>
            <ListGroup>
                {
                    (categories || []).map(product => {
                        return <ListGroup.Item key={product.id} onClick={() => handleProduct(product.id)}>{product.name}</ListGroup.Item>
                    })
                }
            </ListGroup>
        </ListWrapper>
    )
}