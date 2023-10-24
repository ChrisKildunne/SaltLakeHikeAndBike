import { useEffect, useState } from 'react';
import * as trailsAPI from '../../utilities/trails-api';
import { useParams } from 'react-router-dom';
import ReviewForm from '../../components/ReviewForm/ReviewForm';

export default function TrailDetailsPage({ user }) {
  const { trailId, source } = useParams();
  const [trailDetails, setTrailDetails] = useState(null);

  useEffect(() => {
    async function getTrailDetails() {
      const trail = await trailsAPI.getTrailById(trailId);
      setTrailDetails(trail);
    }
    getTrailDetails();
  }, [trailId]);

  if (trailDetails) {
    return (
      <>
        <h1>{trailDetails.name} Details</h1>
        <p>{trailDetails.description}</p>
        <p>{trailDetails.mileage}</p>
        <p>{trailDetails.trailStyle}</p>
        <p>{trailDetails.difficulty}</p>
        <p>{trailDetails._id}</p>

        <p>This is from the nearby trails page</p>

        <ReviewForm trailId={trailId} user={user} />
      </>
    );
  } else {
    return <p>Loading trail details...</p>;
  }
}
