import { useRef } from "react";
import { FaXmark } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

const appLinks = [
    { to: "/", label: "Login" },
    { to: "/home", label: "Viaggi" },
    { to: "/about", label: "Chi siamo" },
    { to: "/contacts", label: "Contatti" },
];

// todo: nascondere hamburger menu quando si è nella auth page
function Header() {
    const dropDownRef = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();

    const showDropdown = () => {
        console.log("test");
        dropDownRef.current.classList.remove("-translate-y-full");
    };

    const goBack = () => {
        navigate(-1, { replace: true });
    };

    return (
        <header className="fixed w-screen h-[10vh] z-20 top-[-0.5px] left-0 bg-teal-400/50 px-4 flex justify-between items-center drop-shadow-xl rounded-b-2xl backdrop-blur-md">
            {/* go back button */}
            <Link
                onClick={goBack}
                className={`${
                    (location.pathname === "/home" ||
                        location.pathname === "/") &&
                    "hidden"
                } flex items-center w-1/3 -translate-x-4`}
            >
                <MdKeyboardArrowLeft className="text-3xl" />
                <span className="-translate-x-1">Indietro</span>
            </Link>
            {/* solo placeholder per spaziature */}
            <div
                className={`${
                    (location.pathname === "/home" ||
                        location.pathname === "/") &&
                    "!block"
                } w-1/3 hidden`}
            ></div>
            {/* logo */}
            <Link to={"/home"} className=" w-[60px]">
                <img src="/logo_2.png" alt="" />
            </Link>
            {/* navbar */}
            <nav className="hidden sm:flex gap-3 text-center">
                {appLinks.map((link, i) => (
                    <NavLink
                        key={i}
                        to={link.to}
                        className={({ isActive }) =>
                            "py-1 px-2 rounded-lg text-black/60" +
                            (isActive ? " !text-black" : "")
                        }
                    >
                        {link.label}
                    </NavLink>
                ))}
            </nav>
            {/* Hamburger icon */}
            <div className="md:hidden text-2xl w-1/3 flex justify-end">
                <GiHamburgerMenu className="" onClick={showDropdown} />
            </div>
            {/* Dropdown menu */}
            <DropdownMenu dropdownRef={dropDownRef} />
        </header>
    );
}

function DropdownMenu({ dropdownRef }) {
    const hideDropdown = () => {
        dropdownRef.current.classList.add("-translate-y-full");
    };
    return (
        <div
            ref={dropdownRef}
            className="fixed inset-0 h-fit bg-black/95 transition-all duration-300 -translate-y-full text-white flex flex-col p-4 text-lg ease-out rounded-b-2xl gap-2"
        >
            <nav className="flex flex-col gap-3 text-center">
                {appLinks.map((link, i) => (
                    <NavLink
                        onClick={hideDropdown}
                        key={i}
                        to={link.to}
                        className={({ isActive }) =>
                            "py-1 px-2 rounded-lg text-white/60" +
                            (isActive ? " !text-white" : "")
                        }
                    >
                        {link.label}
                    </NavLink>
                ))}
            </nav>
            <div className="mx-auto mt-4">
                <FaXmark
                    onClick={hideDropdown}
                    className=" text-lg py-1 px-3 rounded-full box-content border opacity-70 "
                />
            </div>
        </div>
    );
}

export default Header;
