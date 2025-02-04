import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import JourneyCard from "../components/JourneyCard";
import { Journeys } from "./Journeys";

const apiJourneys = import.meta.env.VITE_API_JOURNEYS;

function Homepage() {
    const [journeys, setJourneys] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios
            .get(apiJourneys)
            .then((res) => setJourneys(res.data.results))
            .catch((err) => console.error(err))
            .finally(() => setIsLoading(false));
    }, []);

    if (isLoading) return <div>is loading...</div>;

    return (
        <>
            <Journeys title={`Viaggi in corso (${journeys.length})`}>
                {journeys.map((journey) => (
                    <JourneyCard key={journey.id} journey={journey} />
                ))}
            </Journeys>
            <Journeys title={`Viaggi in programma (${journeys.length})`}>
                {journeys.map((journey) => (
                    <JourneyCard key={journey.id} journey={journey} />
                ))}
            </Journeys>
        </>
    );
}

export default Homepage;
