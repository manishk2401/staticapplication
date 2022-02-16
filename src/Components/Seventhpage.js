import React from 'react'
import './seventhpage.css'
import { Container } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Seventhpage() {
    return (
        <div style={{ backgroundColor: "#5123e5", height: "94vh" }}>
            <div className="white-bg"></div>
            <Container style={{ height: "100%", padding: "0px 100px" }}>
                <div className='contact-header'>
                    <div className='contact-us'>
                        <div>
                            <h4>Lorem ipsum dolor sit. </h4>
                            <h1>Development</h1>
                        </div>
                        <div>
                            <h4>Amet consectetur adipisicing elit.</h4>
                            <h1>Leadership</h1>
                        </div>
                        <div>
                            <h4>Deleniti ratione sunt fugit!</h4>
                            <h1>Relevance</h1>
                        </div>
                    </div>
                    <div className='contact-details'>
                        <div className="address-detail">
                            <h3>Address</h3>
                            <div>
                                <small> 1600, Amphitheatre Parkway</small>
                            </div>
                            <div>
                                <small> Mountain View, CA 94043</small>
                            </div>
                        </div>
                        <div className="phone-detail">
                            <h3>Phone</h3>
                            <div>
                                <small> +854-795-886</small>
                            </div>
                        </div>
                        <div className="mail-detail">
                            <h3>Email</h3>
                            <div>
                                <small>info@example.com</small>
                            </div>
                        </div>
                        <div className="social-link">
                            <div style={{ color: "blue" }}>
                                <FacebookIcon />
                            </div>
                            <div style={{ color: "skyblue" }}>
                                <TwitterIcon />
                            </div>
                            <div style={{ color: "purple" }}>
                                <InstagramIcon />
                            </div>
                            <div style={{ color: "red" }}>
                                <YouTubeIcon />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='contact-footer'>
                    <div>
                        <h5>Headline</h5>
                        <div><small>Sample text. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, error.</small></div>
                    </div>
                    <div>
                        <h5>Headline</h5>
                        <div><small>Sample text.</small></div>
                    </div>
                    <div>
                        <h5>Headline</h5>
                        <div><small>Sample text.</small></div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
