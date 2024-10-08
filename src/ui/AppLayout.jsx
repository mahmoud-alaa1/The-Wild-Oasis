import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import styled from "styled-components";
import { useRef } from "react";

const StyledAppLayout = styled.div`
  display: flex;
  height: 100vh;
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem;
  overflow: auto;
`;

const Contaienr = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

const AppContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const Note = styled.div`
  text-align: center;
  background-color: var(--note-background);
  color: var(--note-color);
  padding: 1.5rem;
`;

function AppLayout() {
  const sidebarRef = useRef(null);

  return (
    <StyledAppLayout>
      <Sidebar sidebarRef={sidebarRef} />
      <AppContainer>
        <Note>
          Data mutations (create, update, delete) are deactivated in this demo
          app 🤗
        </Note>
        <Header sidebarRef={sidebarRef} />
        <Main style={{ flexGrow: 1 }}>
          <Contaienr>
            <Outlet />
          </Contaienr>
        </Main>
      </AppContainer>
    </StyledAppLayout>
  );
}

export default AppLayout;
