import {FC} from 'react'

interface Props {
    params: {
        id: string
    }
}

const Post: FC = ({params}: Props) => {
    return (
        <div>Post with id {params.id}</div>
    );
}

export default Post