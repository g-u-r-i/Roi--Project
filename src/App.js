
import './App.css';
import TimeFrame from './Timeframe';
import EPY from './Epy';
import ROI from './Header';
import Footer from './footer';
import "./css/Header.css";
import './css/Timeframe.css'
import './css/Epy.css';
import './css/Footer.css';


function App() {
  return (
<div id='container'>
<ROI/>
  <TimeFrame />
  <EPY/>
  <Footer/>
</div>
  );
}

export default App;
