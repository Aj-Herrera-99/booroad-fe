import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import JourneyCard from "../components/JourneyCard";
import { Journeys } from "./Journeys";

const apiJourneys = import.meta.env.VITE_API_JOURNEYS;

function Homepage() {
    const [journeys, setJourneys] = useState([1, 2, 3, 4, 5]);
    const [isLoading, setIsLoading] = useState(false);

    console.log(journeys);

    useEffect(() => {
        setIsLoading(false);
        axios
            .get(apiJourneys)
            .then((res) => setJourneys(res.data))
            .catch((err) => console.error(err))
            .finally(() => setIsLoading(true));
    }, []);

    return (
        <>
            <Journeys>
                {journeys.map((journey) => (
                    <JourneyCard key={journey.id} id={journey.id} />
                ))}
            </Journeys>
            <Journeys>
                {journeys.map((journey) => (
                    <JourneyCard key={journey?.id} />
                ))}
            </Journeys>
        </>
    );
}

export default Homepage;
