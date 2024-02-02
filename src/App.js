import React, { useState } from 'react';
import Hero from "./components/Hero";
import Header from "./components/Header";
import Wtf from "./components/Wtf";
import Watch from "./components/Watch";
import Domination from "./components/Domination";
import Beware from "./components/Beware";
import Howto from "./components/Howto";
import Joinus from "./components/Joinus";
import Footer from "./components/Footer";
import Space from "./components/Space";


import audio from './assets/audio.mp3';

const SplashPage = ({ onContinueClick }) => {
  const [audioPlayed, setAudioPlayed] = useState(false);

  const handleClick = () => {
    if (!audioPlayed) {
      const audioElement = new Audio(audio);
      audioElement.play().then(() => {
        setAudioPlayed(true);
        // Call the provided onContinueClick callback after audio is played
        onContinueClick();
      });
    }
  };

  return (
    <div className="heroback flex flex-col items-center justify-center h-screen">

      <div
        className="animate-pulse bg-[#B8FF00] stretch text-2xl lg:text-3xl text-black font-bold py-2 px-4  cursor-pointer
        h-4d0 rounded-xl border-white border-2 flex items-center justify-center align-middle"
        onClick={handleClick}
      >
        {audioPlayed ? 'CLICK TO FLUSH' : 'CLICK TO FLUSH'}
      </div>
    </div>
  );
};

const MainSite = () => {
  return (
    <div className="relative overflow-clip">
      <Header />
      <Hero />
      <Space />
      <Wtf />
      <Watch />
      <Domination />
      <Beware />
      <Howto />
      <Joinus />
      <Footer />
    </div>
  );
};


const App = () => {
  const [showIntro, setShowIntro] = React.useState(true);

  const handleContinueClick = () => {
    setShowIntro(false);
  };

  return (
    <div>
      {showIntro ? (
        <SplashPage onContinueClick={handleContinueClick} />
      ) : (
        <MainSite />
      )}
    </div>
  );
};

export default App;
