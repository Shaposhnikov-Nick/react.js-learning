import Button from "../UI/Button";
import {RiDeleteBin2Line, RiRefreshLine} from "react-icons/ri";
import styles from './TodosActions.module.css'

function TodosActions({resetTodos, deleteCompletedTodos, completedTodosExists}) {
  return (
    <div className={styles.todosActionsContainer}>
      <Button title="Reset todos" onClick={resetTodos}><RiRefreshLine/></Button>
      <Button title="Clear completed todos" onClick={deleteCompletedTodos} disabled={!completedTodosExists}><RiDeleteBin2Line/></Button>
    </div>
  )
}

export default TodosActions