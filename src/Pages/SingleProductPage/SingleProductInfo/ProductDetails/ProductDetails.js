import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import { Grid, Radio, Typography } from '@mui/material';
import React from 'react';
import Rating from 'react-rating';

const ProductDetails = () => {
    return (
 <Grid item xs={12} md={6}>
    <div className="productDetils">
        <div className="productTitle">
                <Typography sx={{fontSize: 24, fontWeight: 500, fontFamily: 'Poppins', color: '#010101', marginBottom: '10px'}}>
                    Crew ventile coat one
                </Typography>
            </div>
            <div className="productPrices" style={{marginBottom: '30px'}}>
                <Typography sx={{ display: 'inline', fontSize: 24, color: '#fe5252', fontFamily: 'Poppins'}}>$30.00</Typography>
                &nbsp;&nbsp;&nbsp;
                <Typography sx={{ display: 'inline', fontSize: 18, color: '#333', fontFamily: 'Poppins', textDecoration: 'line-through'}}>$60.00</Typography>
            </div>

            <div className="rattingAndReviws" style={{display: 'flex', marginBottom: '15px'}}>
                <span 
                className="rattis" 
                style={{ 
                    color: '#ffa900', 
                    textAlign: 'center'
                    }}>
                    <Rating
                    initialRating="3"
                    emptySymbol={<StarBorderOutlinedIcon />}
                    fullSymbol={<StarIcon />}
                    readonly
                    />
                </span>
                &nbsp; &nbsp; &nbsp; 
                <span className="reviewAmount" style={{color: '#555'}}>
                | &nbsp;  &nbsp; 55 Reviews
                </span>
            </div>

            <Typography sx={{fontFamily: 'Poppins', fontSize: '16px', color: '#555', marginBottom: '40px'}}>
                Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
            </Typography>
            {/* Categories of products */}
            <h4 style={{marginBottom: '2px', color: '#444', fontWeight: 500}}>Available Sizes: </h4>
            {/* {loading ? {categoriesArr.map(category => <> */}
            <Radio
                style={{
                margin: '0px',
                color: 'rgb(222 77 247)', 
                fontWeight: 500
                }}
                // checked={selectedCategory === category}
                // onChange={handleChangeCategory}
                value="category"
                name="radio-buttons"
                inputProps={{ 'aria-label': "category" }}
            />{"category.toUpperCase()"}
            {/* </>
            )}} */}
            {/* <br /> <br /> */}

            <div className="actionButtons">
                <span className="counterBtn">-</span>
                <span className="counterValue">2</span>
                <span className="counterBtn">+</span>

                <button className="addToCartBtn">Add To Cart</button>

                <span className="wishAndCompareBtn"><FavoriteBorderIcon /></span>
                <span className="wishAndCompareBtn"><CompareArrowsIcon /></span>
            </div>
            <div className="taxonomy">
                <span className="taxonomyItema">Category: Fashion</span>
         </div>
    </div>
</Grid>

    );
};

export default ProductDetails;