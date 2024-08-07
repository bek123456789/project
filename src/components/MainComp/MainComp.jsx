import React from 'react'
import './Main.scss'
import img from '../../assets/img.png'
const MainComp = () => {
    return (
        <div className="main">
            <div className="container">
                <div className="main__wrapper">
                    <div className="main__content">
                        <h2>Denis <br /> Novik</h2>
                        <p>UX | UI designer <br /> 24 years old, Minsk</p>
                        <p className='main__lang'> <span>RU</span> | ENG</p>
                    </div>
                    <div className="main__photo">
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainComp
// <div className='main_div'>
//     <div className="denis_div">
//

//     </div>
//     <div className="img_for">
//         <img src="./src/assets/img.png" alt="" />
//     </div>
// </div>