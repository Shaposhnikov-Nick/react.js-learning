import '../css/Post.css'

function Post({id, title, userId, body}) {
  return (
    <div className="post">
      <small>{id}</small>
      <h2>User ID: {userId}</h2>
      <p>{title}</p>
      <h3>{body}</h3>
    </div>
  )
}

export default Post