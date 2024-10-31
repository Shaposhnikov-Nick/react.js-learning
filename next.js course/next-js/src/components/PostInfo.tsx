import {FC} from "react"
import Heading from "./Heading";
import {postType} from "../../types";

type postInfoProps = {
    post: postType
}

const PostInfo:FC<postInfoProps> = ({post}) => {
    if (!post) {
        return <Heading tag="h3" text="Empty post"/>
    }

    const {title, body} = post || {}

    return (
        <>
            <Heading text={title}/>
            {body}
        </>
    )
}

export default PostInfo