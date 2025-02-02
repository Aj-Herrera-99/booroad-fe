import { useRef } from "react";
import { FaMagnifyingGlass, FaXmark } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";

// todo: aggiungere icona go back
function Header() {
    const dropDownRef = useRef(null);

    const showDropdown = () => {
        console.log("test");
        dropDownRef.current.classList.remove("-translate-y-full");
    };

    return (
        <header className="fixed w-screen h-[10vh] z-20 top-0 left-0 bg-blue-300 px-4 flex justify-between items-center drop-shadow-xl rounded-b-2xl">
            <span></span>
            <Link to={"/"} className=" w-[60px]">
                <img src="/logo_2.png" alt="" />
            </Link>

            <GiHamburgerMenu className="text-xl" onClick={showDropdown} />
            <DropdownMenu dropdownRef={dropDownRef} />
        </header>
    );
}

const appLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/contacts", label: "Contacts" },
];

function DropdownMenu({ dropdownRef }) {
    const hideDropdown = () => {
        dropdownRef.current.classList.add("-translate-y-full");
    };
    return (
        <div
            ref={dropdownRef}
            className="fixed inset-0 h-fit bg-black/95 transition-all duration-300 -translate-y-full text-white flex-col p-4 text-lg ease-out rounded-b-2xl"
        >
            <div className="flex justify-between items-center">
                <form className="flex items-center gap-2">
                    <input className="rounded-md px-2 py-1 text-black" type="search" name="search" id="search" />
                    <FaMagnifyingGlass className="text-xl text-white" />
                </form>
                <FaXmark onClick={hideDropdown} className=" text-2xl" />
            </div>
            <div className="flex justify-around mt-4">
                {appLinks.map((link, i) => (
                    <NavLink
                        key={i}
                        to={link.to}
                        className={({ isActive }) =>
                            "py-1 px-2" + (isActive ? " border-b " : "")
                        }
                    >
                        {link.label}
                    </NavLink>
                ))}
            </div>
        </div>
    );
}

export default Header;
