import {useState, useEffect} from "react";
import Link from "next/link";
import {GetStaticProps} from "next"
import {FC} from "react"
import {contactType} from "../../../types"
import Heading from "../../components/Heading";
import {notFound} from "next/navigation";

type contactsTypeProps = {
    contacts: [contactType]
}


// Так получают данные в Next.js приложении
// и передают их как props для компонента
export const getStaticProps: GetStaticProps = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    // Специальная проверка если запрос неуспешный
    if (!data) {
        return {
            notFound: true,
        };
    }
    return {
        props: {contacts: data},
    };
};

const Contacts:FC<contactsTypeProps> = ({contacts}) => {
    // Так получают данные в обычном React приложении:
    /*
    const [contacts, setContacts] = useState(null);
    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setContacts(data);
      };
      fetchData();
    }, []);
    */

    return (
        <>
            <Heading text='Contacts list:'/>
            <ul>
                {
                    contacts &&
                    contacts.map(({id, name}) => (
                        <li key={id}>
                            <Link href={`/contacts/${id}`}>{name}</Link>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default Contacts;
