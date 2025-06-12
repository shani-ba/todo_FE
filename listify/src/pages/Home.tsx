import React from 'react';
import TodoList from '../components/TodoList';
import AddTodoForm from '../components/AddTodoForm';
import { useTodos } from '../hooks/useTodos';

const Home: React.FC = () => {
    const { todos, addTodo, deleteTodo } = useTodos();

    return (
        <div>
            <h1>Listify</h1>
            <AddTodoForm addTodo={addTodo} />
            <TodoList todos={todos} deleteTodo={deleteTodo} />
        </div>
    );
};

export default Home;