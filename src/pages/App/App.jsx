import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import AuthPage from '../AuthPage/AuthPage';
import HikePage from '../HikePage/HikePage';
import TrailDetailsPage from '../TrailDetailsPage/TrailDetailsPage';
import BikePage from '../BikePage/BikePage';
import NavBar from '../../components/NavBar/NavBar';
import NearbyTrailsPage from '../../components/NearbyTrails/NearbyTrails';
import NearbyTrailDetails from '../NearbyTrailDetails/NearbyTrailDetails';
import { getUser } from '../../utilities/users-service';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      <div className='BackgroundImage'>

    { user ?
    <>
      <NavBar user={ user } setUser={ setUser }/>
      <Routes>
          <Route path='/hike' element={ <HikePage /> } />
          <Route path='/trail' element={ <BikePage /> } />
          <Route path='/trail/:trailId' element={ <TrailDetailsPage user={user} /> } />
          <Route path="/nearby" element={<NearbyTrailsPage />} />
          <Route path="/nearby/:apiId" element={<NearbyTrailDetails />} />
      </Routes>
      </>
    :
    <AuthPage setUser={ setUser }  />
  }
      </div>
    </main>
  );
}


