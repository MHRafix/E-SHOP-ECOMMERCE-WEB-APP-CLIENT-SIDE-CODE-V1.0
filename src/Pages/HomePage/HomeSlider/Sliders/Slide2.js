import { Grid } from '@mui/material';
import React from 'react';
import Slider2 from '../../../../Images/SLIDERIMAGE/sliderS.png';

const Slide2 = ({secondSlide}) => {
    return (
        <>
         {secondSlide && <Grid container spacing={2}>
                            <Grid item xs={6}>
                            <div className="sliderArticle" data-aos="fade-up">
                                <span className="tagline">Smart Products</span>
                                <h1 className="Headline">Winter Offer <br />2022 Collection</h1>
                                <button className="shopBtn">SHOP NOW</button>
                            </div>
                            </Grid>
                            <Grid item xs={6}>
                                <div className="image" data-aos="fade-down">
                                    <img className="sliderImage" src={Slider2} alt="sliderImage" />
                                </div>
                            </Grid>
                   </Grid>}
        </>
    );
};

export default Slide2;