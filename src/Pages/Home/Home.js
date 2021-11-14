import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { fetchCategories } from '../../Redux/actions/product';
import { fetchBanners } from '../../Redux/actions/banners';
import Section from '../../Components/Styles/Section/Section';
import useProducts from '../../Hooks/useProducts';
import CartPage from '../Cart/Cart';
import Modal from '../../Components/Styles/Modal/Modal';
import Banners from '../../Components/Styles/Banners/Banners'
const HomePageWrapper = styled.main`
    max-width: 75%;
    margin: auto;
    @media(max-width: 768px){
        max-width: 90%;
    }
`;
export default function HomePage() {
    const dispatch = useDispatch();
    const { categories, handleProduct } = useProducts();
    const openCart = useSelector((state) => state.cart.openCart);
    useEffect(() => {
        dispatch(fetchCategories());
        dispatch(fetchBanners());
    }, []);
    return (
        <>
            <HomePageWrapper>
                <Banners />
                {
                    (categories || []).map((item, index) => {
                        return <Section key={item.id} index={index} handleProduct={handleProduct} {...item} />
                    })
                }
            </HomePageWrapper>
            {openCart &&
                <Modal>
                    <CartPage header={true} />
                </Modal>
            }
        </>
    )
}
