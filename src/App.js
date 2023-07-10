import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Angkatan from './pages/Angkatan';
import Prestation from './pages/Prestation';
import Graduation from './pages/Graduation';

const App = () => {
  return (
      <BrowserRouter>
        <Navbar>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/angkatan" element={<Angkatan />} />
            <Route path="/graduation" element={<Graduation />} />
            <Route path="/prestasion" element={<Prestation />} />
          </Routes>
        </Navbar>
      </BrowserRouter>
  );
}

export default App;
