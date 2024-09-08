import React, { useState } from 'react';

const TodoList = () => {
    // Initialize todos with an id property
    const [todos, setTodos] = useState([
        { id: 1, text: 'Learn React', completed: false },
        { id: 2, text: 'Learn Jest', completed: false },
    ]);
    const [newTodo, setNewTodo] = useState('');

    // Function to add a new todo
    const handleAdd = () => {
        if (newTodo.trim()) {
            const newId = todos.length ? Math.max(todos.map(todo => todo.id)) + 1 : 1;
            setTodos([...todos, { id: newId, text: newTodo, completed: false }]);
            setNewTodo('');
        }
    };

    // Function to toggle todo completion
    const handleToggle = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    // Function to delete a todo
    const handleDelete = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div>
            <h1>Todo List</h1>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                        <span onClick={() => handleToggle(todo.id)}>{todo.text}</span>
                        <button onClick={() => handleDelete(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Add a new todo"
            />
            <button onClick={handleAdd}>Add Todo</button>
        </div>
    );
};

export default TodoList;
