import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import img1 from '../assets/abc.jpg'
const Home = () => {
    return (
        <>
            <div className="main">
                <div className="nav">
                    <div className="image">
                        <img src={img1} />

                    </div>
                    <div className="sp">Spotify'</div>
                    <div className="a">Permision</div>
                    <div className="b">Help</div>
                    <div className="c">Download</div>
                    <div className="f">|</div>
                    <Link to={"/signup"}>
                        <div className="d">Sign up</div>
                    </Link>
                    <Link to={"/login"}>
                        <div className="e">Login</div>
                    </Link>
                </div >
                <div className='container'>

                    <div className="one">Music for everyone.</div>
                    <div className="two">Millions of songs. No credit card needed.</div>
                    <div className="button">
                        <button>GET SPOTIFY FREE</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home