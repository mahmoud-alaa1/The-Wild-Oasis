import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";
import useLogin from "./useLogin";
import SpinnerMini from "../../ui/SpinnerMini";
import styled from "styled-components";
function LoginForm() {
  const [email, setEmail] = useState("test@example.com");
  const [password, setPassword] = useState("12345678");
  const { login, isLogging } = useLogin();

  const AccountInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: #215cff11;
    border-radius: 1rem;
    padding: 1.5rem;
    color: var(--note-color);
    font-weight: 500;
  `;

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login({ email, password });
  }

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <FormRowVertical label="Email address">
        <Input
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          disabled={isLogging}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormRowVertical>
      <FormRowVertical label="Password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          disabled={isLogging}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button disabled={isLogging} size="large">
          {!isLogging ? "Login" : <SpinnerMini />}
        </Button>
      </FormRowVertical>
      <AccountInfo>
        <div className="email">
          email: <strong>test@example.com</strong>
        </div>
        <div className="password">
          password: <strong>12345678</strong>
        </div>
      </AccountInfo>
    </Form>
  );
}

export default LoginForm;
