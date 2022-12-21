import "./App.css";
import Header from '../src/Components/Header/Header.js';
import Banner from '../src/Components/Banner/Banner.js';
import Sections from './Components/Sections/Sections.js';
import Promotion from './Components/Promotion/Promotion.js';
import Offers from './Components/Offers/Offers.js';
import Menu from './Components/Menu/Menu.js';

function App() {

  return <div className="App">
    <div className="parent">
      <Header />
      <div className="height"></div>
      <Banner />
      <div className="height"></div>
      <Sections />
      <div className="height"></div>
      <Promotion />
      <div className="height"></div>
      <Offers />
      <div className="height"></div>
      {/* <Menu /> */}
      <div className="height"></div>
    </div>
  </div>;
}

export default App;
