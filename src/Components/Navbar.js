import React, { useState, useRef, useEffect } from 'react'
import './navbar.css'
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Container from '@mui/material/Container';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import {
    Link
} from "react-router-dom";


export default function Navbar() {
    const [open, setOpen] = useState(false)
    const anchorRef = useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === 'Escape') {
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = useRef(open);
    useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return (
        <div style={{ boxShadow: "0px 0px 4px #00000042" }}>
            <Container style={{ display: "flex", justifyContent: "space-between" }}>
                <div className="logo">
                    <Link className='nav-link' to="/" style={{ textDecoration: "none", fontSize: "x-large" }}>
                        Logo
                    </Link>
                </div>

                <div className="menu">
                    <IconButton
                        ref={anchorRef}
                        id="composition-button"
                        aria-controls={open ? 'composition-menu' : undefined}
                        aria-expanded={open ? 'true' : undefined}
                        aria-haspopup="true"
                        onClick={handleToggle}
                    >
                        <MenuIcon></MenuIcon>
                    </IconButton>
                    <Popper
                        open={open}
                        anchorEl={anchorRef.current}
                        role={undefined}
                        placement="bottom-start"
                        transition
                        disablePortal
                        style={{ zIndex: "7" }}
                    >
                        {({ TransitionProps, placement }) => (
                            <Grow
                                {...TransitionProps}
                                style={{
                                    transformOrigin:
                                        placement === 'bottom-start' ? 'right top' : 'right bottom',
                                }}
                            >
                                <Paper>
                                    <ClickAwayListener onClickAway={handleClose}>
                                        <MenuList
                                            autoFocusItem={open}
                                            id="composition-menu"
                                            aria-labelledby="composition-button"
                                            onKeyDown={handleListKeyDown}
                                        >
                                            <Link className='nav-link' to="/">
                                                <MenuItem onClick={handleClose}>Home</MenuItem>
                                            </Link>
                                            <Link className='nav-link' to="/about">
                                                <MenuItem onClick={handleClose}>About Company</MenuItem>
                                            </Link>
                                            <Link className='nav-link' to="/offer">
                                                <MenuItem onClick={handleClose}>What we offer</MenuItem>
                                            </Link>
                                            <Link className='nav-link' to="/thinking">
                                                <MenuItem onClick={handleClose}>Creative Thinking</MenuItem>
                                            </Link>
                                            <Link className='nav-link' to="/whatwedo">
                                                <MenuItem onClick={handleClose}>What we do</MenuItem>
                                            </Link>
                                            <Link className='nav-link' to="/portfolio">
                                                <MenuItem onClick={handleClose}>Out Portfolio</MenuItem>
                                            </Link>
                                            <Link className='nav-link' to="/contact">
                                                <MenuItem onClick={handleClose}>Contact Us</MenuItem>
                                            </Link>
                                        </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                            </Grow>
                        )}
                    </Popper>
                </div>
            </Container>
        </div>
    )
}
