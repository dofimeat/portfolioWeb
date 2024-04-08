import React from "react";
import AboutImg from '../assets/images/about-img.jpg'
import ViewMyWorkBtn from "./ViewMyWorkBtn";

function AboutSection() {   
    return (   
        <div className='bg-dark text-align py-5' id='about'>   
            <div className='container'>   
                <div className='flex-column-reverse flex-md-row row'>   
                    <div className='col-md-6 mt-5 mt-md-0 d-flex justify-content-center align-items-center'>   
                        <img className='img-fluid shadow' src={AboutImg} alt="About img" style={{width: '100%', objectFit: 'cover'}} />   
                    </div>   
                    <div className='col-md-6 d-flex flex-column justify-content-center'>  
                        <h2 className='mb-5' style={{color: 'white'}}>Обо мне</h2>  
                        <p className='text-start' style={{color: 'white'}}>Всем ку, сделаю сайт за копейки. html, css, js, react плаки плаки </p>  
                        <p className='text-start mb-5' style={{color: 'white'}}>Пишите мне, я крутой тип и позитивный, сайти приколы точка ком </p>  
                        <ViewMyWorkBtn />  
                    </div>  
                </div>   
            </div>   
        </div>   
    )   
}

export default AboutSection;