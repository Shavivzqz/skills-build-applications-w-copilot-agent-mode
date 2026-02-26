
import logo from './logo.svg';
import './App.css';
import { NavLink, Routes, Route } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';

function App() {
  return (
    <div>
      {/* Bootstrap Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center" href="/">
            <img src={logo} alt="OctoFit Logo" width="40" height="40" className="me-2" style={{background: 'white', borderRadius: '50%'}} />
            <span className="fw-bold">OctoFit Tracker</span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'} to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'} to="/activities">Activities</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'} to="/teams">Teams</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'} to="/leaderboard">Leaderboard</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'} to="/workouts">Workouts</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-5">
        <Routes>
          <Route path="/" element={
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="card shadow">
                  <div className="card-body text-center">
                    <h1 className="display-4 mb-3">Welcome to OctoFit Tracker</h1>
                    <p className="lead mb-4">Track your fitness, join teams, compete on the leaderboard, and get personalized workout suggestions!</p>
                    <a href="/activities" className="btn btn-primary btn-lg">Get Started</a>
                  </div>
                </div>
              </div>
            </div>
          } />
          <Route path="/activities" element={<Activities />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
