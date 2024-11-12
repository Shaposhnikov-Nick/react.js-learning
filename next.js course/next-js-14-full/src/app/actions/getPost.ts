import {Post} from "../../../types";

export async function getPost(id: number): Promise<Post> {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,
        // {cache: "force-cache"} // static SSG (analog of getStaticProps)
        {cache: "no-store"}   // dynamic SSR (analog of getServerSideProps)
        // {next: {revalidate: 10}} // ISR (analog of getStaticProps and revalidate)
    ).then((res) => res.json())
}