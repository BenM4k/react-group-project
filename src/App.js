import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Header from './component/Header';
import './App.css';
import Rockets from './routes/Rockets';
import Missions from './routes/Missions';
import Profile from './routes/Profile';
import { getRockets } from './redux/slices/rocketSlice/rocketSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);

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
