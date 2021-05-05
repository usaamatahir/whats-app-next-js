import styled from "styled-components";
import { Avatar, IconButton } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
const HeaderComponent = () => {
  return (
    <Header>
      <UserAvatar />
      <IconsContainer>
        <IconButton>
          <ChatIcon />
        </IconButton>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </IconsContainer>
    </Header>
  );
};

export default HeaderComponent;

const Header = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  z-index: 1;
  border: 1px solid #f0f0f0;
  padding: 10px;
  height: 80px;
`;

const UserAvatar = styled(Avatar)`
  margin: 10px;
  cursor: pointer;
  transition: 0.2s all ease-in;
  :hover {
    opacity: 0.8;
  }
`;

const IconsContainer = styled.div``;
