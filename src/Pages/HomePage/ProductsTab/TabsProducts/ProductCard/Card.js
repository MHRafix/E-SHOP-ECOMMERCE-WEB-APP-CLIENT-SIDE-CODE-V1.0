import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import StarIcon from '@mui/icons-material/Star';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { Grid, Typography } from '@mui/material';
import React from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import useAnimation from '../../../../../CustomHooks/useAnimation';
const Card = ({ data, col }) => {
  // Import animation here
  useAnimation();

  // Let's destucturing the product data from the data object
  const { id, thumbnail } = data;

    return (
      <Grid item mb={4} xs={6} md={col} data-aos="fade-up">
            <div className="productWrapper">
              <div className="productImage">
                <span className="saleBadge">SALE!</span>
                  <img style={{width: '100%'}} src={thumbnail} alt="productThumbnail" />
              </div>
              <div className="buttons">
                <button className="wishAndView"><FavoriteBorderIcon sx={{ fontSize: 20, paddingTop: '5px'}} /></button>
                <button className="cartBtn"><ShoppingCartOutlinedIcon sx={{ fontSize: 20, paddingTop: '5px'}} /></button>
                <button className="wishAndView"><VisibilityOutlinedIcon sx={{ fontSize: 20, paddingTop: '5px'}} /></button>
              </div>
            </div>
              <div className="detals" style={{ marginTop: '20px'}}>
                <Link className="titleLink" to={`singleProdcutsHere/${id}`}><Typography sx={{ fontFamily: 'Poppins', textAlign: 'center', fontSize: 16, fontWeight: 400, letterSpacing: 1, marginBottom: '5px'}}>
                  Hello Hudie
                </Typography></Link>
                <span className="rattis" style={{ color: '#ffa900', textAlign: 'center'}}>
                <Rating
                  initialRating={3}
                  emptySymbol={<StarBorderOutlinedIcon />}
                  fullSymbol={<StarIcon />}
                  readonly
                />
                </span>
                <Typography sx={{ fontFamily: 'Poppins', textAlign: 'center', marginTop: '5px'}}>
                  <span className="activePrice">
                    $75.00 
                  </span>&nbsp;
                  <span>-</span>&nbsp;
                  <span className="deactivePrice">
                    $100.00
                  </span>
                </Typography>
              </div>
        </Grid>
    );
};

export default Card;