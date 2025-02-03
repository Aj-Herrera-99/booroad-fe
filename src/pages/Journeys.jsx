import { useRef, useState } from "react";

export function Journeys({ children, title }) {
    const cardsContRef = useRef(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const dropDownToggle = () => {
        cardsContRef.current.classList.toggle("h-[260px]");
        cardsContRef.current.classList.toggle("overflow-hidden");
        setIsDropdownOpen((curr) => !curr);
    };

    return (
        <section className="journey my-4">
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <div
                ref={cardsContRef}
                className="flex flex-col gap-3 h-[260px] overflow-hidden"
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
