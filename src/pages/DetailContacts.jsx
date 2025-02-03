import { useState, useRef } from "react"
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

function DetailContacts({ title, info, children }) {
    const [dropToggle, setDropToggle] = useState(false);
    const accordionRef = useRef(null);

    const accordionToggle = () => {
        accordionRef.current.classList.toggle("h-[50px]");
        accordionRef.current.classList.toggle("overflow-hidden");
        setDropToggle((clicked) => !clicked);
    };

    return (
        <>
            <div className="participant p-2 border border-slate-400 rounded-lg mb-3">
                <ul>
                    <div>
                        <li className="flex justify-between cursor-pointer" ref={accordionRef} onClick={accordionToggle}><strong>{title}</strong>
                            {!dropToggle ? <IoMdArrowDropdown className="my-auto cursor-pointer" /> : <IoMdArrowDropup className="my-auto" />}
                        </li>

                        <div ref={accordionRef}>
                                <span className={`${!dropToggle ? "hidden" : "show"}`}>
                                    <ul>
                                    <li className="content-center h-[50px]">
                                            {children}
                                            &nbsp;{info}
                                        </li>
                                    </ul>
                                </span>
                            </div>                   
                    </div>
                </ul>
            </div >
        </>
    )
}

export default DetailContacts;