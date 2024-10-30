import Heading from "@/components/Heading";

const ContactInfo = ({contact}) => {
    if(!contact) {
        return <Heading tag="h3" text="Empty contact"/>
    }

    const { email, address} = contact || {}
    const {street, suite, city, zipcode} = address

    return (
        <>
            <Heading/>
            <div>
                <strong>Email:</strong>
                {email}
            </div>
            <div>
                <strong>Address:</strong>
                {`${street}, ${suite}, ${city}, ${zipcode}`}
            </div>
        </>
    )
}

export default ContactInfo