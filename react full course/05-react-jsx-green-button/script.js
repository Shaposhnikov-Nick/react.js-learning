// функциональный компонент
const App = ({ initialBtnText, initialClassesList }) => {
  // useState - хук для изменения состояния компонента
  const [btnText, setBtnText] = React.useState(initialBtnText);
  const [classesList, setClassesList] = React.useState(initialClassesList);

  // измненение состояния элементов компонента
  const onBtnClick = () => {
    setBtnText("Clicked!");
    setClassesList("green-btn");
  };

  return (
    <div className='app'>
      <button className={classesList} onClick={onBtnClick}>
        {btnText}
      </button>
    </div>
  );
};

const container = document.getElementById("app");
// создание корневого элемента
const root = ReactDOM.createRoot(container);
// рендер функционального компонента в корневом элементе (initialBtnText, initialClassesList - свойства компонента)
root.render(<App initialBtnText='Click me' initialClassesList='' />);
