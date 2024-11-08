import {FC} from 'react'

export async function generateStaticParams() {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json())

    return posts.map((post: any) => ({
        slug: post.title.replace(/\s+/g, '-'),
    }))
}

const Post: FC = ({params}: any) => {
    return (
        <div>Post with id {params.slug}</div>
    );
}

export default Post