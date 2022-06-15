import { useState } from 'react'
import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/r.png'
import './index.scss'

const Home = () => {
    const [letterClass] = useState('text-animate')
    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <img
                            src={LogoTitle}
                            alt="Web application. Business solution. IT consulting"
                        />
                        <span className={letterClass}> Company</span>

                    </h1>
                    <h2>Web application. Business solution. IT consulting.</h2>
                    <Link to="/contact" className="flat-button">
                        CONTACT ME
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Home
