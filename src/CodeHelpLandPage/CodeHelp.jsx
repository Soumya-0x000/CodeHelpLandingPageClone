import React from 'react'
import Navbar from './components/Navbar/Navbar' 
import Banner1 from './components/MainContent/Banner-1'
import Banner2 from './components/MainContent/Banner-2'
import Banner3 from './components/MainContent/Banner-3'
import Banner4 from './components/MainContent/Banner-4'
import Banner5 from './components/MainContent/Banner-5'
import Banner6 from './components/MainContent/Banner-6'
import Banner7 from './components/MainContent/Banner-7'
import Banner8 from './components/MainContent/Banner-8'
import Footer from './components/MainContent/Footer'
import Float_QnA from './components/FloatingButton/Float_QnA'
import Float_scroll from './components/FloatingButton/Float_scroll'

const CodeHelp = () => {
  return (
    <>
        <Navbar/>
        <div className='absolute top-[5.5rem] w-full'>
            <Banner1/>
            <Banner2/>
            <Banner3/>
            <Banner4/>
            {/* <Banner5/> */}
            <Banner6/>
            <Banner7/>
            <Banner8/>
            <Footer/>
            <Float_QnA/>
            <Float_scroll/>
        </div>
    </>
  )
}

export default CodeHelp