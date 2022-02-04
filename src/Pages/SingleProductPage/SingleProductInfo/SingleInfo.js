import { Container, Grid } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import useGet from '../../../CustomHooks/useGet';
import BreadCrumb from '../../SharedComponents/BreadCrumb/BreadCrumb';
import ProductDetails from './ProductDetails/ProductDetails';
import ProductSlider from './ProductSlider.js/ProductSlider';

const SingleInfo = () => {
    const breadcrumbNavigation = {first: "Shop", middle: "Single Product", last: "Title"};
    const { productId } = useParams();
    
    // Load data from the server by using dynamic url
    const dependency = `shop/singleProducts/${productId}`;
    const { loading, gotData } = useGet(dependency);
    console.log(gotData);
    
    return (
        <section>
            {/* Single product page bredcrumb here */}
            <BreadCrumb  breadcrumbNavigation={breadcrumbNavigation} />
            <section style={{marginTop: '100px'}}>
              <Container>
                <Grid container spacing={2} sx={{justifyContent: 'space-between'}}>
                    {/* Single product slider here */}
                    <ProductSlider />
                    
                    {/* Single product detaild here  */}
                    <ProductDetails />
                </Grid>
              </Container>
            </section>
        </section>
    );
};

export default SingleInfo;