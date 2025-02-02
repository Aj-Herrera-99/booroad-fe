import { Link } from "react-router-dom";
const apiUrl = import.meta.env.VITE_API_URL;

function JourneyCard({ journey }) {
    const { id, destination, initial_date, end_date } = journey;
    return (
        <div className="relative p-3 border rounded-lg overflow-hidden min-h-[125px] flex">
            <div
                className="absolute inset-0 -z-20"
                style={{
                    backgroundImage: `url(${apiUrl}${journey?.image_path})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "bottom",
                }}
            ></div>
            <div className="absolute inset-0 bg-black/65 -z-10"></div>
            <Link
                to={`/journey/${id}`}
                className="flex flex-col justify-between text-white journey-card"
            >
                <span>Destination: {destination}</span>
                <span>Departure: {initial_date}</span>
                <span>Arrival: {end_date}</span>
            </Link>
        </div>
    );
}

export default JourneyCard;
