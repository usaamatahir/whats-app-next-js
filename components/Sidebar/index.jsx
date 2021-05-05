import { Button } from "@material-ui/core";
import styled from "styled-components";
import HeaderComponent from "./Header";
import SearchComponent from "./Search";

const Sidebar = () => {
  return (
    <Container>
      <HeaderComponent />
      <SearchComponent />
      <SideButton>Start new Chat</SideButton>
    </Container>
  );
};

export default Sidebar;

const Container = styled.div``;

const SideButton = styled(Button)`
  width: 100%;
  font-weight: 600;
  &&& {
    border-top: 1px solid #f5f5f5;
    border-bottom: 1px solid #f5f5f5;
  }
`;
