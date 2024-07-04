import './App.css';
import './index.css';
import MainContent from './right-content/main-content.jsx';
import Navbar from './left-content/Navbar.jsx';
function App() {
  return (
    <>
      <div className='container'>
        <div className='left-container'>
          <Navbar />
        </div>
        <div className='right-container'>
          <MainContent />
        </div>
      </div>
    </>
  );
}

export default App;
