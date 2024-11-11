import {getAllPosts} from "@/app/actions/getAllPosts";
import Link from "next/link";


const Posts = async () => {
    const posts = await getAllPosts()

    return (
        <div>
            <h2>Posts:</h2>
            <ul>
                {
                    posts.map((post) => (
                        <li key={post.id}>
                            <Link href={`/posts/${post.id}`}>{post.id} {post.title}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Posts