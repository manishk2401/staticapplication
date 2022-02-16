import React from 'react'
import { Container } from '@mui/material';
import Button from '@mui/material/Button';
import "./thirdpage.css";
import pimage from '../Assets/img.jpg';
import DoneIcon from '@mui/icons-material/Done';
import homebg from '../Assets/27057.jpg'

export default function Thirdpage() {
    return (
        <div style={{ height: "94vh" }}>
            <div className='offer-bg1'></div>
            <div className='offer-bg2'>
                <img src={homebg} alt="" style={{ width: "100%", height: "100%" }} />
            </div>
            <Container style={{ height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div className="offer-text">
                    <div className="offer-cards" style={{ width: "25%", minWidth: "250px", padding: "20px" }}>
                        <div className="img-offer" style={{ marginBottom: "10px" }}>
                            <img src={pimage} alt="" style={{ width: "90%", border: "solid 5px white" }} />
                        </div>
                        <h2 style={{ color: "#2c2ca5" }}>What We Offer</h2>
                        <ul className='offer-list' style={{ listStyle: "none", padding: "0px" }}>
                            <li> <DoneIcon style={{ fontSize: "20px", color: "#2c2ca5" }} /> Lorem ipsum dolor sit amet.</li>
                            <li> <DoneIcon style={{ fontSize: "20px", color: "#2c2ca5" }} /> Ipsum dolor consectetur</li>
                            <li> <DoneIcon style={{ fontSize: "20px", color: "darkblue" }} /> Adipisicing elit Quod?</li>
                            <li> <DoneIcon style={{ fontSize: "20px", color: "darkblue" }} /> Dolor sit amet elit.</li>
                        </ul>
                    </div>
                    <div className="offer-content">
                        <h2 >BRANDING AND DESIGN</h2>
                        <div style={{ margin: "15px 0px" }}>
                            <small>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique ad in vitae iste quaerat, consectetur nisi modi, porro recusandae voluptates illum dolorem sint corrupti delectus dolores ipsa vero amet ab id voluptatem. Quisquam porro aliquam qui nesciunt pariatur sed molestias?</small>
                        </div>
                        <Button style={{ borderRadius: "20px", background: "#ff8383" }} variant="contained" size="large">
                            Learn More
                        </Button>
                    </div>
                </div>
            </Container>
        </div>
    )
}
