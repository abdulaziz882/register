import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Register = () => {
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const Change = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setErrorMessage(""); 
  };

  const Register = () => {
   
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password || !formData.confirmPassword) {
      setErrorMessage("Все поля должны быть заполнены");
      return;
    }

    
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Пароли не совпадают");
      return;
    }

   
    setSuccessMessage("Вы успешно зарегистрировались");
    setErrorMessage(""); 
    setTimeout(() => {
      navigate('/');
    }, 2000); 
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
        <Typography variant="h5" align="center">Зарегистрируйтесь</Typography>
        <TextField 
          id="firstName" 
          label="Имя" 
          variant="filled" 
          value={formData.firstName}
          onChange={Change}
          error={!formData.firstName && !!errorMessage}
          helperText={!formData.firstName && errorMessage}
        />
        <TextField 
          id="lastName" 
          label="Фамилия" 
          variant="filled" 
          value={formData.lastName}
          onChange={Change}
          error={!formData.lastName && !!errorMessage}
          helperText={!formData.lastName && errorMessage}
        />
        <TextField 
          id="email" 
          label="Email" 
          variant="filled" 
          value={formData.email}
          onChange={Change}
          error={!formData.email && !!errorMessage}
          helperText={!formData.email && errorMessage}
        />
        <TextField
          id="password"
          label="Пароль"
          type="password"
          variant="filled"
          value={formData.password}
          onChange={Change}
          error={!formData.password && !!errorMessage}
          helperText={!formData.password && errorMessage}
        />
        <TextField
          id="confirmPassword"
          label="Повторите Пароль"
          type="password"
          variant="filled"
          value={formData.confirmPassword}
          onChange={Change}
          error={(formData.password !== formData.confirmPassword || !formData.confirmPassword) && !!errorMessage}
          helperText={(formData.password !== formData.confirmPassword) ? "Пароли не совпадают" : (!formData.confirmPassword && errorMessage)}
        />
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}> 
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={() => navigate('/')}
          >
            Назад
          </Button>
          <Button 
            variant="contained" 
            color="primary" 
            fullWidth
            onClick={Register}
          >
            Далее
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
}

export default Register;
