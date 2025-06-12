import { useEffect, useState } from 'react';
import { fetchTodos, addTodo, updateTodo, deleteTodo } from '../api';

const useTodos = () => {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadTodos = async () => {
            try {
                const fetchedTodos = await fetchTodos();
                setTodos(fetchedTodos);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        loadTodos();
    }, []);

    const createTodo = async (newTodo) => {
        try {
            const addedTodo = await addTodo(newTodo);
            setTodos((prevTodos) => [...prevTodos, addedTodo]);
        } catch (err) {
            setError(err);
        }
    };

    const editTodo = async (updatedTodo) => {
        try {
            const response = await updateTodo(updatedTodo);
            setTodos((prevTodos) =>
                prevTodos.map((todo) => (todo.id === response.id ? response : todo))
            );
        } catch (err) {
            setError(err);
        }
    };

    const removeTodo = async (id) => {
        try {
            await deleteTodo(id);
            setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
        } catch (err) {
            setError(err);
        }
    };

    return { todos, loading, error, createTodo, editTodo, removeTodo };
};

export default useTodos;