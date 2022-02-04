import { Breadcrumbs } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const BreadCrumb = ({breadcrumbNavigation}) => {
    const { first, middle, last } = breadcrumbNavigation;
    return (
        <section>
            <div className="breadCrumbArea">
             <div className="breadcrumbNavigation">
                 <Breadcrumbs aria-label="breadcrumb" style={{textAlign: 'center', justifyContent: 'center'}}>
                  <Link to={`/${first.toLowerCase()}`} style={{ color: '#555', textDecoration: 'none', fontFamily: 'Poppins', fontWeight: 400, fontSize: 18 }} >
                   {first?.toUpperCase()}
                  </Link>
                  {middle && <span
                    style={{ color: '#555', textDecoration: 'none', fontFamily: 'Poppins', fontWeight: 400, fontSize: 18 }}
                    >
                    {middle?.toUpperCase()}
                    </span>}
                    <span
                    disabled={true}
                    aria-current="page"
                    style={{ color: '#000', textDecoration: 'none', fontFamily: 'Poppins', fontWeight: 400, fontSize: 18 }}
                    >
                    {last?.toUpperCase()}
                    </span>
                </Breadcrumbs>
             </div>
            </div>
        </section>
    );
};

export default BreadCrumb;