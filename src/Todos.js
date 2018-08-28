import React from 'react';

const Todos = ({ todos, deleteTodo }) => {
    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="collection-item" key={todo.id}>
                    <span onClick={() => { deleteTodo(todo.id) }}>{todo.content}  <span className="right"> X </span></span>
                </div>
            )
        }
        )
    ) : (
            <p className="center blue-text pointer"> You have no Todo's left, Yay! </p>
        )
    return (
        <div className="todo collection">
            {todoList}
        </div>
    )
}

export default Todos;