import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: darkorange;
  .search {
    display: flex;
    align-items: center;
    border: 1px solid gray;
    border-radius: 12px;
    width: 30%;
    background-color: white;
  }
  .search label {
    color: gray;
  }
  .search-icon {
    margin: 0 4px;
    color: gray;
    cursor: pointer;
  }
  .search input {
    padding-left: 4px;
    border-radius: 12px;
  }
  .cancel-icon {
    color: gray;
    cursor: pointer;
  }
  .cancel-icon:last-of-type {
    margin-left: auto;
  }
  .icons {
    display: flex;
    margin-right: 16px;
    align-items: center;
  }
  .mail {
    margin: 0 6px;
    cursor: pointer;
  }
  .notifications {
    margin: 0 6px;
    cursor: pointer;
  }
  .avatar {
    margin: 0 8px;
    cursor: pointer;
  }
`;
