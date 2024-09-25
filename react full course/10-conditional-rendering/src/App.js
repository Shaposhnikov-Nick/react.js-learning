import './App.css';
import PetInfo from './components/PetInfo';

function App() {
  return (
    <div className="App">
      <PetInfo animal={'cat'} age={3} hasPet={true}/>
    </div>
  );
}

export default App;
