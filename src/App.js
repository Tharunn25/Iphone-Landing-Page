import BatterySection from './sections/BatterySection';
import CameraSection from './sections/CameraSection';
import ColorSection from './sections/ColorSection';
import DesignSections from './sections/DesignSection';
import DisplaySection from './sections/DisplaySection';
import HeroSection from './sections/HeroSection';
import { PhoneModel } from './sections/PhoneModel';
import ProcessorSection from './sections/ProcessorSection';
import Quote from './sections/Quote';
import { GlobalStyle } from './styles/GlobalStyles';

function App() {
  return (
   <>
    <GlobalStyle/>
    <Quote/>
    <HeroSection/>
    <PhoneModel/>
    <DesignSections />
    <DisplaySection/>
    <ProcessorSection/>
    <BatterySection/>
    <ColorSection/>
    <CameraSection/>
   </>
  );
}

export default App;
