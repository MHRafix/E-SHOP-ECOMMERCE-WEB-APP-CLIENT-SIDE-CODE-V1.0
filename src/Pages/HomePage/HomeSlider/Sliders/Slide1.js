import { Grid } from '@mui/material';
import React from 'react';
import Slider1 from '../../../../Images/SLIDERIMAGE/sliderF.png';

const Slide1 = ({firstSlide}) => {
    return (
        <>
          {firstSlide && <Grid container spacing={2}>
            <Grid item xs={6}>
            <div className="sliderArticle" data-aos="fade-down">
                <span className="tagline">Smart Products</span>
                <h1 className="Headline">Summer Offer <br />2022 Collection</h1>
                <button className="shopBtn">SHOP NOW</button>
            </div>
            </Grid>
            <Grid item xs={6}>
                <div className="image" data-aos="fade-up">
                    <img className="sliderImage" src={Slider1} alt="sliderImage" />
                </div>
            </Grid>
          </Grid>}
        </>
    );
};

export default Slide1;