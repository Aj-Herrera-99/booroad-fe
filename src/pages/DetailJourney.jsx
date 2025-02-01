import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
const apiJourneys = import.meta.env.VITE_API_JOURNEYS;

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
        <section className="journey-details mb-4">
            <h1 className="text-3xl font-semibold mb-2">Destinazione: {journey.destination}</h1>
            <h2 className="text-2xl font-semibold mb-2">Lista partecipanti</h2>
            <div className="flex flex-col gap-3">
                {participants.map((person) => (
                    <ParticipantCard key={person.id} participant={person} />
                ))}
            </div>
        </section>
    );
}

function ParticipantCard({ participant }) {
    const infoRef = useRef(null);

    const showInfo = () => {
        infoRef.current.classList.toggle("!block");
    };
    return (
        <div onClick={showInfo} className="participant p-2 border rounded-lg">
            <ul>
                <li>Nome: {participant.name}</li>
                <li>Cognome: {participant.surname}</li>
            </ul>
            <ul ref={infoRef} className="hidden">
                <li>Cellulare: {participant.telephone_number}</li>
                <li>Email: {participant.email}</li>
            </ul>
        </div>
    );
}

export default DetailJourney;
