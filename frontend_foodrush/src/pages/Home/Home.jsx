import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import { bannerAssets, aboutfeature, cardData } from '../../assets/dummydata';
import Banner from '../../components/Banner/Banner';
import SpecialOffer from '../../components/SpecialOffer/SpecialOffer';

const Home = () => {
  return (
    <>
      <Navbar/>
      <Banner/>
      <SpecialOffer />
    </>
  )
}

export default Home
