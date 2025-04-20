import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import HowToGetStarted from './HowToGetStarted';
import RaffleSlider from './Raffles2';
import Raffles from './Raffles';
import Roadmap from './Roadmap';
import FAQ from './FAQ';
import Footer from './Footer';
import Counter from './Counter';
import TaskManager from './complexEg';


const MainPage: React.FC = () => {
    return (
        <>
            <Navbar />
            <Header />
            <HowToGetStarted />
            {/* <RaffleSlider /> */}
            {/* <Raffles /> */}
            <Roadmap />
            <FAQ />
            <Footer />
            {/* <Counter />
            <TaskManager /> */}
        </>
    );
};

export default MainPage;

// localStorage.removeItem('isAuthenticated');