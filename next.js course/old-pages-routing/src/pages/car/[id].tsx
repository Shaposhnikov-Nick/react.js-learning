import {FC} from 'react'
import {useRouter} from "next/router";

const Car: FC = () => {
    const pathname = useRouter()
    console.log(pathname)
    return (
        <div>Car page</div>
    )
}

export default Car