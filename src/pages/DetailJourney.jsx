import { useRef } from "react";

function DetailJourney() {
    const fakeParticipants = [0, 1, 2, 3, 4, 5];

    return (
        <section className="bg-blue-300 mb-4">
            <h2 className="text-3xl font-semibold mb-2">Lista partecipanti</h2>
            <div className="flex flex-col gap-3 bg-red-300">
                {fakeParticipants.map((person) => (
                    <ParticipantCard key={person.id} />
                ))}
            </div>
        </section>
    );
}

function ParticipantCard() {
    const infoRef = useRef(null);

    const showInfo = () => {
      infoRef.current.classList.toggle("!block")
    }
    return (
        <div onClick={showInfo} className="bg-green-400 p-2 border rounded-lg">
            <div>ParticipantCard</div>
            <div ref={infoRef} className="hidden">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Placeat, adipisci.
            </div>
        </div>
    );
}

export default DetailJourney;
