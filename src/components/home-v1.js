import React from 'react';
import Navbar from './global-components/navbar-v3';
import Banner from './section-components/banner-v3';
import SearchForm from './section-components/search-form';
import UpComingProduct from './section-components/upcoming-product-v1';
import Sponsor from './section-components/sponsor-v1';
import Featuresv1 from './section-components/features-v1';
import ProSlider from './section-components/product-slider-v1';
import VideoV1 from './section-components/video-v1';
import Category from './section-components/category-v3';
import Testimonial from './section-components/testimonial-v1';
import Footer from './global-components/footer';

const Home_V1 = () => {
    return <div>
        <Navbar />
        <Banner />
        <SearchForm />
        <Category />
        <ProSlider />
        <VideoV1 />
        <UpComingProduct />
        <Featuresv1 customClass="ltn__feature-area section-bg-1 pt-120 pb-90 mb-120---"/>
        <Sponsor />
        <Testimonial />
        <Footer />
    </div>
}

export default Home_V1

