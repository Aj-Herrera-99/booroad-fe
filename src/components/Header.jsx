import { useRef } from "react";
import { FaMagnifyingGlass, FaXmark } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";

function Header() {
    const windowRef = useRef(null);

    const showWindowMenu = () => {
        console.log("test");
        windowRef.current.classList.remove("-translate-y-full");
    };

    return (
        <header className="fixed w-screen h-[10vh] z-20 top-0 left-0 bg-blue-300 px-4 flex justify-between items-center drop-shadow-xl">
            <span></span>
            <Link to={"/"} className=" w-[60px]">
                <img src="/logo_2.png" alt="" />
            </Link>

            <GiHamburgerMenu className="text-xl" onClick={showWindowMenu} />
            <WindowMenu windowRef={windowRef} />
            {/* <div className="navbar"></div> */}
        </header>
    );
}

const appLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/contacts", label: "Contacts" },
];

function WindowMenu({ windowRef }) {
    const hideWindowMenu = () => {
        windowRef.current.classList.add("-translate-y-full");
    };
    return (
        <div
            ref={windowRef}
            className="fixed inset-0 h-fit bg-black/90 transition-all duration-300 -translate-y-full text-white flex-col px-4 py-6 text-lg ease-out rounded-b-2xl"
        >
            <div className="flex justify-between">
                <form className="flex items-center gap-2">
                    <input type="search" name="search" id="search" />
                    <FaMagnifyingGlass className="text-xl relative -translate-x-8 text-black" />
                </form>
                <FaXmark onClick={hideWindowMenu} className=" text-2xl" />
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
