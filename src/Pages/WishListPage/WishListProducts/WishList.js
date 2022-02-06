import { CircularProgress, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import useGet from '../../../CustomHooks/useGet';
import ErrImage from '../../../Images/ICONS/wishlistIcon.png';
import WishListTable from './WishListTable';

const WishList = () => {
    // Import data from custom hooks
    const { loading, gotData } = useGet('getFromWishList');
    return (
        <section>
            <div className="wishListWrapper">
            {loading ? <div style={{ textAlign: 'center'}}><CircularProgress 
                        size={40} 
                        sx={{ textAlign: 'center', 
                        margin: 'auto'
                        }} 
                        mt={5} 
                        color="secondary" 
                        /></div> : <Container>
                    {gotData.length ? <><div className="heading">
                        <Typography sx={{ fontSize: 25, fontWeight: 500, fontFamily: 'Poppins'}}>
                            Your wishlist items
                        </Typography>
                    </div> <br />
                    
                    <Grid container sx={{alignItems: 'center'}}>
                        <Grid item xs={2.4} md={2.4} sx={{textAlign: 'center', color: '#555', fontFamily: 'Poppins', fontSize: {xs: 10, md: 18}}}>{'image'.toUpperCase()}</Grid>
                        <Grid item xs={2.4} md={2.4} sx={{textAlign: 'center', color: '#555', fontFamily: 'Poppins', fontSize: {xs: 10, md: 18}}}>{'product name'.toUpperCase()}</Grid>
                        <Grid item xs={2.4} md={2.4} sx={{textAlign: 'center', color: '#555', fontFamily: 'Poppins', fontSize: {xs: 10, md: 18}}}>{'unit price'.toUpperCase()}</Grid>
                        <Grid item xs={2.4} md={2.4} sx={{textAlign: 'center', color: '#555', fontFamily: 'Poppins', fontSize: {xs: 10, md: 18}}}>{'add to cart'.toUpperCase()}</Grid>
                        <Grid item xs={2.4} md={2.4} sx={{textAlign: 'center', color: '#555', fontFamily: 'Poppins', fontSize: {xs: 10, md: 18}}}>{'Action'.toUpperCase()}</Grid>
                    </Grid>
                    {gotData.map(data => <WishListTable data={data} />)}
                  </> : <div className="errorMessage" style={{textAlign: 'center'}}>
                            <img src={ErrImage} style={{width: '30%', height: '100%', margin: 'auto'}} alt="errImage"/>
                            <h1 className="errMssg">No items found in wishlist...!</h1> <br />
                            <Link to='/shop' style={{textDecoration: 'none', fontFamily: 'Poppins', background: 'var(--btn-bg)', color: '#fff', padding: '10px 30px', marginTop: '20px'}}>Add Items</Link>
                        </div>}
                </Container>}
            </div>
        </section>
    );
};

export default WishList;