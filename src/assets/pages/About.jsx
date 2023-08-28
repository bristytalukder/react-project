import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const About = () => {
    return (
        <>
            <Outlet />
            <h1>This is Aboutthuihjni </h1>
            <Link to="nav">nav</Link>

        </>
    )
}

export default About