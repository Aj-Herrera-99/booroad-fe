import { useRef, useState } from "react";

export function Journeys({ children, title }) {
    const cardsContRef = useRef(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const dropDownToggle = () => {
        cardsContRef.current.classList.toggle("h-[400px]");
        cardsContRef.current.classList.toggle("overflow-hidden");
        setIsDropdownOpen((curr) => !curr);
    };

    return (
        <section className="journey my-2">
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <div
                ref={cardsContRef}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 h-[260px] max-h-fit lg:h-[200px] overflow-hidden transition-all"
            >
                {children}
            </div>
            <div className="text-end mt-3">
                <button
                    onClick={dropDownToggle}
                    className="text-sm border-x-2 rounded-r-md  rounded-l-md border-slate-400 px-1"
                >
                    {!isDropdownOpen ? "Espandi" : "Riduci"}
                </button>
            </div>
        </section>
    );
}
