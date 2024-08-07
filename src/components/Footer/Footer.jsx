import React from 'react'
import "./Footer.scss"
const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <div className="footer__contact">
                        <h2 className='footer__h2'>Contacts</h2>
                        <p className='footer__p'>Want to know more or just chat? You are welcome!</p>
                        <button className='footer__button'>Send message</button>
                    </div>
                    <div className='footer__icon'>
                        <img src="./src/assets/in.png" alt="" />
                        <img src="./src/assets/instagram.png" alt="" />
                        <img src="./src/assets/be.png" alt="" />
                        <img src="./src/assets/ball.png" alt="" />

                    </div>
                    <div className='footer__last'>
                    <p>Like me on LinkedIn, Instagram, Behance, Dribble</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer


