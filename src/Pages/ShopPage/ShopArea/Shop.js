import CalendarViewMonthOutlinedIcon from '@mui/icons-material/CalendarViewMonthOutlined';
import GridViewIcon from '@mui/icons-material/GridView';
import ViewComfyOutlinedIcon from '@mui/icons-material/ViewComfyOutlined';
import { CircularProgress, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import useGet from '../../../CustomHooks/useGet';
import ErrImage from '../../../Images/ICONS/shopingError.jpg';
import Card from '../../HomePage/ProductsTab/TabsProducts/ProductCard/Card';
import Sidebar from '../Sidebar/Sidebar';

const Shop = () => {
    // Import data from the customhooks
    const [ dependency, setDependency ] = useState('products');
    const [ layout, setLayout ] = useState(4);
    const { loading, gotData } = useGet(dependency);

    // Set layout btn color
    let layout1Color = '#444';
    let layout2Color = '#444';
    let layout3Color = '#444';
    if(layout === 4){
        layout1Color = '#a749ff';
        layout3Color = '#444';
        layout2Color = '#444';

    }else if(layout === 3){
        layout1Color = '#444';
        layout3Color = '#a749ff';
        layout2Color = '#444';

    }else if(layout === 6){
        layout1Color = '#444';
        layout3Color = '#444';
        layout2Color = '#a749ff';
    }
    
    return (
        <section>
            <Container>
                <Grid container spacing={2} sx={{marginTop: 3}}>
                    <Grid item md={2} xs={12} >
                        <Sidebar dpend={setDependency}/>
                    </Grid>
                    <Grid item md={10} xs={12}>
                        <div className="shopTopBar">
                            <Grid container mb={5}>
                                <Grid item md={3} xs={12}  mb={2} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '15px'}}>
                                    <Typography
                                    sx={{color: '#444', fontFamily: 'Poppins', fontWeight: 500, textAlign: 'center'}}
                                    >Showing 1 to 7 of {gotData.length} result</Typography>
                                </Grid>
                                <Grid item md={9} xs={12} sx={{ textAlign: 'center'}} >
                                    <Grid container>
                                        <Grid item md={10} xs={9}>
                                        <input
                                          type='search' 
                                          id='shopTopBarSearchInput'
                                          placeholder='Search by products name...'
                                        />
                                        </Grid>
                                        <Grid item md={2} xs={3} sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                         <GridViewIcon sx={{fontSize: 25, border: `1px solid ${layout2Color}`, cursor: 'pointer', color: `${layout2Color}`}} onClick={() => setLayout(6)} />
                                         <CalendarViewMonthOutlinedIcon sx={{fontSize: 25, border: `1px solid ${layout1Color}`, cursor: 'pointer', color: `${layout1Color}`}} onClick={() => setLayout(4)} />
                                         <ViewComfyOutlinedIcon sx={{fontSize: 25, border: `1px solid ${layout3Color}`, cursor: 'pointer', color: `${layout3Color}`}} onClick={() => setLayout(3)} />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </div>
                      <Grid container spacing={2}>
                      {loading ? <CircularProgress size={40} sx={{ textAlign: 'center', margin: 'auto'}} mt={5} color="secondary" /> : <>
                      {gotData.length ? <>{gotData.map(data => <Card key={data._id} data={data} col={layout} />)}</>: <div className="errorMessage">
                            <img src={ErrImage} width='200' height='200' alt="errImage" className="errImg" />
                            <h1 className="errMssg">No Products Matched...!</h1>
                          </div>}
                      </>}
                      </Grid>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
};

export default Shop;