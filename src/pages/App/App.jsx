import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import AuthPage from '../AuthPage/AuthPage';
import HikePage from '../HikePage/HikePage';
import TrailDetailsPage from '../TrailDetailsPage/TrailDetailsPage';
import BikePage from '../BikePage/BikePage';
import NavBar from '../../components/NavBar/NavBar';
import { getUser } from '../../utilities/users-service';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
    { user ?
    <>
      <NavBar user={ user } setUser={ setUser }/>
      <Routes>
          <Route path='/hike' element={ <HikePage /> } />
          <Route path='/bike' element={ <BikePage /> } />
          <Route path='/bike/:trailId' element={ <TrailDetailsPage /> } />
      </Routes>
      </>
    :
    <AuthPage setUser={ setUser }  />
    }
    </main>
  );
}


