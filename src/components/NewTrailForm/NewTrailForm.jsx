import { useState, useEffect } from 'react';
import * as trailsAPI from '../../utilities/trails-api';
import TrailDetailsPage from '../../pages/TrailDetailsPage/TrailDetailsPage';

export default function NewTrail({initialState, trailItem}){
  const [showForm, setShowForm] = useState(false)
  const [message, setMessage] = useState('');
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
        setTrail(initialState);
        } catch (error) {
        setMessage('Error creating trail.');
    }
}
    const handleShow = () => {
        setShowForm(true)
    }

    return(
        <>
        {!showForm ? ( 
        <button onClick={handleShow}>Add a new trail</button>
        ) : (
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
      )}
      </>
    )
}