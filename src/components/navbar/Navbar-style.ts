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
    width: 36%;
    background-color: white;
    margin: 0 12px;
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

  .avatar {
    margin: 0 8px;
    cursor: pointer;
  }

  @media only screen and (max-width: 768px) {
    .logo-text {
      font-size: 18px;
    }
    .search {
      width: 50%;
    }
  }
`;
