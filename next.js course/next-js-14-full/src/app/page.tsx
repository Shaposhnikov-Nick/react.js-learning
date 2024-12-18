import {getAllProducts, getAllProducts2} from "@/app/actions/getAllProducts";
import Link from "next/link";
import {promises as fs} from "fs";

export const dynamic = 'force-dynamic'

export default async function Home() {
    const response = await getAllProducts2()
    const file = await fs.readFile(process.cwd() + "/data.txt", "utf-8")

    return (
        <div
            className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <Link href="/history">History</Link>
                <div>
                    {file}
                </div>

                {
                    response.products.map((product) => (
                        <div key={product.id} className="flex flex-col items-center justify-center">
                            <h2>{product.title}</h2>
                            <p>{product.description}</p>
                        </div>
                    ))
                }
                Total: {response.total}
            </main>
            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
            </footer>
        </div>
    );
}
