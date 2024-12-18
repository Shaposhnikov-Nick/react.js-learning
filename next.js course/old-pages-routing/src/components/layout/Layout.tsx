import {FC, PropsWithChildren} from 'react'
import Header from "@/components/layout/header/Header";

const Layout: FC<PropsWithChildren<unknown>> = ({children}) => {
    return (
        <div>
            <Header/>
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout