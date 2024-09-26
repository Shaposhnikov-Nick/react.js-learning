import {useState} from 'react'
import './App.css';
import Counter from "./components/Counter";
import Button from "./components/Button";

function App() {
  const [count, setCount] = useState(0)
  const incrementCount = () => {
    setCount(count + 1)
  }
  const texts = ['Click1', 'Click2', 'Click3', 'Click4', 'Click5', 'Click6']

  return (
    <div className="App">
      <Counter count={count}/>
      {texts.map((text, index) => (
        <Button onClick={incrementCount} text={text} key={index}/>
      ))}
    </div>
  );
}

export default App;
