import Heading from "@/components/Heading";

const PostInfo = ({post}) => {
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