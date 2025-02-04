import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

// utenti fittizi registrati

// const admin = {
//     user: "admin",
//     password: "admin",
// };

// const guide1 = {
//     user: "guide1",
//     password: "guide1",
// };
// const guide2 = {
//     user: "guide2",
//     password: "guide2",
// };

function Auth() {
    const userRef = useRef(null);
    const passwordRef = useRef(null);
    const [isIncorrect, setIsIncorrect] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        window.localStorage.setItem("user", userRef.current.value);
        if (
            userRef.current.value === "admin" &&
            passwordRef.current.value === "admin"
        ) {
            navigate("/home");
        } else if (
            userRef.current.value === "aj" &&
            passwordRef.current.value === "aj"
        ) {
            navigate("/journey/1");
        } else if (
            userRef.current.value === "daniel" &&
            passwordRef.current.value === "daniel"
        ) {
            navigate("/journey/2");
        } else if (
            userRef.current.value === "danilo" &&
            passwordRef.current.value === "danilo"
        ) {
            navigate("/journey/3");
        }
        {
            setIsIncorrect(true);
        }
    };

    useEffect(() => {
        const currUser = window.localStorage.getItem("user");
        console.log(currUser);
        if (currUser) navigate("/home");
    }, []);

    return (
        <>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-[50vw] max-w-[300px]">
                <h1 className="font-semibold text-2xl">Accedi</h1>
                <form className=" border-slate-300/70 border rounded-md mt-2 p-2 flex flex-col gap-3 [&_input]:border [&_input]:border-slate-300">
                    <div className="flex flex-col">
                        <label htmlFor="user">Utente</label>
                        <input
                            ref={userRef}
                            className="rounded-md px-2 py-1 text-black"
                            type="text"
                            name="user"
                            id="user"
                            autoFocus
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="password">Password</label>
                        <input
                            ref={passwordRef}
                            className="rounded-md px-2 py-1 text-black"
                            type="password"
                            name="password"
                            id="password"
                        />
                    </div>
                    <div className="text-center">
                        <button
                            onClick={handleSubmit}
                            type="submit"
                            className="bg-teal-800 text-white px-2 py-1 rounded-md"
                        >
                            Accedi
                        </button>
                    </div>
                </form>
                {isIncorrect && (
                    <span className="text-red-500">
                        Utente o password incorretti!
                    </span>
                )}
            </div>
        </>
    );
}

export default Auth;
