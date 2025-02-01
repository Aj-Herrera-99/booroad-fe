import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
    return (
        <footer className="min-h-[10vh]">
            <div className="logo-footer">
                <img src="" alt="logo" />
            </div>
            <div className="links">
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
            <div className="icons">
                <FaFacebook className="facebook" />
                <FaInstagram className="instagram" />
                <FaTwitter className="twitter" />
                <FaYoutube className="youtube" />
            </div>
        </footer>
    );
}

export default Footer