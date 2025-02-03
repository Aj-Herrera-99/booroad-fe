import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaInfoCircle } from "react-icons/fa";
import DetailContacts from "./DetailContacts";

function Contacts() {

  return (
    <div>
      <DetailContacts title={"Contacts:"} info={"0548432423"}>
        <MdEmail style={{ display: "inline-block" }} />
      </DetailContacts>
      
      <DetailContacts title={"Email:"} info={"booroad@tiscali.it"}>
        <FaPhone style={{ display: "inline-block" }} />
      </DetailContacts>
      
      <DetailContacts title={"Useful numbers:"} info={"1233 - 789 - 330"}>
        <FaInfoCircle style={{ display: "inline-block" }} />
      </DetailContacts>
    </div>
  )
}

export default Contacts