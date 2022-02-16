import React from 'react';
import pimage from '../Assets/image.jpg';
import vector from '../Assets/vector.png';
import { Container } from '@mui/material';
import Button from '@mui/material/Button';
import "./forthpage.css"

export default function Forthpage() {
    return (
        <div style={{ height: "94vh", background: "rgb(255 131 131 / 61%)" }}>
            <Container style={{ height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div className="creative-box">
                    <img className='vector-img' src={vector} alt="" />
                    <div className='vector-img2'></div>
                    <img className='vector-img3' src={vector} alt="" />
                    <div className="creative-img" style={{ width: "400px" }} >
                        <img src={pimage} alt="" style={{ width: "100%", height: "100%" }} />
                    </div>
                    <div className="creative-content" style={{ width: "400px" }}>
                        <div style={{ padding: "40px" }}>
                            <h1 style={{ color: "darkblue" }} >Creative Thinking</h1>
                            <div style={{ margin: "15px 0px" }}>
                                <small>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique ad in vitae iste quaerat.</small>
                            </div>
                            <Button style={{ borderRadius: "20px", background: "#ff8383" }} variant="contained" size="large">
                                Learn More
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
