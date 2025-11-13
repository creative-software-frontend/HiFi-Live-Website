import React from 'react';
import HeroSection from '../../Components/HeroSection/HeroSection';
import GameSection from '../../Components/GameSection/GameSection';
import TextSection from '../../Components/TextSection/TextSection';
import GlobalTeam from '../../Components/GlobalTeam/GlobalTeam';

const Home = () => {
  return (
    <>
      <HeroSection></HeroSection>
      <GameSection></GameSection>
      <TextSection></TextSection>
      <GlobalTeam></GlobalTeam>
    </>
  );
};

export default Home;
