import { useSelector } from 'react-redux';
import { Paper, Typography, Box, Button } from '@mui/material';
import hero from 'photo/hero.jpg';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn, selectUser } from 'redux/auth/authSelectors';
import { boxMainStyle, paperMainStyle } from '../StylePages';

export default function HomePage() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  return (
    <Paper sx={paperMainStyle(hero)}>
      <Box sx={boxMainStyle}>
        {isLoggedIn ? (
          <>
            <Typography
              component="h1"
              variant="h3"
              color="orange"
              font-size="18"
              gutterBottom
            >
              Hi, {user.name}! <br />
              Welcome to your phonebook.
            </Typography>
          </>
        ) : (
          <>
            <Typography component="h1" variant="h3" color="orange" gutterBottom>
              Hello! I'm your phonebook.
            </Typography>
            <Typography variant="h5" color="orange" paragraph>
              Please log in to your account or register.
            </Typography>
            <Button variant="contained">
              <NavLink to="/login">Sign In</NavLink>
            </Button>
          </>
        )}
      </Box>
    </Paper>
  );
}
