import { useRef, useState } from "react";

export function ParticipantCard({ participant }) {
    const infoRef = useRef(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const showInfo = () => {
        infoRef.current.classList.toggle("!block");
        setIsDropdownOpen((curr) => !curr);
    };
    return (
        <div className="participant p-2 border border-slate-400 rounded-lg">
            <ul>
                <li>Nome: {participant.name}</li>
                <li>Cognome: {participant.surname}</li>
                <li
                    className={`${
                        isDropdownOpen && "hidden"
                    } text-end text-xs text-slate-800 mt-1`}
                >
                    <button
                        onClick={showInfo}
                        className="px-1 border-x rounded-r-md  rounded-l-md border-slate-400 hover:scale-110 transition-all"
                    >
                        Altro
                    </button>
                </li>
            </ul>
            <ul ref={infoRef} className="hidden">
                <li>C.F: {participant.tax_id_code}</li>
                <li>Cellulare: {participant.telephone_number}</li>
                <li>Email: {participant.email}</li>
                <li
                    className={`${
                        !isDropdownOpen && "hidden"
                    } text-end text-xs text-slate-800 mt-1`}
                >
                    <button
                        onClick={showInfo}
                        className="px-1 border-x rounded-r-md  rounded-l-md border-slate-400 hover:scale-110 transition-all"
                    >
                        Riduci
                    </button>
                </li>
            </ul>
        </div>
    );
}
