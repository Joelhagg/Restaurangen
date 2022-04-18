import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';


export function Footer () {
    return(<>
        <h1>Footer works!</h1>
        <Link to="/admin">Admin</Link>
    </>)
}