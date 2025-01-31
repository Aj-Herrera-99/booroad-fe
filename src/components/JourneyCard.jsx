import { Link } from "react-router-dom";

function JourneyCard({ id = 0 }) {
    return (
        <Link
            to={`/journey/${id}`}
            className="bg-green-400 p-2 border rounded-lg"
        >
            JourneyCard
        </Link>
    );
}

export default JourneyCard;
