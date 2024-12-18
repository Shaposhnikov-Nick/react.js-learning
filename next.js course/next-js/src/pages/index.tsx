import Heading from "../components/Heading";
import Socials from "../components/Socials";
import styles from "../styles/Home.module.scss";

export const getStaticProps = async () => {
    const response = await fetch(`${process.env.API_HOST}/socials`);
    const data = await response.json();

    if (!data) {
        return {
            notFound: true,
        };
    }
    return {
        props: {socials: data},
    };
};

const Home = ({socials}) => {
    console.log(socials)
    return (
        <div className={styles.wrapper}>
            <Heading text='Home'/>
            <Socials socials={socials.socials}/>
        </div>
    )

};

export default Home;
