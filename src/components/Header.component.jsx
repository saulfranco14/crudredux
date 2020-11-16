import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (  
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
                <div className="container">
                    <h5 className="mt-2"> 
                        <Link to={'/'} className="text-light ">
                            CRUD - React, Redux, REST API & AXios
                        </Link>
                    </h5>
                </div>
                <Link 
                    className="btn btn-dark nuevo-post d-block d-md-inline-block"
                    to={'/productos/nuevo'}
                >
                    Producto &#43;
                </Link>
            </nav>
        </Fragment>
    );
}
 
export default Header;