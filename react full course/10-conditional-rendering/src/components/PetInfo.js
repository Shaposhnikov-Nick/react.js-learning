function PetInfo({animal, age, hasPet}) {
  return (
    hasPet ?
      (<h1>My {animal} is {age} years</h1>) :
      (<h1>I don't have an animal</h1>)
  )
}

export default PetInfo;