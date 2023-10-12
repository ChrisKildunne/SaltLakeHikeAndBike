import { useState, useEffect } from 'react';
import * as trailsAPI from '../../utilities/trails-api';
import NewTrail from '../../components/NewTrailForm/NewTrailForm'

export default function BikePage() {
  // create a biketrail creation form
  const [trailItems, setTrailItems] = useState([])
  const initialState = {
    name: '',
    difficulty: '',
    mileage: 0,  
    trailStyle: '',
    description: ''
  };

    useEffect(()=>{
      async function fetchTrail(){
        const trails = await trailsAPI.getAll()
        setTrailItems(trails)
      }
      fetchTrail()
    },[])
  return (
    <>
      <h1>Biking Trails</h1>
      <NewTrail  initialState={initialState} />
      <ul>
  {trailItems.map(trailItem => (
    <li key={trailItem._id}>
      <h2>{trailItem.name}</h2>
      <p>Difficulty: {trailItem.difficulty}</p>
      <p>Mileage: {trailItem.mileage}</p>
      <p>Style: {trailItem.trailStyle}</p>
      <p>Description: {trailItem.description}</p>
    </li>
  ))}
</ul>

    </>
);

}
