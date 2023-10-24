import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import * as trailsAPI from '../../utilities/trails-api';
import NewTrail from '../../components/NewTrailForm/NewTrailForm';
import './BikePage.css'

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
    <div className="container">
      <h1>Biking Trails</h1>
      <NewTrail initialState={initialState} />
      <div className="row trail-container">
        {trailItems.map(trailItem => (
          <div key={trailItem._id} className="col-lg-4 col-md-6 mb-4">
            <Link to={`/trail/${trailItem._id}`} className="card-link">
              <div className="card">
                <div className="card-body">
                  <h2 className="card-title">{trailItem.name}</h2>
                  <p className="card-text">Difficulty: {trailItem.difficulty}</p>
                  <p className="card-text">Mileage: {trailItem.mileage}</p>
                  <p className="card-text">Style: {trailItem.trailStyle}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
