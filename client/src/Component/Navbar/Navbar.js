import React from 'react';
import './Navbar.css';

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">BBA(CA)</div>
            <ul className="nav-links">
            <li><a href="/">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Courses</a></li>
                <li><a href="#">Faculty</a></li>
                <li><a href="#">Admissions</a></li>
                <li><a href="#" className="apply-btn">Apply Now</a></li>
            </ul>
        </nav>
    );
}