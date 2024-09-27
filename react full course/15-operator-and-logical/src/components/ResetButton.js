function ResetButton({onClick}) {
  return (
    <div>
      <button style={{backgroundColor: 'lightgreen'}} onClick={onClick}>Reset</button>
    </div>
  )
}

export default ResetButton;