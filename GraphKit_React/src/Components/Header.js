import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled("header")`
  margin-bottom: 30px;
`;
const List = styled("ul")`
  display: flex;
`;
const Item = styled("li")`
  margin-right: 20px;
  text-transform: uppercase;
  font-weight: 600;
  color: ${props => (props.selected ? "white" : "black")};
  background-color: ${props => (props.selected ? "#f1c40f" : "white")};
`;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <List>
      <Item selected={pathname === "/"}>
        <Link to="/">Prices</Link>
      </Item>
     
      
    </List>
  </Header>
));
