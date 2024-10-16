import './App.css';

import Header from './components/Header';
import FirstContent from './components/FirstContent';
import SecondSection from './components/SecondContent';
import SuperCharge from './components/SuperCharge';
import ClipboardIos from './components/ClipboardIos';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <FirstContent />
      <SecondSection />
      <SuperCharge />
      <ClipboardIos />
      <Footer />
    </div>
  );
}

export default App;
