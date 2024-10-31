import {FC} from "react"
import Heading from "./Heading";
import {contactType} from "../../types"

type contactInfoProps = {
    contact: contactType
}

const ContactInfo:FC<contactInfoProps> = ({contact}) => {
    if(!contact) {
        return <Heading tag="h3" text="Empty contact"/>
    }

    const {name,  email, address} = contact || {}
    const {street, suite, city, zipcode} = address

    return (
        <>
            <div>
                <Heading text={name}/>
                <strong>Email: </strong>
                {email}
            </div>
            <div>
                <strong>Address: </strong>
                {`${street}, ${suite}, ${city}, ${zipcode}`}
            </div>
        </>
    )
}

export default ContactInfo