import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

function DefaultLayout() {
    return (
        <>
            <Header />
            <main className="mt-[10vh] min-h-[80vh] p-4">
                <Outlet />
            </main>
            <div className=""></div>
            <Footer />
        </>
    );
}
export default DefaultLayout;
