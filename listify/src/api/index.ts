import axios from 'axios';
import { Todo } from '../types/todo';

const API_URL = 'https://your-backend-api.com/api/todos';

export const fetchTodos = async (): Promise<Todo[]> => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const addTodo = async (todo: Omit<Todo, 'id'>): Promise<Todo> => {
    const response = await axios.post(API_URL, todo);
    return response.data;
};

export const updateTodo = async (todo: Todo): Promise<Todo> => {
    const response = await axios.put(`${API_URL}/${todo.id}`, todo);
    return response.data;
};

export const deleteTodo = async (id: string): Promise<void> => {
    await axios.delete(`${API_URL}/${id}`);
};