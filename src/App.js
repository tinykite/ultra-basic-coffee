import React from 'react';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Interstitial from './components/Interstitial';
import Aeropress from './components/Aeropress';
import KalitaWave from './components/KalitaWave';
import FrenchPress from './components/FrenchPress';

function App() {
  return (
    <>
      <Hero />
      <Introduction />
      <Interstitial title="Brew Methods" icon="Tools" />
      <Aeropress
        title="Aeropress"
        fontStack="Barbour"
        background="#19224f"
      />
      <KalitaWave />
      <FrenchPress />
      <Interstitial title="Technique" icon="Technique" />
    </>
  );
}

export default App;
