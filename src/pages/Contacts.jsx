import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaInfoCircle } from "react-icons/fa";
import DetailContacts from "./DetailContacts";

function Contacts() {

  return (
    <div>
      <DetailContacts title={"Contatti:"} info={"0548432423"}>
        <MdEmail style={{ display: "inline-block" }} />
      </DetailContacts>
      
      <DetailContacts title={"Email:"} info={"0548432423"}>
        <FaPhone style={{ display: "inline-block" }} />
      </DetailContacts>
      
      <DetailContacts title={"Numeri utili:"} info={"0548432423"}>
        <FaInfoCircle style={{ display: "inline-block" }} />
      </DetailContacts>
    </div>
  )
}

export default Contacts