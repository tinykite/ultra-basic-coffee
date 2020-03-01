import React from 'react';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Interstitial from './components/Interstitial';
import Aeropress from './components/Aeropress';
import KalitaWave from './components/KalitaWave';
import FrenchPress from './components/FrenchPress';
import Strength from './components/Strength';
import Time from './components/Time';
import Grind from './components/Grind';

function App() {
  return (
    <>
      <Hero />
      <Introduction />
      <Interstitial title="Brew Methods" icon="Tools" />
      <Aeropress />
      <KalitaWave />
      <FrenchPress />
      <Interstitial title="Basic Technique" icon="Technique" />
      <Strength />
      <Time />
      <Grind />
    </>
  );
}

export default App;
