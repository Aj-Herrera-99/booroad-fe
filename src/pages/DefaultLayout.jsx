import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

function DefaultLayout() {
    return (
        <>
            <Header />
            <main className="mt-[10vh] min-h-[80vh] lg:h-[80vh] lg:overflow-y-auto p-4 sm:px-[3vw] lg:px-[25vw]">
                <Outlet />
            </main>
            <div className=""></div>
            <Footer />
        </>
    );
}
export default DefaultLayout;
