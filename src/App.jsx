import './App.css';
import MainContent from './main-content.jsx';
import Navbar from './left-content/Navbar.jsx';
import Search from './left-content/search.jsx';
import Logo from './left-content/logo.jsx';
import logoImage from './logo.jpg';
import HideShow from './left-content/hide.jsx';
function App() {
  return (
    <>
      <div className='content'>
        <div className='left-content'>
          <HideShow />
          <Search />
          <Navbar />
          <Logo src={logoImage} />
          <p>Create by Thomas 6/2024</p>
        </div>
        <MainContent />
      </div>
    </>
  );
}

export default App;
