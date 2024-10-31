import {GetStaticProps} from "next"
import {FC} from "react"
import {postType} from "../../../types"
import Heading from "../../components/Heading";
import Link from "next/link";

type postsTypeProps = {
    posts: [postType]
}

export const getStaticProps:GetStaticProps = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    // Специальная проверка если запрос неуспешный
    if (!data) {
        return {
            notFound: true,
        };
    }
    return {
        props: { posts: data },
    };
};

const Posts:FC<postsTypeProps> = ({posts}) => {
    return (
        <>
            <Heading text='Post list:'/>
            <ul>
                {
                    posts &&
                    posts.map(({id, title}) => (
                        <li key={id}>
                            <Link href={`/posts/${id}`}>{title}</Link>
                        </li>
                    ))
                }
            </ul>
        </>
    )
};

export default Posts;
