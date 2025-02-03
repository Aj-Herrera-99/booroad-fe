import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ParticipantCard } from "../components/ParticipantCard";
const apiJourneys = import.meta.env.VITE_API_JOURNEYS;
const apiUrl = import.meta.env.VITE_API_URL;

function DetailJourney() {
    const [journey, setJourney] = useState({});
    const [participants, setParticipants] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const { id } = useParams();

    useEffect(() => {
        setIsLoading(true);
        axios
            .get(`${apiJourneys}/${id}`)
            .then((res) => {
                setJourney(res.data.journey);
                setParticipants(res.data.participants);
            })
            .catch((err) => console.error(err))
            .finally(() => setIsLoading(false));
    }, []);

    if (isLoading) return <div>is loading...</div>;

    return (
        <>
            <section className="journey-details my-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                    <div className="sm:w-1/2">
                        <h2 className="text-2xl sm:text-4xl sm:mb-6 font-semibold">
                            {journey.destination}
                        </h2>
                        <div className="flex sm:flex-col gap-2 justify-between text-slate-600">
                            <span className="font-semibold">Par: {journey.initial_date}</span>
                            <span className="font-semibold">Arr: {journey.end_date}</span>
                        </div>
                    </div>
                    <div className="sm:w-11/12">
                        <img
                            src={`${apiUrl}${journey?.image_path}`}
                            alt=""
                            className="object-cover h-full w-full rounded-lg"
                        />
                    </div>
                </div>
            </section>
            <section className="mb-4">
                <h2 className="text-xl font-semibold mb-2">
                    Lista partecipanti ({participants.length})
                </h2>
                <div className="flex flex-col gap-3">
                    {participants.map((person) => (
                        <ParticipantCard key={person.id} participant={person} />
                    ))}
                </div>
            </section>
        </>
    );
}

export default DetailJourney;
