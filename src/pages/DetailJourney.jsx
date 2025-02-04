import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { ParticipantCard } from "../components/ParticipantCard";
import {
    IoIosAddCircleOutline,
    IoIosRemoveCircleOutline,
} from "react-icons/io";
import AddForm from "../components/AddForm";
const apiJourneys = import.meta.env.VITE_API_JOURNEYS;
const apiUrl = import.meta.env.VITE_API_URL;

// todo: separare in mini componenti
function DetailJourney() {
    const { id } = useParams();

    const currUser = window.localStorage.getItem("user");

    const [journey, setJourney] = useState({});
    const [participants, setParticipants] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [inputData, setInputData] = useState("");
    const [isFormOpen, setIsFormOpen] = useState(false);
    const formRef = useRef(null);

    const filteredParticipants = participants.filter((person) => {
        if (inputData.length == 0) return true;
        const fullName = `${person.name} ${person.surname}`;
        return fullName.toLowerCase().includes(inputData.toLowerCase());
    });

    const handleInputChange = (e) => {
        const { value } = e.target;
        setInputData(value);
    };

    const toggleForm = () => {
        setIsFormOpen((curr) => !curr);
        formRef.current.classList.toggle("h-[450px]");
        formRef.current.classList.toggle("opacity-0");
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
            {/* sezione info viaggio */}
            <section className="journey-details my-4 flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center">
                <div>
                    {/* guida */}
                    <div
                        className={`${
                            currUser === "admin" && "hidden"
                        } text-2xl text-center sm:text-4xl sm:mb-6 border border-slate-400 rounded-md mb-4`}
                    >
                        <span className="font-semibold">Guida:</span>{" "}
                        <span className="capitalize">{currUser}</span>
                    </div>
                    <h2 className="text-2xl sm:text-4xl sm:mb-6 font-semibold">
                        Destinazione: {journey.destination}
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
                <div>
                    <img
                        src={`${apiUrl}${journey?.image_path}`}
                        alt=""
                        className="object-cover h-full w-full rounded-lg outline outline-slate-400"
                    />
                </div>
            </section>
            {/* sezione partecipanti */}
            <section className="mb-4">
                <h2 className="text-xl font-semibold">
                    Lista partecipanti ({participants.length})
                </h2>
                {/* input e add icon */}
                <div className="my-4 flex items-center gap-4">
                    <input
                        type="text"
                        className="rounded-md border border-slate-400 px-2 py-1 text-black w-1/2"
                        placeholder="Filtra partecipanti"
                        value={inputData}
                        onChange={handleInputChange}
                    />
                    {currUser === "admin" && (
                        <>
                            {!isFormOpen ? (
                                <IoIosAddCircleOutline
                                    onClick={toggleForm}
                                    className={`text-4xl text-slate-800 scale-90 hover:scale-100 cursor-pointer`}
                                />
                            ) : (
                                <IoIosRemoveCircleOutline
                                    onClick={toggleForm}
                                    className={`text-4xl text-slate-800 scale-90 hover:scale-100 cursor-pointer`}
                                />
                            )}
                        </>
                    )}
                </div>
                {/* add partecipanti form */}
                {currUser === "admin" && (
                    <AddForm
                        formRef={formRef}
                        setParticipants={setParticipants}
                        toggleForm={toggleForm}
                    />
                )}
                {/* lista partecipanti */}
                <div className="flex flex-col gap-3 mt-3 [&>*:nth-child(odd)]:bg-teal-200/60 [&>*:nth-child(even)]:bg-teal-100/50">
                    {filteredParticipants.map((person) => (
                        <ParticipantCard key={person.id} participant={person} />
                    ))}
                </div>
            </section>
        </>
    );
}

export default DetailJourney;
