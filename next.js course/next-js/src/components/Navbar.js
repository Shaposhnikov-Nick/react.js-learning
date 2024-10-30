import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../styles/Navbar.module.scss";

const navigation = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Posts", path: "/posts" },
  { id: 3, title: "Contacts", path: "/contacts" },
];

const Navbar = () => {
  const { pathname } = useRouter();
  console.log(pathname);

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>next.js</div>
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
