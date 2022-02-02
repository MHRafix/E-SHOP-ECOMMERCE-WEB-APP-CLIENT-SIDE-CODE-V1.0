import { CircularProgress, Grid } from '@mui/material';
import React from 'react';
import useGet from '../../../../../CustomHooks/useGet';
import Card from '../ProductCard/Card';

const DiscountProducts = () => {
    // Import data from the customhooks
    const { loading, gotData } = useGet('../products.json');
    return (
        <Grid container spacing={2}>
            {loading ? <CircularProgress sx={{ textAlign: 'center', margin: 'auto'}} mt={3} color="secondary" /> : <>{gotData.map(data => <Card key={data.id} data={data} col={3} />)}</>}
        </Grid>
    );
};

export default DiscountProducts;