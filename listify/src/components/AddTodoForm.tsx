import React, { useState } from 'react';
import { TextField, Button, Checkbox, Stack } from '@mui/material';

interface AddTodoFormProps {
  onAddTodo: (todo: {
    id: number;
    title: string;
    completed: boolean;
    due_date: string | null;
    priority: number | null;
  }) => void;
}

const AddTodoForm: React.FC<AddTodoFormProps> = ({ onAddTodo }) => {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState('');
  const [completed, setCompleted] = useState(false);
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState<number | null>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (title.trim() && id > 0) {
      onAddTodo({
        id,
        title,
        completed,
        due_date: dueDate || null,
        priority: priority !== null ? priority : null,
      });
      setId(0);
      setTitle('');
      setCompleted(false);
      setDueDate('');
      setPriority(null);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap">
        <TextField
          label="ID"
          type="number"
          value={id || ''}
          onChange={e => setId(Number(e.target.value))}
          required
          size="small"
        />
        <TextField
          label="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
          size="small"
        />
        <TextField
          label="Due Date"
          type="date"
          value={dueDate}
          onChange={e => setDueDate(e.target.value)}
          InputLabelProps={{ shrink: true }}
          size="small"
        />
        <TextField
          label="Priority"
          type="number"
          value={priority ?? ''}
          onChange={e => setPriority(e.target.value ? Number(e.target.value) : null)}
          inputProps={{ min: 1, max: 5 }}
          size="small"
        />
        <Checkbox
          checked={completed}
          onChange={e => setCompleted(e.target.checked)}
        />
        <span>Completed</span>
        <Button type="submit" variant="contained" color="primary">
          Add Todo
        </Button>
      </Stack>
    </form>
  );
};

export default AddTodoForm;