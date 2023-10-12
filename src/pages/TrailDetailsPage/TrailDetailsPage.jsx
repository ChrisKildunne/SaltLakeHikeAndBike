import { useEffect , useState} from 'react'
import * as trailsAPI from '../../utilities/trails-api'
import { useParams } from 'react-router-dom'

export default function TrailDetailsPage(){
    const { trailId } = useParams()
    const [trailDetails, setTrailDetails] =useState(null)
    useEffect(() => {
        async function getTrailDetails(){
            const trail = await trailsAPI.getTrailById(trailId)
            setTrailDetails(trail)
        }
        getTrailDetails()
    }, [trailId])

    return(
   <>
        <h1>{trailDetails.name} Details</h1>
       <p>{trailDetails.description}</p>
       <p>{trailDetails.mileage}</p>
       <p>{trailDetails.trailStyle}</p>
       <p>{trailDetails.difficulty}</p>
   </>
    )
}