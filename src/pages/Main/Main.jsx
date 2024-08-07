import React from 'react'
import Header from '../../components/Header/Header'
import About from '../../components/About/About'
import Skills from '../../components/Skills/Skills'
import Portfolio from '../../components/Portfolio/Portfolio'
import Footer from '../../components/Footer/Footer'
import MainComp from '../../components/MainComp/MainComp'

const Main = () => {
    return (
        <>
            <Header />
            <MainComp />
            <About />
            <Skills />
            <Portfolio />
            <Footer />
        </>
    )
}

export default Main