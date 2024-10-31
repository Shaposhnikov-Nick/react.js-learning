import {FC} from "react"
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navbar.module.scss";

const navigation = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Posts", path: "/posts" },
  { id: 3, title: "Contacts", path: "/contacts" },
];

const Navbar:FC = () => {
  const { pathname } = useRouter(); // хук, который возвращает текущий путь

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Image src='/logo.png' height={60} width={60} />
      </div>
      <div className={styles.links}>
        {navigation.map(({ id, title, path }) => (
          <Link key={id} href={path}>
            <span className={pathname === path ? styles.active : null}>
              {title}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
