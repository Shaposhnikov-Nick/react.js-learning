import {FC} from 'react'
import Layout from "@/components/layout/Layout";
import {Head} from "next/document";

const NotFound: FC = () => {
    return (
        <Layout>
            {/*<Head>*/}
            {/*    <title>Not Found</title>*/}
            {/*</Head>*/}
            <div style={{textAlign: 'center'}}>
                Page not found
            </div>
        </Layout>
    )
}

export default NotFound