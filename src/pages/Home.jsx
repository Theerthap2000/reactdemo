import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../assets/_IDNIGHT.jpg'
const Home = () => {
    return (
        <>
            <div className="main">
                <div className="image">
                    <img src={img1} />

                </div>
                <div className="a">Permision</div>
                <div className="b">Help</div>
                <div className="c">Download</div>
                <div className="d">Sign up</div>
                <div className="e">Login</div>
            </div>
        </>
    )
}

export default Home