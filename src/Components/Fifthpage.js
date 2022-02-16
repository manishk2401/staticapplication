import React from 'react';
import "./fifthpage.css"
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Container } from '@mui/material';
import Button from '@mui/material/Button';

export default function Fifthpage() {
    return (
        <div style={{ height: "94vh" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ width: "50%", padding: "10px 20px" }}>
                    <h3 style={{ margin: "10px 0px" }}>WHAT WE DO</h3>
                    <h1 style={{ fontSize: "xx-large" }}>About Us & Our Work</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia quaerat iste nam consequuntur vitae reprehenderit molestias iusto facilis nemo cum.</p>
                    <ChevronRightIcon fontSize="large"></ChevronRightIcon>
                    <p style={{ width: "50%" }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis excepturi repellendus totam commodi magni?</p>
                </div>

                <div className='number-boxes'>
                    <div className='number-box award-box'>
                        <h3 style={{ margin: "0px" }}>AWARDS</h3>
                        <h1 style={{ fontSize: "8rem" }}>10k</h1>
                    </div>
                    <div style={{
                        width: "50%"
                    }}>
                        <div className='number-box clients-box'>
                            <h3 style={{ margin: "0px" }}>CLIENTS</h3>
                            <h1 style={{ fontSize: "5rem" }}>8k</h1>
                        </div>
                        <div className='number-box cases-box'>
                            <h3 style={{ margin: "0px" }}>CASES</h3>
                            <h1 style={{ fontSize: "8rem" }}>15k</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='wwd-footer'>
                <Container style={{ height: "100%", display: "flex", alignItems: "center" }}>
                    <div style={{ width: "100%", display: "flex", justifyContent: "space-around" }}>
                        <h2 style={{ color: "blue" }}>Do you need a cunsultation?</h2>
                        <Button style={{ borderRadius: "20px", background: "blue" }} variant="contained">
                            Learn More
                        </Button>
                    </div>
                </Container>
            </div>
        </div>
    )
}
