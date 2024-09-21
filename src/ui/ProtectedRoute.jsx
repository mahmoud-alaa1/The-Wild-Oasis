import styled from "styled-components";
import useUser from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-grey-50);
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  //1. Load the Authenticated user

  const { fetchStatus, isPending, isAuthenticated } = useUser();

  //2 while loading, show a spinner

  // 3if there is no auth user, redirect to the login page

  useEffect(() => {
    if (!isAuthenticated && !isPending && fetchStatus !== "fetching")
      navigate("/login");
  }, [isAuthenticated, isPending, navigate, fetchStatus]);

  if (isPending)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  //4 if there is a user render the app
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
