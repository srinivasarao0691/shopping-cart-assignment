import React, { useEffect } from 'react';
import useProducts from '../../Hooks/useProducts';
import useWindowDimensions from '../../Hooks/useWindowDimensions';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import ProductCard from '../../Components/Styles/ProductCard/ProductCard';
import DropDown from '../../Components/Styles/DropDown/DropDown';
import CartPage from '../Cart/Cart';
import Modal from '../../Components/Styles/Modal/Modal';
import { fetchCategories, fetchAllProducts } from '../../Redux/actions/product';
import List from '../../Components/Styles/List/List';
const ProductPageWrapper = styled.main`
`;
export default function ProductPage() {
    const dispatch = useDispatch();
    const { filteredProducts, categories, handleProduct } = useProducts();
    const device = useWindowDimensions();
    const openCart = useSelector((state) => state.cart.openCart);
    useEffect(() => {
        dispatch(fetchCategories());
        dispatch(fetchAllProducts());
    }, []);
    return (
        <>
            <ProductPageWrapper className="container">
                <div className="row">
                    {
                        device == 'mobile' ?
                            <div className="col-xs-12">
                                <DropDown categories={categories} handleProduct={handleProduct} />
                            </div>
                            : <div className="col-sm-3">
                                <List categories={categories} handleProduct={handleProduct} />
                            </div>
                    }
                    {
                        device == 'mobile' ? <div className="col-xs-12">
                            <div className='row card-group'>
                                {(filteredProducts || []).map(item => {
                                    return (
                                        <div className="col-xs-12" key={item.id}>
                                            <ProductCard key={item.id} {...item} />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                            : <div className="col-sm-9">
                                <div className='row card-group'>
                                    {(filteredProducts || []).map(item => {
                                        return (
                                            <div className={device == 'tab' ? 'col-sm-6 py-2' : 'col-sm-4 py-2'} key={item.id}>
                                                <ProductCard key={item.id} {...item} />
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                    }
                </div>
            </ProductPageWrapper>
            {
                openCart &&
                <Modal>
                    <CartPage header={true} />
                </Modal>
            }
        </>
    )
}