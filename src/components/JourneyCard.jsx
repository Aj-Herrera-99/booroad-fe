import { Link } from "react-router-dom";

function JourneyCard({ journey }) {
    const { id, destination, initial_date, end_date } = journey;
    return (
        <Link
            to={`/journey/${id}`}
            className="journey-card p-2 border rounded-lg"
        >
            <ul>
                <li>Destination: {destination}</li>
                <li>Departure: {initial_date}</li>
                <li>Arrival: {end_date}</li>
            </ul>
        </Link>
    );
}

export default JourneyCard;
