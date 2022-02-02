import { CircularProgress, Container, Grid } from '@mui/material';
import React, { useState } from 'react';
import useGet from '../../../CustomHooks/useGet';
import Card from '../../HomePage/ProductsTab/TabsProducts/ProductCard/Card';
import Sidebar from '../Sidebar/Sidebar';

const Shop = () => {
    // Import data from the customhooks
    const [ dependency, setDependency ] = useState('products');
    const { loading, gotData } = useGet(dependency);
    return (
        <section>
            <Container>
                <Grid container spacing={2} sx={{marginTop: 3}}>
                    <Grid item md={2} >
                        <Sidebar dpend={setDependency}/>
                    </Grid>
                    <Grid item md={10}>
                      <Grid container spacing={2}>
                      {loading ? <CircularProgress size={40} sx={{ textAlign: 'center', margin: 'auto'}} mt={5} color="secondary" /> : <>{gotData.map(data => <Card key={data._id} data={data} col={4} />)}</>}
                      </Grid>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
};

export default Shop;