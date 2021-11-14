import React, { useState } from 'react';
import styled from 'styled-components';
const DropDownField = styled.div`
    display: flex;
    justify-content: space-between;
    color: #fff;
    background-color: #d42559;
    padding: 7px;
`;
export default function DropDown({ categories, handleProduct }) {
    const productTypeList = [{ name: 'All Products', id: '' }, ...categories]
    const [show, setShow] = useState(false)
    const [currentItem, setCurrentItem] = useState(productTypeList && productTypeList[0].name);
    return (
        <>
            <DropDownField onClick={() => { setShow(!show) }} data-testid='dropdown'>{currentItem}<span>▼</span></DropDownField>
            {show && (productTypeList || []).filter(item => item.name !== currentItem).map(product => {
                return <DropDownField
                    key={product.id}
                    onClick={() => { handleProduct(product.id); setCurrentItem(product.name); setShow(!show) }}
                >
                    {product.name}
                </DropDownField>
            })
            }
        </>
    )
}