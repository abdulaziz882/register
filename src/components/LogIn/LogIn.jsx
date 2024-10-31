import { Box, TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const Change = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setErrorMessage(''); 
    setSuccessMessage(''); 
  };
  const Login = () => {
    if (!formData.username || !formData.password) {
      setErrorMessage('Все поля должны быть заполнены');
      return;
    }
    setErrorMessage(''); 
    setSuccessMessage('Вы вошли на наш сайт но это всего лишь тестовое задание'); 
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Box 
        className="container" 
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          width: 300,
        }}
      >
        <Typography variant="h5" align="center">Вход</Typography>
        <TextField 
          id="username" 
          label="Логин" 
          variant="filled" 
          value={formData.username}
          onChange={Change}
          error={!formData.username && !!errorMessage}
          helperText={!formData.username && errorMessage}
        />
        <TextField
          id="password"
          label="Пароль"
          type="password"
          autoComplete="current-password"
          variant="filled"
          value={formData.password}
          onChange={Change}
          error={!formData.password && !!errorMessage}
          helperText={!formData.password && errorMessage}
        />
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}> 
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={() => navigate('/register')}
          >
            Регистрация
          </Button>
          <Button 
            variant="contained" 
            color="primary" 
            fullWidth
            onClick={Login}
          >
            Войти
          </Button>
        </Box>
        {errorMessage && (
          <Typography variant="subtitle2" color="error" align="center">
            {errorMessage}
          </Typography>
        )}
        {successMessage && (
          <Typography variant="subtitle1" color="green" align="center">
            {successMessage}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default Login;
