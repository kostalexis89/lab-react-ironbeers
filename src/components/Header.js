import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className="header">
            <Link to="/">
                <h3>Go To Home</h3>
            </Link>
        </div>
    )
}
