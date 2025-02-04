import { useEffect, useRef } from "react";
import { FaXmark } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

const appLinks = [
    { to: "/home", label: "Viaggi" },
    { to: "/about", label: "Chi siamo" },
    { to: "/contacts", label: "Contatti" },
    { to: "/", label: "Login" },
];

function Header() {
    const dropDownRef = useRef(null);
    const navigate = useNavigate();
    const currUser = window.localStorage.getItem("user");
    const location = useLocation();

    const showDropdown = () => {
        dropDownRef.current.classList.remove("-translate-y-full");
    };

    const logout = (to) => {
        if (to === "/") {
            window.localStorage.removeItem("user");
        }
    };

    const goBack = () => {
        navigate(-1, { replace: true });
    };

    return (
        <header
            className={`${
                location.pathname === "/" ? "justify-center" : "justify-between"
            } fixed w-screen h-[10vh] z-20 top-[-0.5px] left-0 bg-teal-400/50 px-4 flex items-center drop-shadow-xl rounded-b-2xl backdrop-blur-[8px]`}
        >
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
                className={`${location.pathname !== "/home" && "hidden"} w-1/3`}
            ></div>
            {/* logo */}
            <Link to={"/home"} className=" w-[70px]">
                <img src="/logo_2.png" alt="" />
            </Link>
            {/* navbar */}
            {location.pathname !== "/" && (
                <nav className="hidden lg:flex text-center">
                    {appLinks.map((link, i) => (
                        <NavLink
                            onClick={() => logout(link.to)}
                            key={i}
                            to={link.to}
                            className={({ isActive }) =>
                                `${
                                    link.to.includes("/journey") && "hidden"
                                } py-1 px-2 rounded-lg text-black/60` +
                                (isActive ? " !text-black" : "")
                            }
                        >
                            {currUser && link.to === "/"
                                ? "Logout"
                                : `${link.label}`}
                        </NavLink>
                    ))}
                </nav>
            )}
            {/* Hamburger icon */}
            {location.pathname !== "/" && (
                <div className="lg:hidden text-2xl w-1/3 flex justify-end">
                    <GiHamburgerMenu className="" onClick={showDropdown} />
                </div>
            )}
            {/* Dropdown menu */}
            <DropdownMenu dropdownRef={dropDownRef} />
        </header>
    );
}

function DropdownMenu({ dropdownRef }) {
    const currUser = window.localStorage.getItem("user");

    const hideDropdown = (to) => {
        dropdownRef.current.classList.add("-translate-y-full");
        if (to === "/") {
            window.localStorage.removeItem("user");
        }
    };
    return (
        <div
            ref={dropdownRef}
            className="fixed inset-0 h-fit bg-black/95 transition-all duration-300 -translate-y-full text-white flex flex-col p-4 text-lg ease-out rounded-b-2xl gap-2"
        >
            <nav className="flex flex-col gap-3 text-center">
                {appLinks.map((link, i) => (
                    <NavLink
                        onClick={() => hideDropdown(link.to)}
                        key={i}
                        to={link.to}
                        className={({ isActive }) =>
                            "py-1 px-2 rounded-lg text-white/60" +
                            (isActive ? " !text-white" : "")
                        }
                    >
                        {currUser && link.to === "/"
                            ? "Logout"
                            : `${link.label}`}
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
