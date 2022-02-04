import { Alert, CircularProgress, Grid, Stack } from '@mui/material';
import React from 'react';
import useGet from '../../../../../CustomHooks/useGet';
import usePost from '../../../../../CustomHooks/usePost';
import Card from '../ProductCard/Card';

const DiscountProducts = () => {
    // Import data from the customhooks
    const { loading, gotData } = useGet('products');

    // Carted product data saved  to the database
    const { handlePost, posting, success } = usePost();

    return (
        <Grid container spacing={2}>
            {success && <Stack spacing={2} sx={{ width: '100%' }}>
                <Alert severity="success"  sx={{fontSize: '20px', fontFamily: 'Poppins', fontWeight: 500, background: '#dbdbdb'}}>Product successfully added to cart!</Alert>
            </Stack>
            }
            {loading ? <CircularProgress sx={{ textAlign: 'center', margin: 'auto'}} mt={3} color="secondary" /> : <>{gotData.map(data => <Card key={data._id} data={data} col={3} handlePost={handlePost} posting={posting} />)}</>}
        </Grid>
    );
};

export default DiscountProducts;