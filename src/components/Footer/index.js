import React from 'react'
import styled from 'styled-components'

const Foot = styled.footer`
    background: #fff;
    padding: 10px;
    position: absolute;
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
                    Copyright 2019 - 2020 Text Convert | 
                    Created by <a href="">@noguerajulioces </a> 
                    | <a href="">Privacity Policy </a>
                    | <a href="">Sitemap </a> 
                    | <a href="">About </a>
                </p>
            </Foot>
        </>
    );
}

export default Footer;