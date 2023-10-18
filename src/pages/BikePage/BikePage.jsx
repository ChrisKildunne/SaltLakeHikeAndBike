import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import * as trailsAPI from '../../utilities/trails-api';
import NewTrail from '../../components/NewTrailForm/NewTrailForm';

export default function BikePage() {
  const [trailItems, setTrailItems] = useState([]);
  const initialState = {
    name: '',
    difficulty: '',
    mileage: 0,
    trailStyle: '',
    description: '',
  };

  useEffect(() => {
    async function fetchTrail() {
      try {
        const trails = await trailsAPI.getAll();
        setTrailItems(trails);
      } catch (error) {
        console.error(error);
      }
    }

    fetchTrail();
  }, []);


  return (
    <>
      <h1>Biking Trails</h1>
      <NewTrail initialState={initialState} />
      <ul>
        {trailItems.map(trailItem => (
          <li key={trailItem._id}>
            <Link to={`/trail/${trailItem._id}`} className="card-link">
              <h2>{trailItem.name}</h2>
              <p>Difficulty: {trailItem.difficulty}</p>
              <p>Mileage: {trailItem.mileage}</p>
              <p>Style: {trailItem.trailStyle}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
