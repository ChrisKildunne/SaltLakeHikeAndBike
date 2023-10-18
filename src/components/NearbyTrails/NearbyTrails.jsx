import { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios'; 
import TrailDetailsPage from '../../pages/TrailDetailsPage/TrailDetailsPage';

export default function NearbyTrailsPage() {
  const [nearbyTrails, setNearbyTrails] = useState([]);

  const latitude = 38; 
  const longitude = -106; 

  const fetchNearbyTrails = async () => {

    try {
      const options = {
        method: 'GET',
        url: 'https://trailapi-trailapi.p.rapidapi.com/trails/explore/',
        params: {
          lat: latitude,
          lon: longitude,
          radius: 100,
        },
        headers: {
          'X-RapidAPI-Key': 'cde7341490mshe627ae45b8dcef1p1bcd7fjsn56ce330ee3cc',
          'X-RapidAPI-Host': 'trailapi-trailapi.p.rapidapi.com',
        },
      };

      const response = await axios.request(options);
      const trails = response.data.data;
      console.log(trails)
      setNearbyTrails(trails);
      console.log(nearbyTrails); // Logging the fetched trails
    } catch (error) {
      console.error(error);
    } 
  };
<TrailDetailsPage nearbyTrails={nearbyTrails} />
  return (
    <div>
      <h2>Nearby Trails</h2>
      <button onClick={fetchNearbyTrails} >
        search
            </button>
            <ul>
        {nearbyTrails.map(trail => (
          <li key={trail.id}>
            <Link to={`/trail/${trail.id}`} className="card-link">
            <h1>{trail.id},</h1>
              <h2>{trail.name}</h2>
          
            </Link>
          </li>
        ))}
      </ul>
      </div>
  );
}
