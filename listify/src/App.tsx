import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Stack,
} from "@mui/material";
import './App.css';

type Todo = {
  id: number;
  title: string;
  completed: boolean;
  due_date: string | null;
  priority: number | null;
};

const API_URL = "http://localhost:8000";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [form, setForm] = useState<Todo>({
    id: 0,
    title: "",
    completed: false,
    due_date: null,
    priority: null,
  });

  const fetchTodos = async () => {
    const res = await fetch(`${API_URL}/todos`);
    const data = await res.json();
    setTodos(data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => {
      if (name === "id" || name === "priority") {
        return { ...prev, [name]: value ? Number(value) : null };
      }
      if (name === "completed") {
        return { ...prev, completed: checked };
      }
      if (name === "due_date") {
        return { ...prev, due_date: value || null };
      }
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Validate required fields
    if (!form.id || !form.title) return;
    await fetch(`${API_URL}/todos`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    fetchTodos();
    setForm({ id: 0, title: "", completed: false, due_date: null, priority: null });
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4, bgcolor: '#ffe4ec', minHeight: '100vh', py: 4 }}>
      <Typography variant="h3" align="center" gutterBottom sx={{ color: '#d81b60', fontWeight: 700 }}>
        listify
      </Typography>
      <Paper sx={{ p: 2, mb: 4 }}>
        <form onSubmit={handleSubmit}>
          <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap">
            <TextField
              label="ID"
              name="id"
              type="number"
              value={form.id || ''}
              onChange={handleChange}
              required
              size="small"
            />
            <TextField
              label="Title"
              name="title"
              value={form.title}
              onChange={handleChange}
              required
              size="small"
            />
            <TextField
              label="Due Date"
              name="due_date"
              type="date"
              value={form.due_date || ''}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              size="small"
            />
            <TextField
              label="Priority"
              name="priority"
              type="number"
              value={form.priority ?? ''}
              onChange={handleChange}
              inputProps={{ min: 1, max: 5 }}
              size="small"
            />
            <Stack direction="row" alignItems="center">
              <Checkbox
                name="completed"
                checked={form.completed}
                onChange={handleChange}
              />
              <Typography>Completed</Typography>
            </Stack>
            <Button type="submit" variant="contained" sx={{ bgcolor: '#d81b60' }}>
              Add Todo
            </Button>
          </Stack>
        </form>
      </Paper>
      <Paper>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Completed</TableCell>
                <TableCell>Due Date</TableCell>
                <TableCell>Priority</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {todos.map((todo) => (
                <TableRow key={todo.id}>
                  <TableCell>{todo.id}</TableCell>
                  <TableCell>{todo.title}</TableCell>
                  <TableCell>
                    <Checkbox checked={todo.completed} disabled />
                  </TableCell>
                  <TableCell>{todo.due_date || ''}</TableCell>
                  <TableCell>{todo.priority ?? ''}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  );
};

export default App;
