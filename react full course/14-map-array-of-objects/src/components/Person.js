function Person({id, firstName, lastName, email, img}) {
  return (
    <div className="card">
      <img src={img} />
      <h3>{firstName} {lastName}</h3>
      <h4>{email}</h4>
    </div>
  )
}

export default Person;