import { useState, useRef } from "react"
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaInfoCircle } from "react-icons/fa";

function Contacts() {
  const [dropToggle, setDropToggle] = useState(false);
  const accordionRef = useRef(null);

  const accordionToggle = () => {
    accordionRef.current.classList.toggle("h-[100px]");
    accordionRef.current.classList.toggle("overflow-hidden");
    setDropToggle((clicked) => !clicked);
  };
  return (
    <div>

      <div className="participant p-2 border border-slate-400 rounded-lg mb-3">
        <ul>
          <li ref={accordionRef} onClick={accordionToggle}><strong>Contacts:</strong>
            {!dropToggle ? <IoMdArrowDropdown /> : <IoMdArrowDropup />}

            <span className={`${!dropToggle ? "hidden" : "show"}`}>
              <ul>
                <li><FaPhone style={{ display: "inline-block" }} /> &nbsp;1234566789</li>
              </ul>
            </span>
          </li>
        </ul>
      </div>

      <div className="participant p-2 border border-slate-400 rounded-lg mb-3">
        <ul>
          <li ref={accordionRef} onClick={accordionToggle}><strong>Email:</strong>
            {!dropToggle ? <IoMdArrowDropdown /> : <IoMdArrowDropup />}

            <span className={`${!dropToggle ? "hidden" : "show"}`}>
              <ul>
                <li><MdEmail style={{ display: "inline-block" }} /> &nbsp;booRoad@exxample.it</li>
              </ul>
            </span>
          </li>
        </ul>
      </div>

      <div className="participant p-2 border border-slate-400 rounded-lg">
        <ul>
          <li ref={accordionRef} onClick={accordionToggle}><strong>Useful numbers:</strong>
            {!dropToggle ? <IoMdArrowDropdown /> : <IoMdArrowDropup />}

            <span className={`${!dropToggle ? "hidden" : "show"}`}>
              <ul>
                <li><FaInfoCircle style={{ display: "inline-block" }} /> &nbsp;0548432423</li>
              </ul>
            </span>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default Contacts