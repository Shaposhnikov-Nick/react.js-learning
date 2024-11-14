import {ProductsResponse} from "../../../types";

export async function getAllProducts(): Promise<ProductsResponse> {
    return fetch('https://dummyjson.com/products',
        {cache: "force-cache"} // static SSG (analog of getStaticProps)
        // {cache: "no-store"}   // dynamic SSR (analog of getServerSideProps)
        // {next: {revalidate: 10}} // ISR (analog of getStaticProps and revalidate)
    ).then((res) => res.json())


}

// for example
export async function getAllProducts2(): Promise<ProductsResponse> {
    const data = await fetch('https://dummyjson.com/products')

    if(!data.ok){
        throw new Error('Failed to fetch data')
    }

    return await data.json()
}