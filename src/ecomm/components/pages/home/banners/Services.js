import React from 'react';
import { Container } from 'react-bootstrap';
import BannerImg from '../../../../../../../Untitled/src/assets/images/banner.png'
const ServiceBanner = () => {
    return (
        <>
          <Container>
            <img src={BannerImg} />
          </Container>
        </>
    );
};

export default ServiceBanner;