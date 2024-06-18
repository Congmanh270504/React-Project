import './App.css';
import MainContent from './main-content.jsx';
import Navbar from './Navbar.jsx';
function App() {
  return (
    <>
      <div className='content'>
        <Navbar />
        <MainContent />
      </div>
    </>
  );
}

export default App;
