import { Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import NavBar from './components/NavBar';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  return (
    <div className="w-full h-full bg-gradient-to-b from-purple-500 to-pink-500">
      <NavBar />
      <main>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/About" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </main>
      <Footer />
    </div >
  );
}

export default App;
