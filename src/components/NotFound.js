import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
    <div style={{width:'100vw',textAlign:'center'}}>
        <h1>404 - Not Found!</h1>
        <Link to="/">Go Home</Link>
    </div>
);

export default NotFound;