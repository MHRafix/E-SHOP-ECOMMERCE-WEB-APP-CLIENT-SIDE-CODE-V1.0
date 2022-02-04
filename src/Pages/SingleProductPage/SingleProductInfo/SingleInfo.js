import { Container, Grid } from '@mui/material';
import React from 'react';
import BreadCrumb from '../../SharedComponents/BreadCrumb/BreadCrumb';
import ProductDetails from './ProductDetails/ProductDetails';
import ProductSlider from './ProductSlider.js/ProductSlider';

const SingleInfo = (props) => {
  const product = props.data;
  const { productTitle, thumbnails } = product;
    const breadcrumbNavigation = {first: "Shop", middle: "Single Product", last: productTitle};
    return (
        <section>
            {/* Single product page bredcrumb here */}
            <BreadCrumb  breadcrumbNavigation={breadcrumbNavigation} />
            <section style={{marginTop: '100px'}}>
              <Container>
                <Grid container spacing={2} sx={{justifyContent: 'space-between'}}>
                    {/* Single product slider here */}
                    <ProductSlider key="4" slidersThumbnails={thumbnails} />
                    
                    {/* Single product detaild here  */}
                    <ProductDetails key="1" productDetails={product} />
                </Grid>
              </Container>
            </section>
        </section>
    );
};

export default SingleInfo;