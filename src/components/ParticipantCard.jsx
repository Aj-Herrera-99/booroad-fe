import { useRef, useState } from "react";

export function ParticipantCard({ participant }) {
    const infoRef = useRef(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const showInfo = () => {
        infoRef.current.classList.toggle("!block");
        setIsDropdownOpen((curr) => !curr);
    };
    return (
        <div
            // onClick={showInfo}
            className="participant p-2 border border-slate-400 rounded-lg"
        >
            <ul>
                <li>Nome: {participant.name}</li>
                <li>Cognome: {participant.surname}</li>
                <li
                    className={`${
                        isDropdownOpen && "hidden"
                    } text-end text-xs text-slate-800 mt-1`}
                >
                    <span
                        onClick={showInfo}
                        className="px-1 border-x rounded-r-md  rounded-l-md border-slate-400"
                    >
                        Altro
                    </span>
                </li>
            </ul>
            <ul ref={infoRef} className="hidden">
                <li>Cellulare: {participant.telephone_number}</li>
                <li>Email: {participant.email}</li>
                <li
                    className={`${
                        !isDropdownOpen && "hidden"
                    } text-end text-xs text-slate-800 mt-1`}
                >
                    <span
                        onClick={showInfo}
                        className="px-1 border-x rounded-r-md  rounded-l-md border-slate-400"
                    >
                        Riduci
                    </span>
                </li>
            </ul>
        </div>
    );
}
