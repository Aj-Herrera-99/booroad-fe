import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
    return (
        <footer className="h-[10vh] flex items-center gap-4 p-4 bg-blue-300">
            <h2 className="font-light">BooRoad inc.</h2>
            <div className="links flex gap-4 text-sm">
                <ul>
                    <a href="/">
                        <li>Link</li>
                    </a>
                    <a href="/">
                        <li>Link</li>
                    </a>
                    <a href="/">
                        <li>Link</li>
                    </a>
                </ul>
                <ul>
                    <a href="/">
                        <li>Link</li>
                    </a>
                    <a href="/">
                        <li>Link</li>
                    </a>
                    <a href="/">
                        <li>Link</li>
                    </a>
                </ul>
                <ul>
                    <a href="/">
                        <li>Link</li>
                    </a>
                    <a href="/">
                        <li>Link</li>
                    </a>
                    <a href="/">
                        <li>Link</li>
                    </a>
                </ul>
            </div>
            <div className="icons [&>*]:text-2xl w-full flex justify-end gap-2">
                <FaFacebook className="facebook" />
                <FaInstagram className="instagram" />
                <FaTwitter className="twitter" />
                <FaYoutube className="youtube" />
            </div>
        </footer>
    );
}

export default Footer;
