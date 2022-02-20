
import AppWorking from '../../Components/AppWorking';
import Benefits from '../../Components/Benefits';
import LearnMore from '../../Components/LearnMore';
import MainPortion from '../../Components/MainPortion';
import WebNavbar from '../../Components/Navbar';
import Reviews from '../../Components/Reviews';
import InTouch from '../../Components/InTouch';
import Footer from '../../Components/Footer';
import LoadingPage from '../Loading';
import { useState } from 'react';
// import './index.css';

function Home() {

    const [loading,setLoading]=useState(true)
    setTimeout(() => {
        setLoading(false)
    }, 1000);

    return <>
        {
            loading?<LoadingPage/>:<>
            <WebNavbar />
            <MainPortion />
            <Reviews />
            <LearnMore />
            <AppWorking />
            <Benefits />
            <InTouch />
            <Footer/>
            
            </>

        }

    </>
}

export default Home;
