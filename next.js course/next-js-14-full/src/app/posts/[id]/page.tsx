import {getPost} from "@/app/actions/getPost";

// https://nextjs.org/docs/app/building-your-application/upgrading/version-15#asynchronous-layout
// https://nextjs.org/docs/app/api-reference/functions/generate-metadata#generatemetadata-function

type Params = Promise<{ id: number }>

// export async function generateMetadata(
//     {params}: { params: Params },
// ) {
//     // read route params
//     const id = (await params).id
// }

const Post = async ({params}: { params: Params }) => {
    const id = (await params).id
    const post = await getPost(id)
    return (
        <>
            <div>Post:</div>
            <div>{post.title}</div>
            <div>{post.body}</div>
        </>
    );
}

export default Post