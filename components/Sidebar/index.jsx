import { Button } from "@material-ui/core";
import styled from "styled-components";
import ContactList from "./ContactList";
import HeaderComponent from "./Header";
import SearchComponent from "./Search";

const Sidebar = () => {
  return (
    <Container>
      <HeaderComponent />
      <SearchComponent />
      <SideButton>Start new Chat</SideButton>
      <ContactList />
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  border-right: 1px solid #f5f5f5;
  flex: 0.45;
  height: 100vh;
  min-width: 300px;
  max-width: 400px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const SideButton = styled(Button)`
  width: 100%;
  &&& {
    border-top: 1px solid #f5f5f5;
    border-bottom: 1px solid #f5f5f5;
  }
`;
