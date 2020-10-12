import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Foot = styled.footer`
    background: #fff;
    padding: 10px;
    bottom: 0;
    width: 100%
`

const Footer = () => {
    return(
        <>
            <Foot
            >
                <p 
                className="text-center"
                >
                    Copyright 2020 Text Convert | 
                    Created by <a href=""> @noguerajulioces </a>
                    | <Link to="privacity-policy">Privacity Policy</Link> 
                    | <Link to="sitemap">Sitemap</Link> 
                    | <Link to="about">About</Link>
                </p>
            </Foot>
        </>
    );
}

export default Footer;