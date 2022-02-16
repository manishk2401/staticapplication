import React from 'react';
import { Container } from '@mui/material';
import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import WbIncandescentOutlinedIcon from '@mui/icons-material/WbIncandescentOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import "./secondpage.css";
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';


export default function Secondpage() {
    return (
        <div style={{ backgroundColor: "#3a3af9", height: "94vh" }}>
            <Container style={{ height: "100%" }}>
                <div className="content-text">
                    <div className="about-content">
                        <p style={{ margin: "5px 0px" }}>ABOUT COMPANY</p>
                        <h1 style={{ fontSize: "xxx-large" }}>Need Amazing Design?</h1>
                        <div style={{ margin: "15px 0px" }}>
                            <small>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique ad in vitae iste quaerat, consectetur nisi modi, porro recusandae voluptates illum dolorem sint corrupti delectus dolores ipsa vero amet ab id voluptatem. Quisquam porro aliquam qui nesciunt pariatur sed molestias?</small>
                        </div>
                        <Button style={{ borderRadius: "20px", background: "#ff8383" }} variant="contained" size="large">
                            Learn More
                        </Button>
                    </div>
                    <div className="about-cards">
                        <div className="cards-container" style={{ position: "relative", top: "50px" }}>
                            <div className="card">
                                <Avatar className="about-icon" style={{ backgroundColor: "#ff8383" }}>
                                    <AccountTreeOutlinedIcon></AccountTreeOutlinedIcon>
                                </Avatar>
                                <h3 className="card-heading">Sample Headline</h3>
                                <small className="card-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique consectetur facilis eius et, fugiat ipsam.</small>
                            </div>
                            <div className="card">
                                <Avatar className="about-icon" style={{ backgroundColor: "rgb(255 131 233)" }}>
                                    <WbIncandescentOutlinedIcon></WbIncandescentOutlinedIcon>
                                </Avatar>
                                <h3 className="card-heading">Sample Headline</h3>
                                <small className="card-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique consectetur facilis eius et, fugiat ipsam.</small>
                            </div>
                        </div>
                        <div className="cards-container" style={{ position: "relative", bottom: "50px" }}>
                            <div className="card">
                                <Avatar className="about-icon" style={{ backgroundColor: "rgb(163 131 255)" }}>
                                    <BusinessCenterOutlinedIcon></BusinessCenterOutlinedIcon>
                                </Avatar>
                                <h3 className="card-heading">Sample Headline</h3>
                                <small className="card-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique consectetur facilis eius et, fugiat ipsam.</small>
                            </div>
                            <div className="card">
                                <Avatar className="about-icon" style={{ backgroundColor: "rgb(131 207 255)" }}>
                                    <PhotoCameraOutlinedIcon></PhotoCameraOutlinedIcon>
                                </Avatar>
                                <h3 className="card-heading">Sample Headline</h3>
                                <small className="card-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique consectetur facilis eius et, fugiat ipsam.</small>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
