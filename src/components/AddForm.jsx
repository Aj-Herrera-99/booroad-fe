import React from 'react'

function AddForm({ formRef, setParticipants, toggleForm }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        let [name, surname, tax_id_code, telephone_number, email] =
            form.elements;
        setParticipants((curr) => [
            ...curr,
            {
                name: name.value,
                surname: surname.value,
                tax_id_code: tax_id_code.value,
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
                style={{ transition: "opacity 0" }}
                className="h-0 overflow-hidden max-h-fit ease-out transition-all duration-300 my-2 opacity-0 border-y border-y-slate-400 w-1/2 rounded-lg px-2"
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
                        <label htmlFor="cf">Codice fiscale</label>
                        <input
                            className="rounded-md px-2 py-1 text-black border border-slate-300"
                            type="text"
                            name="cf"
                            id="cf"
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

export default AddForm