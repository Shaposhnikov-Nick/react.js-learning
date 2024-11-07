
const fetchData = () => {
    return fetch('https://jsonplaceholder.typicode.com/todos/1', {
        // cache: "no-store"     // SSR
        // cache: "force-cache"  // SSG
        next: {revalidate: 10}   // ISG ревалидация каждые 10 с
    }).then(res => res.json())
}

const ProfilePage = async () => {
    const data = await fetchData()
    console.log(data)

    return (
        <div>{data.id}</div>
    )
}

export default ProfilePage