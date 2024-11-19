import Link from "next/link";

export async function generateMetadata() {
    return {
        title: "History"
    }
}

const History = async () => {

    return (
        <div>
            <h2>History page</h2>
            <Link href="/">Home</Link>
        </div>
    )
}

export default History