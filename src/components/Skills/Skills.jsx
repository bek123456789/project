import React from 'react';
import "./Skills.scss";
import img from '../../assets/adope.png';
import img1 from '../../assets/ai.png';
import img2 from '../../assets/ae.png';
import img3 from '../../assets/figma.png';
import img11 from '../../assets/adoperate.png';
import img111 from '../../assets/airate.png';
import img22 from '../../assets/adoperate.png';
import img33 from '../../assets/adoperate.png';

const Skills = () => {
    const imgs = [
        { id: 1, img: img, name: "Adobe Photoshop", rating: img11 },
        { id: 2, img: img1, name: "Adobe Illustrator", rating: img111 },
        { id: 3, img: img2, name: "Adobe After Effects", rating: img22 },
        { id: 4, img: img3, name: "Figma", rating: img33 },
    ];

    return (
        <div className="skill">
            <div className="container">
                <div className="skill__wrapper">
                    <div className="skill__title">
                        <h2 className='skill__h2'>Skills</h2>
                        <p className='skill__first'>I work in such programs as</p>
                    </div>
                    <div className="skill__img">
                        {imgs.map((v) => (
                            <div key={v.id} className="skill__card">
                                <img src={v.img} alt={v.name} />
                                <p >{v.name}</p>
                                <img className='skill__rate' src={v.rating} alt={`${v.name} rating`} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
