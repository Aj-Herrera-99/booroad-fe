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
        <header className="fixed w-screen h-[10vh] top-0 left-0 bg-blue-300 px-4 flex justify-between items-center">
            <Link to={"/"}>
              <h2 className="text-3xl font-light tracking-wider">BooRoad</h2>
            </Link>

            <GiHamburgerMenu className="text-xl" onClick={showWindowMenu} />
            <WindowMenu windowRef={windowRef} />
            {/* <div className="navbar"></div> */}
        </header>
    );
}

function WindowMenu({ windowRef }) {
    const hideWindowMenu = () => {
        windowRef.current.classList.add("-translate-y-full");
    };
    return (
        <div
            ref={windowRef}
            className="fixed inset-0 h-fit bg-black/95 transition-all duration-300 -translate-y-full text-white flex flex-col px-4 py-6 "
        >
            <FaXmark onClick={hideWindowMenu} className=" text-2xl self-end" />
            <div className="flex flex-col items-center gap-4 text-lg">
                <form className="flex items-center gap-2">
                    <input type="search" name="search" id="search" />
                    <FaMagnifyingGlass className="text-xl" />
                </form>
                <NavLink href="/">Home</NavLink>
                <NavLink href="/about">About</NavLink>
                <NavLink href="/contacts">Contacts</NavLink>
            </div>
        </div>
    );
}

export default Header;
