import { Button, TextField } from "@mui/material";
import { Container, Card, Title } from "./styles";

const Signup = () => {
  return (
    <Container>
      <Card>
        <Title>Sign Up</Title>
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          size="small"
          name="email"
        />
        <TextField
          id="password"
          name="password"
          label="Password"
          variant="outlined"
          size="small"
        />
        <TextField
          id="confirm-password"
          name="confirm-password"
          label="Confirm Password"
          variant="outlined"
          size="small"
        />
        <Button variant="contained">Sign up</Button>
      </Card>
    </Container>
  );
};

export default Signup;
