import React from 'react'
import MainHeader from '../components/Home/MainHeader'
import TechnologiesCard from '../components/TechnologiesCard/TechnologiesCard'
import WeUseCard from '../components/TechnologiesCard/WeUseCard/WeUseCard'
import Slider from '../containers/Slider'
import ourPartners from  './../assets/img/ourPartners.jpg';
import FeedBack from "../components/Home/FeedBack/FeedBack";

const Home = () => {
    return (
        <div className="home">
            <MainHeader/>
            <Slider/>
            <FeedBack/>
        </div>
    )
}

export default Home
