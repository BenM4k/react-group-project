import { Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import './App.css';
import Rockets from './routes/Rockets';
import Missions from './routes/Missions';
import Profile from './routes/Profile';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
