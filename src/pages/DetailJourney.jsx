import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { ParticipantCard } from "../components/ParticipantCard";
import {
    IoIosAddCircleOutline,
    IoIosRemoveCircleOutline,
} from "react-icons/io";
const apiJourneys = import.meta.env.VITE_API_JOURNEYS;
const apiUrl = import.meta.env.VITE_API_URL;

// todo: separare in mini componenti
function DetailJourney() {
    const { id } = useParams();

    const currUser = window.sessionStorage.getItem("user");

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
        formRef.current.classList.toggle("h-[375px]");
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
                                    className={`text-4xl text-slate-800 scale-90 hover:scale-100`}
                                />
                            ) : (
                                <IoIosRemoveCircleOutline
                                    onClick={toggleForm}
                                    className={`text-4xl text-slate-800 scale-90 hover:scale-100`}
                                />
                            )}
                        </>
                    )}
                </div>
                {currUser === "admin" && (
                    <AddForm
                        formRef={formRef}
                        setParticipants={setParticipants}
                        toggleForm={toggleForm}
                    />
                )}
                <div className="flex flex-col gap-3 mt-3">
                    {filteredParticipants.map((person) => (
                        <ParticipantCard key={person.id} participant={person} />
                    ))}
                </div>
            </section>
        </>
    );
}

function AddForm({ formRef, setParticipants, toggleForm }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        let [name, surname, telephone_number, email] = form.elements;
        setParticipants((curr) => [
            ...curr,
            {
                name: name.value,
                surname: surname.value,
                telephone_number: telephone_number.value,
                email: email.value,
            },
        ]);
        toggleForm();
        window.scrollTo(0, document.body.scrollHeight);
    };

    return (
        <>
            <section
                ref={formRef}
                className="h-0 overflow-hidden max-h-fit ease-out transition-all duration-300 my-2 border-y border-y-slate-400 w-1/2 rounded-lg px-2"
            >
                <h2 className="font-semibold mt-2">Aggiungi partecipante</h2>
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-2 my-4"
                >
                    <div className="flex flex-col">
                        <label htmlFor="fname">Nome</label>
                        <input
                            className="rounded-md px-2 py-1 text-black border border-slate-300"
                            type="text"
                            name="fname"
                            id="fname"
                            required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="lname">Cognome</label>
                        <input
                            className="rounded-md px-2 py-1 text-black border border-slate-300"
                            type="text"
                            name="lname"
                            id="lname"
                            required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="number">Cellulare</label>
                        <input
                            className="rounded-md px-2 py-1 text-black border border-slate-300"
                            type="number"
                            name="number"
                            id="number"
                            required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email">Email</label>
                        <input
                            className="rounded-md px-2 py-1 text-black border border-slate-300"
                            type="email"
                            name="email"
                            id="email"
                            required
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="bg-teal-800 text-white px-2 py-1 rounded-md hover:bg-teal-900"
                        >
                            Aggiungi
                        </button>
                    </div>
                </form>
            </section>
        </>
    );
}

export default DetailJourney;
