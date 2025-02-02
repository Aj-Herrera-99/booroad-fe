import { useRef } from "react";

export function Journeys({ children, title }) {
    const cardsContRef = useRef(null);

    const dropDownToggle = () => {
        cardsContRef.current.classList.toggle("h-[260px]")
        cardsContRef.current.classList.toggle("overflow-hidden")
    };

    return (
        <section className="journey mb-4">
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <div
                ref={cardsContRef}
                className="flex flex-col gap-3 h-[260px] overflow-hidden"
            >
                {children}
            </div>
            <div className="text-end my-2">
                <button onClick={dropDownToggle} className="text-sm">
                    Espandi
                </button>
            </div>
        </section>
    );
}
