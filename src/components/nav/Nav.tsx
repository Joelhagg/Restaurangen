import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

export function Nav() {


    return (
        <>
            <nav>
                <h1>MaJoJo</h1>
                <h3>Nav</h3>
                <ul>
                    <li>
                        <Link to="/">Hem</Link>
                    </li>
                    <li>
                        <Link to="/booking">Booking</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>

                </ul>
            </nav>

        </>)
}