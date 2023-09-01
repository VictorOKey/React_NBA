import { Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Players from './components/Players';
import Player from './components/Player';
import TeamsList from './components/TeamsList';
import Teams from './components/Teams';
import './App.css';



function App() {
  return (
    <div className="App">

      <Home />

      <Navigation />

      <Routes>
        <Route path="/players" element={<Players />} />
        <Route path="/players/:playerId/*" element={<Player />} />
        <Route path="/teams" element={<TeamsList />} />
        <Route path="/teams/:teamsId/*" element={<Teams />} />
      </Routes>


    </div>
  );
}

export default App;
