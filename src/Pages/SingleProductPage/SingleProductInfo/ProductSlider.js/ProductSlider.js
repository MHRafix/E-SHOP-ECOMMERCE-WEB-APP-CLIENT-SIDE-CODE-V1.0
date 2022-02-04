import { Grid } from '@mui/material';
import React from 'react';
import Slider from 'react-slick';

const ProductSlider = () => {
    
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "var(--btn-bg)", padding: "10px 15px", color: "var(--white-color)", zIndex: '222' }}
            onClick={onClick}
          />
        );
      }
      
    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "var(--btn-bg)", padding: "10px 15px", color: "var(--white-color)", zIndex: '222' }}
            onClick={onClick}
          />
        );
      }
      
    const settings = {
        // dots: true,
        infinite: true,
        // autoplay: true,
        // autoplaySpeed: 3000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
    return (
        <Grid item xs={12} md={5}>
            <Slider {...settings}>
                <div>
                    <img style={{width: "100%", outline: "none", height: "90%", margin: "auto", zIndex: "1"}} src="https://flone-vue.pages.dev/img/product/fashion/1.jpg" alt="" />
                </div>
                <div>
                    <img style={{width: "100%", outline: "none", height: "90%", margin: "auto", zIndex: "1"}} src="https://flone-vue.pages.dev/img/product/fashion/9.jpg" alt="" />
                </div>
                <div>
                <img style={{width: "100%", outline: "none", height: "90%", margin: "auto", zIndex: "1"}} src="https://flone-vue.pages.dev/img/product/fashion/10.jpg" alt="" />

                </div>
                <div>
                <img style={{width: "100%", outline: "none", height: "90%", margin: "auto", zIndex: "1"}} src="https://flone-vue.pages.dev/img/product/fashion/7.jpg" alt="" />

                </div>
                <div>
                    <img style={{width: "100%", outline: "none", height: "90%", margin: "auto", zIndex: "1"}} src="https://flone-vue.pages.dev/img/product/fashion/5.jpg" alt="" />
                </div>
            </Slider>
      </Grid>
    );
};

export default ProductSlider;