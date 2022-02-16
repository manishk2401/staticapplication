import React from 'react';
import homebg from '../Assets/27057.jpg'
import Link from '@mui/material/Link';
import { Container } from '@mui/material';
import './firstpage.css'

export default function Firstpage() {
    return (
        <div className='cont' >
            <img src={homebg} alt="" style={{ zIndex: "-1", width: "100%", height: "45vh", position: "absolute" }} />
            <Container style={{ height: "100%" }}>
                <div className="content-box">
                    <div style={{ top: "200px", backgroundColor: "blue" }} className='home-card'>
                        <h1>
                            Digital Art & Digital Studio
                        </h1>
                        <div style={{ margin: "10px 0px" }}>
                            <small>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam mollitia consectetur quas aspernatur molestiae animi, impedit voluptas magni dolore nisi minus itaque qui tempora debitis quam iste perspiciatis veritatis. Perferendis iusto qui, vero optio dolorem tempore explicabo quis itaque sed.
                            </small>
                        </div>
                        <Link href="#" style={{ color: "white", textDecorationColor: "inherit" }}> LEARN MORE</Link>
                    </div >
                    <div style={{ top: "100px", backgroundColor: "darkblue" }} className='home-card'>
                        <h1>
                            Our Mission
                        </h1>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam mollitia consectetur quas aspernatur molestiae animi, impedit voluptas magni dolore nisi minus itaque qui tempora debitis quam iste perspiciatis veritatis. Perferendis iusto qui, vero optio dolorem tempore explicabo quis itaque sed.
                        </p>
                    </div >
                </div>
            </Container>
        </div >
    )
}
