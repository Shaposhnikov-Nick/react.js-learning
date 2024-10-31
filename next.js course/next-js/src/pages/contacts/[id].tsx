import {GetServerSideProps} from "next"
import {FC} from "react"
import ContactInfo from "../../components/ContactInfo";
import {contactType} from "../../../types"

type contactTypeProps = {
    contact: contactType
}

// SSR
export const getServerSideProps:(context) => Promise<{ notFound: boolean } | {
    props: { contact: any }
}> = async (context) => {
    const {id} = context.params
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await response.json();

    if (!data) {
        return {
            notFound: true,
        };
    }

    return {
        props: {contact: data},
    };
};

const Contact:FC<contactTypeProps> = ({contact}) => {
    return (
        <>
            <ContactInfo contact={contact}/>
        </>
    );
};

export default Contact;
