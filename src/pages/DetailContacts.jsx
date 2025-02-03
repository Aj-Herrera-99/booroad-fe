import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

function DetailContacts({ title, info, children }) {
    const [dropToggle, setDropToggle] = useState(false);

    const accordionToggle = () => {
        setDropToggle((curr) => !curr);
    };

    return (
        <div
            onClick={accordionToggle}
            className="p-2 border border-slate-400 rounded-lg mb-3"
        >
            <div className="flex justify-between items-center">
                <strong>{title}</strong>
                <IoMdArrowDropdown
                    className={`${
                        dropToggle && "rotate-180"
                    } my-auto cursor-pointer transition-all`}
                />
            </div>

            <span className={`${!dropToggle && "hidden"} flex items-center`}>
                {children}&nbsp;{info}
            </span>
        </div>
    );
}

export default DetailContacts;
