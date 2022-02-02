import { CircularProgress } from '@mui/material';
import Radio from '@mui/material/Radio';
import React, { useState } from 'react';
import useGet from '../../../CustomHooks/useGet';
const Sidebar = ({dpend}) => {
    const [selectedValue, setSelectedValue] = useState('all');
    const handleChange = (event) => {
      if(event.target.value === 'all'){
          dpend('products/');
      }else{
          dpend(`products/${event.target.value}`);
    }
    setSelectedValue(event.target.value);
};

    const { loading, gotData } = useGet('products');
    
    // Findout all categories
    let categoriesArr = ['all'];
    for(const data of gotData){
        if(categoriesArr.includes(data.category) === true){
            //Nothing here
        }else{
            categoriesArr.push(data.category);
        }
    }
    
    const sizeArr = [
        "all", 
        "s",
        "m",
        "l",
        "xl",
        "xxl" 
    ];
  
    return (
        <div className="sidebarArea">
            <h3 style={{marginLeft: '10px', marginBottom: '5px', color: '#444', fontWeight: 500}}>Categories</h3>
            {loading ? <div style={{ textAlign: 'center'}}><CircularProgress size={24}  mt={5} color="secondary" /></div> : <>{categoriesArr.map(category => <><Radio
                style={{
                margin: '5px 8px',
                color: 'rgb(222 77 247)', 
                fontWeight: 500
                }}
                checked={selectedValue === category}
                onChange={handleChange}
                value={category}
                name="radio-buttons"
                inputProps={{ 'aria-label': category }}
            />{category.toUpperCase()} <br /></>)}</>}
            <br /> <br />
            <h3 style={{marginLeft: '10px', marginBottom: '5px', color: '#444', fontWeight: 500}}>Sizes</h3>
            {sizeArr.map(size => <><Radio
                style={{
                margin: '5px 8px',
                color: 'rgb(222 77 247)', 
                fontWeight: 500
                }}
                checked={selectedValue === size}
                onChange={handleChange}
                value={size}
                name="radio-buttons"
                inputProps={{ 'aria-label': size }}
            />{size.toUpperCase()} <br /></>)}
        </div>

    );
};

export default Sidebar;