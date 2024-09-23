import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";
import styled from "styled-components";
const StyledAppLayout = styled.div`
  display: flex;
  height: 100vh;
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  overflow: auto;
`;

const Contaienr = styled.div`
  max-width: 120rem;
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
function AppLayout() {
  return (
    <StyledAppLayout>
      <SideBar />
      <AppContainer>
        <Header />
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
