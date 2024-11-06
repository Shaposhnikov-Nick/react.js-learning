import type {FC, PropsWithChildren} from "react";

const DashboardLayout: FC<PropsWithChildren<unknown>> = ({children}) => {
    return (
        <div>
            <h1>Dashboard</h1>
            {children}
        </div>
    )
}

export default DashboardLayout