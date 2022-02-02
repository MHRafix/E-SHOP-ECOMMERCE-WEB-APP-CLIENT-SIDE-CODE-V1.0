import { Breadcrumbs, Container } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const BreadCrumb = ({breadcrumbNavigation}) => {
    const { first, middle, last } = breadcrumbNavigation;
    return (
        <section>
            <div className="breadCrumbArea">
               <Container>
                 <Breadcrumbs aria-label="breadcrumb" style={{textAlign: 'center', justifyContent: 'center'}}>
                  <Link to='/' style={{ color: '#555', textDecoration: 'none', fontFamily: 'Poppins', fontWeight: 400, fontSize: 18 }} >
                   {first}
                  </Link>
                  {middle && <Link
                    style={{ color: '#555', textDecoration: 'none', fontFamily: 'Poppins', fontWeight: 400, fontSize: 18 }}
                    >
                    {middle}
                    </Link>}
                    <span
                    disabled={true}
                    aria-current="page"
                    style={{ color: '#000', textDecoration: 'none', fontFamily: 'Poppins', fontWeight: 400, fontSize: 18 }}
                    >
                    {last}
                    </span>
                </Breadcrumbs>
              </Container>
            </div>
        </section>
    );
};

export default BreadCrumb;