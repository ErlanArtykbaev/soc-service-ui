import React from 'react'
import MainHeader from '../components/Home/MainHeader'
import Slider from '../containers/Slider'
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
