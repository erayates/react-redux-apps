import React from 'react'
import { destroyCompleted,changeActiveFilter, selectTodos, selectActiveFilter, } from '../redux/todos/todosSlice'
import { useDispatch, useSelector } from 'react-redux'

function ContentFooter() {
	const items = useSelector(selectTodos)
	const itemsLeft = items.filter(item => !item.completed).length

	const activeFilter = useSelector(selectActiveFilter)

	const dispatch = useDispatch()
  return (
    <footer className="footer">
		<span className="todo-count">
			<strong>{itemsLeft}</strong> item{itemsLeft > 1 && 's'} left
		</span>

		<ul className="filters">
			<li>
				<a href="#/" className={activeFilter === 'all' && 'selected'} onClick={() => dispatch(changeActiveFilter('all'))}>All</a>
			</li>
			<li>
			<a href="#/" className={activeFilter === 'active' && 'selected'} onClick={() => dispatch(changeActiveFilter('active'))}>Active</a>
			</li>
			<li>
			<a href="#/" className={activeFilter === 'completed' && 'selected'} onClick={() => dispatch(changeActiveFilter('completed'))}>Completed</a>
			</li>
		</ul>
		
		<button className="clear-completed" onClick={() => dispatch(destroyCompleted())}>
			Clear completed
		</button>
		
	</footer>
  )
}

export default ContentFooter