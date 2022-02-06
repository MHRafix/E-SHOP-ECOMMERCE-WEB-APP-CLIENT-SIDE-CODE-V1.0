import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Alert, Grid, Snackbar, Typography } from '@mui/material';
import React from 'react';
import usePost from '../../../CustomHooks/usePost';

const WishListTable = ({data}) => {
    const {thumbnail, productTitle, salePrice, regularPrice} = data.cartedProduct;

    // Move wishList product to cart list
    const { handlePost, success, setSuccess, alertText } = usePost();
    const cartedProductData = {
        cartedProduct: data.cartedProduct,
        size: 'M',
        quantity: 1
    };

    
    // Hide alert here
    function hideAlert(){
        setSuccess(false);
    }

    if(success){
        setTimeout(hideAlert, 5000);
    }
    
    return (
        <Grid container sx={{alignItems: 'center'}}>
            <Snackbar open={success} autoHideDuration={6000}>
                <Alert severity="success" sx={{ width: '100%', background: 'rgb(46 125 50)', color: 'white', fontFamily: 'Poppins', fontWeight: 400, fontSize: {xs: '13px', md: '18px'}}}>
                    {alertText}
                </Alert>
            </Snackbar>
            <Grid item xs={2.4} md={2.4} sx={{textAlign: 'center', color: '#555'}}>  <img className="wishListProductimage" src={thumbnail} alt="wishListProduct" />
            </Grid>
            <Grid item md={2.4} sx={{textAlign: 'center', color: '#555', fontSize: {xs: 11, md: 18}, display: 'block'}}>{productTitle}</Grid>
            <Grid item xs={2.4} md={2.4} sx={{textAlign: 'center', color: '#555'}}>
                <Typography sx={{ fontFamily: 'Poppins', textAlign: 'center', marginTop: '5px', fontSize: {xs: 10, md: 18}}}>
                    {salePrice !== '0' && <><span className="activePrice">
                    ${salePrice} 
                    </span>&nbsp;
                    <span>-</span>&nbsp;</>}
                    <span className={salePrice !== '0' ? 'deactivePrice' : 'activePrice'}>
                    ${regularPrice}
                    </span>
                </Typography>
            </Grid>
            <Grid item xs={2.4} md={2.4} sx={{textAlign: 'center', color: '#555'}}>
            <button className="wishListCartBtn"
            onClick={() => handlePost(cartedProductData, 'addToCartList')}
            ><ShoppingCartOutlinedIcon sx={{ fontSize: 20, paddingTop: '5px'}} /></button>
            </Grid>
            <Grid item xs={2.4} md={2.4} sx={{textAlign: 'center'}}>
                <span className="crossBtn">&times;</span>
            </Grid>
        </Grid>
    );
};

export default WishListTable;