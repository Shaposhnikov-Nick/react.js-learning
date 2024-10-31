import {GetStaticPaths} from "next"
import {FC} from "react"
import {contactType, postType} from "../../../types"
import PostInfo from "../../components/PostInfo";

type postTypeProps = {
    post: postType
}

// SSG - статичная генерация контента
export const getStaticPaths:GetStaticPaths = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    const paths = data.map(({id}) => (
        {
            params: {id: id.toString()}
        }
    ))
    return {
        paths,
        fallback: false
    };
};

export const getStaticProps = async (context) => {
    const {id} = context.params
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await response.json();

    // Специальная проверка если запрос неуспешный
    if (!data) {
        return {
            notFound: true,
        };
    }
    return {
        props: { post: data },
    };
};

const Post:FC<postTypeProps> = ({post}) => {
    return (
        <>
            <PostInfo post={post}/>
        </>
    );
};

export default Post;
