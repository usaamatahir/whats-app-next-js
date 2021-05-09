import { Avatar } from "@material-ui/core";
import styled from "styled-components";
import { useRouter } from "next/router";

const ContactList = () => {
  const router = useRouter();
  const EnterChat = () => {
    router.push(`/chat/123`);
  };
  return (
    <ChatListComponent>
      <ChatContainer onClick={EnterChat}>
        <UserAvatar />
        <ChatDiv>
          <ChatTitle>Title</ChatTitle>
          <ChatPara>This is latest message</ChatPara>
          <LastMessageTime>Sun 12</LastMessageTime>
        </ChatDiv>
      </ChatContainer>
      <ChatContainer onClick={EnterChat}>
        <UserAvatar />
        <ChatDiv>
          <ChatTitle>Title</ChatTitle>
          <ChatPara>This is latest message</ChatPara>
          <LastMessageTime>Sun 12</LastMessageTime>
        </ChatDiv>
      </ChatContainer>
      <ChatContainer onClick={EnterChat}>
        <UserAvatar />
        <ChatDiv>
          <ChatTitle>Title</ChatTitle>
          <ChatPara>This is latest message</ChatPara>
          <LastMessageTime>Sun 12</LastMessageTime>
        </ChatDiv>
      </ChatContainer>
      <ChatContainer onClick={EnterChat}>
        <UserAvatar />
        <ChatDiv>
          <ChatTitle>Title</ChatTitle>
          <ChatPara>This is latest message</ChatPara>
          <LastMessageTime>Sun 12</LastMessageTime>
        </ChatDiv>
      </ChatContainer>
    </ChatListComponent>
  );
};

export default ContactList;

const ChatListComponent = styled.div`
  width: 100%;
  max-height: 100vh;
  height: 100%;
`;

const ChatContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  border-bottom: 1px solid #f5f5f5;
  cursor: pointer;
  :hover {
    background-color: #f9f9f9;
  }
`;

const UserAvatar = styled(Avatar)`
  margin: 10px;
  cursor: pointer;
  transition: 0.2s all ease-in;
  :hover {
    opacity: 0.8;
  }
`;

const ChatDiv = styled.div`
  position: relative;
  width: 100%;
`;

const ChatTitle = styled.h5`
  margin-top: 5px;
  margin-bottom: 5px;
`;

const ChatPara = styled.p`
  margin-top: 5px;
  margin-bottom: 5px;
  word-break: break-all;
`;

const LastMessageTime = styled.span`
  position: absolute;
  top: 5px;
  right: 10px;
  font-size: 12px;
`;
