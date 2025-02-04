import { Link } from "react-router-dom";
const apiUrl = import.meta.env.VITE_API_URL;

function JourneyCard({ journey }) {
    const { id, destination, initial_date, end_date } = journey;

    return (
        <div className="relative p-3 border rounded-lg overflow-hidden h-[125px] lg:h-[200px] flex journey-card">
            <div
                className="absolute inset-0 -z-20 transition-all"
                style={{
                    backgroundImage: `url(${apiUrl}${journey?.image_path})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "bottom",
                }}
            ></div>
            <div className="absolute inset-0 bg-black/65 -z-10 overlay transition-all"></div>
            <Link
                to={`/journey/${id}`}
                className="flex w-full flex-col justify-between text-white"
            >
                <span>Destinatione: {destination}</span>
                <span>Partenza: {initial_date}</span>
                <span>Arrivo: {end_date}</span>
            </Link>
        </div>
    );
}

export default JourneyCard;
