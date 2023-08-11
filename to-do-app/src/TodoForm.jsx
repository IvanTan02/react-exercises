import ListItem from '@mui/material/ListItem';
import { TextField } from '@mui/material';
import { useState } from 'react';
import { Create } from '@mui/icons-material';
import { InputAdornment } from '@mui/material';
import { IconButton } from '@mui/material';

export default function TodoForm({ add }) {
  const [text, setText] = useState('');

  const handleChange = (evt) => {
    setText(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    add(text);
    setText('');
  };

  return (
    <ListItem sx={{ display: 'flex', justifyContent: 'center' }}>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Add a New Task"
          variant="outlined"
          onChange={handleChange}
          value={text}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton edge="end" type="submit">
                  <Create />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </form>
    </ListItem>
  );
}
