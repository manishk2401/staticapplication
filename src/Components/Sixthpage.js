import React from 'react'
import p1 from '../Assets/portfolio/p1.jpg';
import p2 from '../Assets/portfolio/p2.jpg';
import p3 from '../Assets/portfolio/p3.jpg';
import p4 from '../Assets/portfolio/p4.jpg';
import p5 from '../Assets/portfolio/p5.jpg';
import p6 from '../Assets/portfolio/p6.jpg';
import p7 from '../Assets/portfolio/p7.jpg';
import p8 from '../Assets/portfolio/p8.jpg';
import './sixthpage.css'

export default function Sixthpage() {
    return (
        <div className='portfolio-container'>
            <div>
                <img className='portfolio-pic' src={p1} alt="" />
            </div>
            <div>
                <img className='portfolio-pic' src={p2} alt="" />
            </div>
            <div>
                <img className='portfolio-pic' src={p3} alt="" />
            </div>
            <div>
                <img className='portfolio-pic' src={p4} alt="" />
            </div>

            <div className='portfolio-heading'>
                <h1 style={{ margin: "0px" }}>Our Portfolio</h1>
            </div>
            <div>
                <img className='portfolio-pic' src={p5} alt="" />
            </div>
            <div>
                <img className='portfolio-pic' src={p6} alt="" />
            </div>
            <div>
                <img className='portfolio-pic' src={p7} alt="" />
            </div>
            <div>
                <img className='portfolio-pic' src={p8} alt="" />
            </div>
        </div>
    )
}
