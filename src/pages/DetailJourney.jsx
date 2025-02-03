import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ParticipantCard } from "../components/ParticipantCard";
const apiJourneys = import.meta.env.VITE_API_JOURNEYS;
const apiUrl = import.meta.env.VITE_API_URL;

function DetailJourney() {
    const { id } = useParams();

    const [journey, setJourney] = useState({});
    const [participants, setParticipants] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [inputData, setInputData] = useState("");

    const filteredParticipants = participants.filter((person) => {
        if (inputData.length == 0) return true;
        return (
            person.name.toUpperCase().startsWith(inputData.toUpperCase()) ||
            person.surname.toUpperCase().startsWith(inputData.toUpperCase())
        );
    });

    const handleInputChange = (e) => {
        const { value } = e.target;
        setInputData(value);
    };

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
            {/* info viaggio */}
            <section className="journey-details my-4 flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <div className="sm:w-1/2">
                    <h2 className="text-2xl sm:text-4xl sm:mb-6 font-semibold">
                        {journey.destination}
                    </h2>
                    <div className="flex sm:flex-col gap-2 justify-between text-slate-600">
                        <span className="font-semibold">
                            Par: {journey.initial_date}
                        </span>
                        <span className="font-semibold">
                            Arr: {journey.end_date}
                        </span>
                    </div>
                </div>
                <div className="sm:w-11/12">
                    <img
                        src={`${apiUrl}${journey?.image_path}`}
                        alt=""
                        className="object-cover h-full w-full rounded-lg outline outline-slate-400"
                    />
                </div>
            </section>
            {/* info partecipanti */}
            <section className="mb-4">
                <h2 className="text-xl font-semibold">
                    Lista partecipanti ({participants.length})
                </h2>
                <div className="my-4">
                    <input
                        type="text"
                        className="rounded-md border border-slate-400 px-2 py-1 text-black w-1/2"
                        placeholder="Filtra partecipanti"
                        value={inputData}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="flex flex-col gap-3">
                    {filteredParticipants.map((person) => (
                        <ParticipantCard key={person.id} participant={person} />
                    ))}
                </div>
            </section>
        </>
    );
}

export default DetailJourney;
