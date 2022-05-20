import './HomePage.css'
import React from "react";
import { Blogs, Footer1, Header } from '../../Containers';
import { MultiItemCarousel, SpecialOffers } from '../../Components';
import WhyUs from '../../Components/WhyUs/WhyUs';
import Card1 from './Card1/Card1';
import NavBar1 from '../../Components/NavBar/NavBar1';


const HomePage = () => (
    <>
        <NavBar1 />
        <Header />
        <br></br>
        <MultiItemCarousel />
        <SpecialOffers />
        <Card1/>
        <Blogs />
        <Footer1 />

    </>
);

export default HomePage;