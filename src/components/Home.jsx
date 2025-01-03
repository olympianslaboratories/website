import React from 'react';

import Banner from './Banner';
import Products from './HomeProducts';
import Contact from './HomeContact';
import HomeAbout from './HomeAbout';

const Home = () => {
  return (
    <>
    <Banner/>
    <HomeAbout/>
    <Products/>
    <Contact/>
    </>
  );
};

export default Home;