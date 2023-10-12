import { useState } from 'react';
import * as trailsAPI from '../../utilities/trails-api';

export default function BikePage() {
  
  const [message, setMessage] = useState('');

  async function createTrail() {
    try {
      const trail = await trailsAPI.addNew(); // You'd probably want to send some data here.
      setMessage('Trail successfully created!');
    } catch (error) {
      setMessage('Error creating trail.');
    }
  }

  return (
    <>
      <h1>Biking Trails</h1>
      <button onClick={createTrail}>Create Trail</button>
      {message && <p>{message}</p>}
    </>
  );
}
