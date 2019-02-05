import './Banner.scss';
import React from 'react';

const Banner = (props) => {

    return (
        <section className="banner">
            <div className="banner__title"> </div>
            <div className="banner_layers"> {props.children} </div>            
            <div className="banner__skipper">
                <svg className="skipper" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 490 490">
                    <path d="M245 490l245-255.9-69.8-69.8L490 91.5c-30.3-15.9-60.7-31.7-91-47.6-51.3 38.8-102.7
                     77.7-154 116.5-51.3-38.9-102.7-77.7-154-116.6C60.7 59.7 30.3 75.6 0 91.5l69.8 72.9L0 234.1
                      245 490zM42.9 91.9L91 43.8l154 160.8L399 43.8l48.1 48.1C379.8 177.1 312.4 262.2 245 347.4
                       177.6 262.2 110.3 177.1 42.9 91.9zM91 186.5l154 160.8 154-160.8 48.1 48.1C379.8 319.7 312.4
                        404.9 245 490c-67.4-85.1-134.7-170.3-202.1-255.4L91 186.5z" fill="#dfbb24"/>
                </svg>
            </div>
        </section>
    )

} 

export default Banner;