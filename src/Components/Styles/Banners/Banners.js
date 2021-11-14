import React from 'react';
import { useSelector } from 'react-redux';
import Carousel from 'react-bootstrap/Carousel';
export default function Banners() {
    const banners = useSelector((state) => state.banners.banners);
    return (
        <Carousel>
            {
                (banners || []).map((banner) => {
                    return (
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={banner.bannerImageUrl} key={banner.id}
                                alt="First slide"
                            />
                        </Carousel.Item>
                    )
                })
            }
        </Carousel>
    )
}
