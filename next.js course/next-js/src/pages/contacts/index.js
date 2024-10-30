import { useState, useEffect } from "react";
import Link from "next/link";
import Heading from "@/components/Heading";
import { notFound } from "next/navigation";

// Так получают данные в Next.js приложении
// и передают их как props для компонента
export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  // Специальная проверка если запрос неуспешный
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { contacts: data },
  };
};

const Contacts = ({ contacts }) => {
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
      <Heading text='Contacts list:' />
      <ul>
        {
          contacts &&
            contacts.map(({ id, name }) => (
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
