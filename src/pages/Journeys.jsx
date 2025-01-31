import { useRef } from "react";

export function Journeys({ children }) {
    const cardsContRef = useRef(null);

    const dropDownToggle = () => {
        cardsContRef.current.classList.toggle("h-[100px]")
        cardsContRef.current.classList.toggle("overflow-hidden")
    };

    return (
        <section className="bg-blue-300 mb-4">
            <h2 className="text-3xl font-semibold mb-2">Viaggi in corso</h2>
            <div
                ref={cardsContRef}
                className="flex flex-col gap-3 bg-red-300 h-[100px] overflow-hidden"
            >
                {children}
            </div>
            <div className="text-end">
                <button onClick={dropDownToggle} className="text-sm">
                    Espandi
                </button>
            </div>
        </section>
    );
}
