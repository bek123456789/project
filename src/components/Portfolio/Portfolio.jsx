import React from 'react';
import "./Portfolio.scss";
import img1111 from '../../assets/fashion.png';
import img2222 from '../../assets/reebok_web.png';
import img3333 from '../../assets/reebook.png';

const Portfolio = () => {
    const brands = [
        { id: 1, img: img1111, name: "Portfolio", description: "Online fashion store - Homepage" },
        { id: 2, img: img2222, name: "Adobe Illustrator", description: "Reebok Store - Concept" },
        { id: 3, img: img3333, name: "Adobe After Effects", description: "Braun Landing Page - Concept" },
    ];

    return (
        <div className="portfolio">
            <div className="container">
                <div className="portfolio__wrapper">
                    <div className="portfolio__first">
                        {brands.map((v) => (
                            <div key={v.id}>
                                <p className='portfolio__firstp'>{v.name}</p>
                                <img className='portfolio__img' src={v.img} alt="" />
                                <p className='portfolio__secondp' >{v.description}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Portfolio;
