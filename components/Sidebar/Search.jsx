import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";

const SearchComponent = () => {
  return (
    <Search>
      <SearchBox>
        <SearchIcon />
        <SearchInput placeholder="Search in chats" />
      </SearchBox>
    </Search>
  );
};

export default SearchComponent;

const Search = styled.div`
  height: 60px;
  background-color: #f5f5f5;
  padding: 7px 20px;
  position: sticky;
  top: 80px;
  z-index: 1;
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border: 1px solid #f5f5f5;
  border-radius: 50px;
  padding: 5px 10px;
  height: 45px;
`;

const SearchInput = styled.input`
  outline-width: 0;
  border: none;
  flex: 1;
  padding: 0 5px;
`;
