import './App.css';
import MainContent from './main-content.jsx';
import Navbar from './Navbar.jsx';
import Search from './search.jsx';
import Logo from './logo.jsx';
import logoImage from './logo.jpg';
function App() {
  return (
    <>
      <div className='content'>
        <div className='left-content'>
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
