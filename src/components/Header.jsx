import React from 'react';
import ViewMyWorkBtn from './ViewMyWorkBtn';
import HeaderImg from '../assets/images/header-img.jpg';

function Header() { 
    return ( 
        <header className='pt-5' id='header'> 
            <div className='container py-md-5'> 
                <div className='row'> 
                    <div className='col-md-6 d-flex align-items-start justify-content-center mt-5 mt-md-0'> 
                        <h3 className='text-secondary fw-bold lh-1'>Крутой Перец</h3> 
                    </div>        
                    <div className='col-md-6 d-flex justify-content-center justify-content-md-end'>
                        <h1 className='text-capitalize text-start text-primary lh-25 mb-50'>Фронтендер</h1>
                        <ViewMyWorkBtn /> 
                        <img className='img-fluid w-75 rounded-circle shadow my-5' src={HeaderImg} alt='header img' /> 
                    </div> 
                </div> 
            </div> 
        </header> 
    ) 
}

export default Header;