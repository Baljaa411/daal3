import React from "react";
import { Menu } from '@mantine/core';
import "./header.css"
const Header = () =>{
    
    return(
        <div className="header">
            <div className="head">
                <div className="logo">
                   
                </div>
                <div className="menu">
                                <Menu trigger="hover" openDelay={100} closeDelay={400}>
                                            <ul className="d-flex">
                                                <li><a href="https://thepcgames.net/">Home</a></li>
                                                <li><a href="https://thepcgames.net/">Gategories</a></li>
                                                <li><a href="https://thepcgames.net/">Tutorial</a></li>
                                                <li><a href="https://thepcgames.net/">Request</a></li>
                                                <li><a href="https://thepcgames.net/">Contact</a></li>
                                                <li><a href="https://thepcgames.net/">Parts Error</a></li>
                                                <li><a href="https://thepcgames.net/">Common issues</a></li>
                                            </ul>
                                </Menu>
                </div>
            </div>
        </div>
    )
}

export default Header;