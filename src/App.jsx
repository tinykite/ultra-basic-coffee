import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Interstitial from './components/Interstitial';
import Aeropress from './components/Aeropress';
import KalitaWave from './components/KalitaWave';
import FrenchPress from './components/FrenchPress';
import Strength from './components/Strength';
import Time from './components/Time';
import Grind from './components/Grind';
import Tips from './components/Tips';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Hero />
      <Introduction />
      <Interstitial
        title="Brew Methods"
        icon="Tools"
        topWaveBg="#000000"
        bottomWaveBg="#19224F"
      />
      <Aeropress />
      <KalitaWave />
      <FrenchPress />
      <Interstitial
        title="Basic Technique"
        icon="Technique"
        topWaveBg="#000000"
        bottomWaveBg="#000000"
      />
      <Strength />
      <Grind />
      <Time />
      <Interstitial
        title="Tips & Resources"
        icon="Tips"
        topWaveBg="#394419"
        bottomWaveBg="#19224F"
      />
      <Tips />
      <Footer topWaveBg="#19224F" />
    </>
  );
}

export default App;
