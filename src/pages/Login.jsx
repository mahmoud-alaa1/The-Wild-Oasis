import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";
import { device } from "../utils/constants";
const LoginLayout = styled.main`
  height: 100vh;
  display: flex;
  align-content: center;
  justify-content: center;
  background-color: var(--color-grey-50);
  padding: 2rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  width: 40%;
  @media ${device.laptop} {
    width: 50%;
  }
  @media ${device.tablet} {
    width: 70%;
  }
  @media ${device.mobileL} {
    width: 90%;
    align-items: center;
  }
  margin: auto;
`;

function Login() {
  return (
    <LoginLayout>
      <Container>
        <Logo />
        <Heading as="h3">Log in to your account</Heading>
        <LoginForm />
      </Container>
    </LoginLayout>
  );
}

export default Login;
