import { CircularProgress, Container, Grid } from '@mui/material';
import React from 'react';
import useGet from '../../../CustomHooks/useGet';
import Card from '../../HomePage/ProductsTab/TabsProducts/ProductCard/Card';
import Sidebar from '../Sidebar/Sidebar';

const Shop = () => {
    // Import data from the customhooks
    const { loading, gotData } = useGet('../products.json');
    return (
        <section>
            <Container>
                <Grid container spacing={2} sx={{marginTop: 3}}>
                    <Grid item md={3} sx={{background: 'var(--card-bg)'}}>
                        <Sidebar />
                    </Grid>
                    <Grid item md={9}>
                      <Grid container spacing={2}>
                      {loading ? <CircularProgress sx={{ textAlign: 'center', margin: 'auto'}} mt={5} color="secondary" /> : <>{gotData.map(data => <Card key={data.id} data={data} col={4} />)}</>}
                      </Grid>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
};

export default Shop;