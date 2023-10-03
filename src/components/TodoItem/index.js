import './index.css'

const TodoItem = props => {
  const {initialTodosList, deleteTodo} = props
  const {title, id} = initialTodosList

  const onDelete = () => {
    deleteTodo(id)
  }

  return (
    <li className="todo-card">
      <p className="todo-title">{title}</p>
      <button className="delete-button" type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
