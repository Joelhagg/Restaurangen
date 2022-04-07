import React from 'react';
import { Link } from 'react-router-dom';


export function Nav () {

    
    return (
    <>
        <nav> 
            <h1>MaJoJo</h1>
            <ul>
                <li> 
                    <Link to ="/">Hem</Link>
                </li>
                <li> 
                    <Link to ="/booking">Booking</Link>
                </li>
                <li> 
                    <Link to ="/admin">Admin</Link>
                </li>
                <li></li>
            </ul>
        </nav>

    </>)
}