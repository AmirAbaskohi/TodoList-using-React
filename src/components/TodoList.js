import React from "react";
import Todo from "./Todo"

const TodoList = ({todos,setTodos,filteredTodos}) => {
	return(
	<div className="todo-container">
      <ul className="todo-list">
      	{filteredTodos.map(todo => (
      		<Todo todo={todo} text={todo.text} key={todo.id} setTodos={setTodos} todos={todos} />
      	))}
      </ul>
    </div>
	);
};

export default TodoList;