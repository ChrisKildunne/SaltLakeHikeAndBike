import { useState } from 'react';
import axios from 'axios'; 

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

  return (
    <div>
      <h2>Nearby Trails</h2>
      <button onClick={fetchNearbyTrails} >
        search
            </button>
            <div>
        {nearbyTrails.map(trail => (
          <li key={trail.id}> {/* Use the 'id' as the unique key */}
            <h2>{trail.name}</h2>
            <p>{trail.description}</p>
            {/* Add other trail information here */}
          </li>
        ))}
      </div>

    </div>
  );
}
