import { useState } from 'react';
import * as trailsAPI from '../../utilities/trails-api';

export default function BikePage() {
  const [message, setMessage] = useState('');
  const initialState = {
    name: '',
    difficulty: '',
    mileage: 0,  // default to 0 for a number
    trailStyle: '',
    description: ''
  };
  const [trail, setTrail] = useState(initialState);

  const handleChange = (e) => {
    const value = e.target.type === 'number' ? parseFloat(e.target.value) : e.target.value;
    setTrail({
      ...trail,
      [e.target.name]: value
    });
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const newTrail = await trailsAPI.addNew(trail);
      setMessage('Success');
      setTrail(initialState);  // Reset form
    } catch (error) {
      setMessage('Error creating trail.');
    }
  }

  return (
    <>
      <h1>Biking Trails</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input type="text" name="name" value={trail.name} onChange={handleChange} />
          </label>
        </div>
        <div>
          <label>
            Difficulty:
            <select name="difficulty" value={trail.difficulty} onChange={handleChange}>
              <option value="">Select Difficulty</option>
              <option value="Easy">Easy</option>
              <option value="Moderate">Moderate</option>
              <option value="Hard">Hard</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Mileage:
            <input type="number" name="mileage" value={trail.mileage} onChange={handleChange} />
          </label>
        </div>
        <div>
          <label>
            Trail Style:
            <select name="trailStyle" value={trail.trailStyle} onChange={handleChange}>
              <option value="">Select Trail Style</option>
              <option value="Tech">Tech</option>
              <option value="Flow">Flow</option>
              <option value="Jump">Jump</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Description:
            <input type="text" name="description" value={trail.description} onChange={handleChange} />
          </label>
        </div>
        <button type="submit">Create Trail</button>
      </form>
      {message && <p>{message}</p>}
    </>
);

}
