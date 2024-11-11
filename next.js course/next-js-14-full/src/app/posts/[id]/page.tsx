import {FC} from 'react'
import {getPost} from "@/app/actions/getPost";

// export async function generateStaticParams() {
//     const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json())
//
//     return posts.map((post: any) => ({
//         slug: post.title.replace(/\s+/g, '-'),
//     }))
// }

interface Params {
    params: {
        postId: number
    }
}

// type Params = Promise<{ id: number }>

// const Post = async ({params: {postId}}: Params) => {
// const Post = async (props: {params: Params}) => {
const Post: FC = ({params}: Params) => {
    // const id = (await props.params).postId
    // const id = ((await params).id)
    // console.log("II" + await params)
    // const post = await getPost(id)
    console.log("P " + params)

    return (
        <>
            <div>Post:</div>
            {/*<div>{post.title}</div>*/}
            {/*<div>{post.body}</div>*/}
        </>
    );
}

export default Post